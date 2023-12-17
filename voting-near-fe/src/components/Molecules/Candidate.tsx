import { H3 } from '../Atoms/Text/H3'
import { HighlightBullet } from '../Atoms/Bullets/HighlightBullet'
import { SpanText } from '../Atoms/Text/SpanText'
import { CandidateSeal } from '../Atoms/Seals/CandidateSeal'
import { NEAR_TIMESTAMP_CONVERTER_FACTOR } from '@/utils/constants'
import { useMemo } from 'react'

interface CandidateProps {
  name: string
  totalVotes: number
  electionTotalVotes: number
  candidatesCount: number
  endsAt: string
}

export function Candidate({
  name,
  totalVotes,
  candidatesCount,
  electionTotalVotes,
  endsAt,
}: CandidateProps) {
  const isLeading = useMemo(() => {
    return electionTotalVotes > 0 && candidatesCount >= 2
      ? totalVotes > electionTotalVotes % 2 || totalVotes === electionTotalVotes
      : false
  }, [electionTotalVotes, totalVotes])

  const isWinner = useMemo(() => {
    return (
      new Date().getTime() > Number(endsAt) / NEAR_TIMESTAMP_CONVERTER_FACTOR &&
      isLeading
    )
  }, [endsAt, isLeading])

  const percentage = useMemo(() => {
    return (totalVotes / electionTotalVotes) * 100 || 0
  }, [totalVotes, electionTotalVotes])

  return (
    <div className="flex items-center gap-x-4">
      <CandidateSeal type="large" />
      <div className="flex flex-col font-medium text-gray500">
        {isWinner || isLeading ? <HighlightBullet isWinner={isWinner} /> : null}
        <H3>{name}</H3>
        <SpanText>Total votes: {totalVotes}</SpanText>
        <SpanText>Percentage: {percentage}%</SpanText>
      </div>
    </div>
  )
}
