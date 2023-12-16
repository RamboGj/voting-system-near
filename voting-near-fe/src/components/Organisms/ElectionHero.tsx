import { CandidateProps } from '@/@types/types'
import * as Dialog from '@radix-ui/react-dialog'
import { VoteModal } from '../Molecules/VoteModal'
import { Button } from '../Atoms/Buttons/Button'
import { ELectionOverview } from '../Molecules/ElectionOverview'

interface ElectionHeroProps {
  id: number
  name: string
  startsAt: string
  endsAt: string
  totalVotes: number
  candidates: CandidateProps[]
  electionIsNotHappening: boolean
}

export function ElectionHero({
  candidates,
  endsAt,
  id,
  name,
  startsAt,
  totalVotes,
  electionIsNotHappening,
}: ElectionHeroProps) {
  return (
    <div className="flex h-[240px] w-full flex-col rounded-[24px] bg-white p-8 shadow-md">
      <ELectionOverview
        candidatesCount={candidates.length}
        name={name}
        endsAt={endsAt}
        startsAt={startsAt}
        totalVotes={totalVotes}
      />
      {!electionIsNotHappening ? (
        <Dialog.Root>
          <Dialog.Trigger className="mt-auto">
            <Button>VOTE</Button>
          </Dialog.Trigger>
          <VoteModal candidates={candidates} electionId={id} />
        </Dialog.Root>
      ) : (
        <Button disabled className="mt-auto">
          Finished
        </Button>
      )}
    </div>
  )
}
