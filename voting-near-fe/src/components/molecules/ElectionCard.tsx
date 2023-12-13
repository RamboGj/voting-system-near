import Link from 'next/link'

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
          <h2 className="mb-1 font-clash text-[2rem] font-semibold leading-none text-black">
            {name}
          </h2>
          <span className="text-base font-medium text-gray500">{startsAt}</span>
          <span className="text-base font-medium text-danger500">{endsAt}</span>
        </div>
        <div className="flex flex-col font-medium text-gray500">
          <span>Total votes: {totalVotes}</span>
          <span>Candidates: {candidates}</span>
        </div>
      </div>
      <Link href={`/elections/${id}`} className="mt-auto w-full">
        <button className="h-[42px] w-full rounded-[12px] bg-gradient-to-r from-blue600 to-blue500 px-8 font-clash text-lg font-semibold text-white transition duration-500 hover:shadow-gradient-hover-shadow">
          DISCOVER
        </button>
      </Link>
    </div>
  )
}
