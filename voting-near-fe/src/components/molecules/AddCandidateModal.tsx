import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useState } from 'react'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import { H2 } from '../atoms/H2'

interface VoteModalProps {
  electionId: number
}

export function AddCandidateModal({ electionId }: VoteModalProps) {
  const [isAdding, setIsAdding] = useState<boolean>(false)
  const [candidateAccountId, setCandidateAccountId] = useState<string>('')

  const addCandidate = async () => {
    setIsAdding(true)
    const { onAddCandidate } = await import('@/utils/near')

    try {
      await onAddCandidate(electionId, candidateAccountId)
    } catch (err) {
      console.log('ERR', err)
      setIsAdding(false)
    }
  }

  const notAValidAccountId =
    !candidateAccountId.includes('.testnet') &&
    !candidateAccountId.includes('.near')

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-30 bg-black/80" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-50 h-[380px] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-[24px] bg-white p-9">
        <div className="flex h-full flex-col">
          <div className="flex w-full items-center justify-between">
            <div className="invisible" />
            <H2>ADD CANDIDATE</H2>
            <Dialog.Trigger>
              <X
                className="text-black transition-colors duration-300 hover:text-black/70"
                size={30}
              />
            </Dialog.Trigger>
          </div>

          <Input
            id="candidate"
            label="Candidate account"
            placeholder="candidate.near"
            type="text"
            value={candidateAccountId}
            onChange={(e) => {
              setCandidateAccountId(e.target.value)
            }}
          />

          <Button
            disabled={notAValidAccountId || isAdding}
            onClick={addCandidate}
            className="mt-auto"
          >
            Add
          </Button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
