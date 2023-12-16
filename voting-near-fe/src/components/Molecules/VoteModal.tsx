import { CandidateProps } from '@/@types/types'
import * as Dialog from '@radix-ui/react-dialog'
import { User, X } from 'phosphor-react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from '../Atoms/Buttons/Button'
import { H2 } from '../Atoms/Text/H2'
import { CandidateSeal } from '../Atoms/Seals/CandidateSeal'
import { SpanText } from '../Atoms/Text/SpanText'

interface VoteModalProps {
  candidates: CandidateProps[]
  electionId: number
}

export function VoteModal({ candidates, electionId }: VoteModalProps) {
  const [selectedCandidate, setSelectedCandidate] =
    useState<CandidateProps | null>(null)

  const handleVote = async () => {
    const { onVote } = await import('@/utils/near')

    await onVote(electionId, selectedCandidate?.accountId || '')
  }

  const noneSelected = selectedCandidate === null
  const noCandidateAdded = candidates.length === 0

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-30 bg-black/80" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-50 h-[380px] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-[24px] bg-white p-9">
        <div className="flex h-full flex-col">
          <div className="flex w-full items-center justify-between">
            <div className="invisible" />
            <H2 className="mb-1">Vote</H2>
            <Dialog.Trigger>
              <X
                className="text-black transition-colors duration-300 hover:text-black/70"
                size={30}
              />
            </Dialog.Trigger>
          </div>
          <ul className="mt-4 flex w-full flex-col gap-3">
            {candidates.map((candidate) => {
              const isSelected =
                candidate.accountId === selectedCandidate?.accountId

              return (
                <li key={candidate.accountId}>
                  <div
                    role="button"
                    onClick={() => {
                      setSelectedCandidate(candidate)
                    }}
                    className={twMerge(
                      'flex cursor-pointer items-center gap-2 rounded-[12px] border px-6 py-4',
                      isSelected ? 'border-blue600' : 'border-gray300',
                    )}
                  >
                    <CandidateSeal
                      type={isSelected ? 'defaultSelected' : 'default'}
                    />
                    <SpanText>{candidate.accountId}</SpanText>
                  </div>
                </li>
              )
            })}
          </ul>

          <Button
            disabled={noneSelected || noCandidateAdded}
            onClick={handleVote}
            className="mt-auto"
          >
            Vote
          </Button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
