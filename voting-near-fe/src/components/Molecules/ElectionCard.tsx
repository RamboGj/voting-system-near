import Link from 'next/link'
import { H2 } from '../Atoms/Text/H2'
import { SpanText } from '../Atoms/Text/SpanText'
import { Button } from '../Atoms/Buttons/Button'

interface ElectionCardProps {
  id: number
  name: string
  startsAt: string
  endsAt: string
  totalVotes: number
  candidates: number
}

export function ElectionCard({
  candidates,
  endsAt,
  id,
  name,
  startsAt,
  totalVotes,
}: ElectionCardProps) {
  return (
    <div className="flex h-[240px] w-full max-w-lg flex-col rounded-[24px] bg-white p-8 shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex w-full max-w-[250px] flex-col">
          <H2 className="mb-1">{name}</H2>
          <SpanText>{startsAt}</SpanText>
          <SpanText className="text-danger500">{endsAt}</SpanText>
        </div>
        <div className="flex flex-col">
          <SpanText>Total votes: {totalVotes}</SpanText>
          <SpanText>Candidates: {candidates}</SpanText>
        </div>
      </div>
      <Link href={`/elections/${id}`} className="mt-auto w-full">
        <Button>DISCOVER</Button>
      </Link>
    </div>
  )
}
