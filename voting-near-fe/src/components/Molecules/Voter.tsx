import { VoterProps } from '@/@types/types'
import { dateFormatter } from '@/utils/functions'
import { SpanText } from '../Atoms/Text/SpanText'
import { H3 } from '../Atoms/Text/H3'
import { VoterSeal } from '../Atoms/Seals/VoterSeal'

export function Voter({
  votedAt,
  accountId,
  votedCandidateAccountId,
}: VoterProps) {
  const formattedVotedAt = dateFormatter(votedAt)

  return (
    <div className="grid w-full grid-cols-3 py-3">
      <div className="col-span-1 flex items-center gap-2">
        <VoterSeal />
        <H3>{accountId}</H3>
      </div>
      <SpanText className="col-span-1">
        Candidate voted: {votedCandidateAccountId}
      </SpanText>
      <SpanText className="col-span-1">Voted at: {formattedVotedAt}</SpanText>
    </div>
  )
}
