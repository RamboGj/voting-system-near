'use client'

import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '@/components/atoms/Button'
import { H1 } from '@/components/atoms/H1'
import { Header } from '@/components/molecules/Header'
import { ElectionsList } from '@/components/organisms/ElectionsList'
import { CreateElectionModal } from '@/components/organisms/CreateElectionModal'

export interface ElectionsPropsHome {
  0: string
  1: {
    candidates: {
      accountId: string
      totalVotes: number
    }[]
    endsAt: string
    id: number
    name: string
    startsAt: string
    totalVotes: number
    voters: string[]
  }
}

export default function Home() {
  const [elections, setElections] = useState<ElectionsPropsHome[]>([])

  async function onFetchElections() {
    const { onGetAllElections } = await import('@/utils/near')
    const electionsData = await onGetAllElections()
    setElections(electionsData)
  }

  useEffect(() => {
    onFetchElections()
  }, [])

  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center pb-24">
        <Header />
        <main className="w-full">
          <div className="max-w-sm">
            <H1>Elections</H1>
            <Dialog.Root>
              <Dialog.Trigger>
                <Button>Create Election</Button>
              </Dialog.Trigger>
              <CreateElectionModal />
            </Dialog.Root>
          </div>
          <ElectionsList elections={elections} />
        </main>
      </div>
    </div>
  )
}
