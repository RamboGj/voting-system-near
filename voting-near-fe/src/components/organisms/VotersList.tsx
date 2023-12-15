import { VoterProps } from '@/@types/types'
import { Voter } from '../molecules/Voter'
import { H2 } from '../atoms/H2'
import { SpanText } from '../atoms/SpanText'

interface VotersListProps {
  voters: VoterProps[]
}

export function VotersList({ voters }: VotersListProps) {
  return (
    <div className="flex w-full flex-col rounded-[24px] bg-white p-8 shadow-md">
      <div className="flex flex-col gap-4">
        <div className="w-full items-center justify-between">
          <H2 className="mb-1"> Voters</H2>
          <SpanText className="text-black">
            Total votes: {voters?.length || 0}
          </SpanText>
        </div>

        <ul className="flex w-full flex-col divide-y divide-gray300">
          {voters?.map(({ accountId, votedAt, votedCandidateAccountId }) => {
            return (
              <li className="w-full" key={accountId}>
                <Voter
                  votedCandidateAccountId={votedCandidateAccountId}
                  accountId={accountId}
                  votedAt={votedAt}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
