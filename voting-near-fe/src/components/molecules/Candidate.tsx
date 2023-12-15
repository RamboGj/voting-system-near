import { User } from 'phosphor-react'
import { H3 } from '../atoms/H3'
import { HighlightBullet } from '../atoms/HighlightBullet'
import { SpanText } from '../atoms/SpanText'
import { CandidateSeal } from '../atoms/CandidateSeal'

interface CandidateProps {
  isLeading: boolean
  isWinner: boolean
  name: string
  totalVotes: number
  percentage: number
}

export function Candidate({
  isLeading,
  isWinner,
  name,
  percentage,
  totalVotes,
}: CandidateProps) {
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
