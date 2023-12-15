import { CandidateProps } from '@/@types/types'
import { dateFormatter } from '@/utils/functions'
import * as Dialog from '@radix-ui/react-dialog'
import { VoteModal } from '../molecules/VoteModal'
import { Button } from '../atoms/Button'
import { H2 } from '../atoms/H2'
import { BulletText } from '../atoms/BulletText'

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
  const formattedEndAt = dateFormatter(endsAt)
  const formattedStartsAt = dateFormatter(startsAt)

  return (
    <div className="flex h-[240px] w-full flex-col rounded-[24px] bg-white p-8 shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex w-full max-w-lg flex-col">
          <div className="mb-1 block">
            <H2>{name}</H2>
            {/* <Link
              target="_blank"
              href={`https://testnet.nearblocks.io/address/${NEAR_SMART_CONTRACT}`}
            >
              <span className="text-sm text-gray500 transition-colors duration-300 hover:text-gray-600">
                View in block explorer
              </span>
            </Link> */}
          </div>

          <BulletText text={formattedStartsAt} status="warning" />
          <BulletText text={formattedEndAt} status="danger" />
        </div>
        <div className="flex flex-col font-medium text-gray500">
          <span>Total votes: {totalVotes}</span>
          <span>Candidates: {candidates.length}</span>
        </div>
      </div>
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
