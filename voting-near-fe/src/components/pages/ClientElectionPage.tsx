'use client'

import { ElectionsProps, VoterProps } from '@/@types/types'
import { CandidatesOverview } from '@/components/organisms/CandidatesOverview'
import { ElectionHero } from '@/components/organisms/ElectionHero'
import { VotersList } from '@/components/organisms/VotersList'
import { NEAR_TIMESTAMP_CONVERTER_FACTOR } from '@/utils/constants'
import { useEffect, useState } from 'react'
import { H1 } from '../atoms/H1'
import { Header } from '../molecules/Header'

export default function ClientElectionPage({
  params,
}: {
  params: { id: number }
}) {
  const [election, setElection] = useState<ElectionsProps>()
  const [voters, setVoters] = useState<VoterProps[]>([])

  const hasEndedOrHasNotStarted =
    new Date().getTime() <
      Number(election?.startsAt) / NEAR_TIMESTAMP_CONVERTER_FACTOR ||
    new Date().getTime() >
      Number(election?.endsAt) / NEAR_TIMESTAMP_CONVERTER_FACTOR

  const getElectionData = async () => {
    const { onGetElectionData } = await import('@/utils/near')
    const data = await onGetElectionData(params.id)

    setElection(data.election)
    setVoters(data.voters)
  }

  useEffect(() => {
    getElectionData()
  }, [])

  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center">
        <Header />
        {election ? (
          <main className="flex w-full flex-col gap-8">
            <ElectionHero
              electionIsNotHappening={hasEndedOrHasNotStarted}
              candidates={election?.candidates}
              endsAt={election?.endsAt}
              startsAt={election?.startsAt}
              id={election?.id}
              name={election?.name}
              totalVotes={election?.totalVotes}
            />
            <CandidatesOverview
              electionIsNotHappening={hasEndedOrHasNotStarted}
              candidates={election.candidates}
              electionTotalVotes={election.totalVotes}
              electionId={election.id}
              endsAt={election.endsAt}
            />
            <VotersList voters={voters} />
          </main>
        ) : (
          <H1 className="animate-pulse">Loading...</H1>
        )}
      </div>
    </div>
  )
}
