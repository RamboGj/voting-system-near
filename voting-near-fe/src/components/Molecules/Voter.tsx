import { VoterProps } from '@/@types/types'
import { dateFormatter } from '@/utils/functions'
import { User } from 'phosphor-react'
import { SpanText } from '../Atoms/Text/SpanText'
import { H3 } from '../Atoms/Text/H3'

export function Voter({
  votedAt,
  accountId,
  votedCandidateAccountId,
}: VoterProps) {
  const formattedVotedAt = dateFormatter(votedAt)

  return (
    <div className="grid w-full grid-cols-3 py-3">
      <div className="col-span-1 flex items-center gap-2">
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black">
          <User size={16} color="#00C2FF" />
        </div>
        <H3>{accountId}</H3>
      </div>
      <SpanText className="col-span-1">
        Candidate voted: {votedCandidateAccountId}
      </SpanText>
      <SpanText className="col-span-1">Voted at: {formattedVotedAt}</SpanText>
    </div>
  )
}
