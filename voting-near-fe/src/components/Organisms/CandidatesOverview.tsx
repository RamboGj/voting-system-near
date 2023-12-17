import { CandidateProps } from '@/@types/types'
import { Candidate } from '../Molecules/Candidate'
import * as Dialog from '@radix-ui/react-dialog'
import { AddCandidateModal } from './AddCandidateModal'
import { Button } from '../Atoms/Buttons/Button'
import { H2 } from '../Atoms/Text/H2'

interface CandidatesOverviewProps {
  candidates: CandidateProps[]
  electionTotalVotes: number
  electionId: number
  endsAt: string
  electionIsNotHappening: boolean
}

export function CandidatesOverview({
  candidates,
  electionTotalVotes,
  electionId,
  endsAt,
  electionIsNotHappening,
}: CandidatesOverviewProps) {
  return (
    <div className="flex w-full flex-col rounded-[24px] bg-white p-8 shadow-md">
      <div className="flex flex-col gap-4">
        <div className="flex w-full">
          <div className="flex w-full items-center justify-between">
            <H2 className="mb-1">Candidates</H2>
            {!electionIsNotHappening ? (
              <Dialog.Root>
                <Dialog.Trigger>
                  <Button>Add</Button>
                </Dialog.Trigger>
                <AddCandidateModal electionId={electionId} />
              </Dialog.Root>
            ) : null}
          </div>
        </div>
        <ul className="flex w-full flex-wrap items-center gap-8">
          {candidates.map(({ accountId, totalVotes }) => {
            return (
              <li key={accountId}>
                <Candidate
                  name={accountId}
                  totalVotes={totalVotes}
                  electionTotalVotes={electionTotalVotes}
                  candidatesCount={candidates.length}
                  endsAt={endsAt}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
