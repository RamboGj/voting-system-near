import { Header } from '../Molecules/Header'
import { CandidatesOverview } from '../Organisms/CandidatesOverview'
import { ElectionHero } from '../Organisms/ElectionHero'
import { VotersList } from '../Organisms/VotersList'
import { ElectionsProps, VoterProps } from '@/@types/types'

interface ElectionTemplateProps {
  election: ElectionsProps
  voters: VoterProps[]
  hasEndedOrHasNotStarted: boolean
}

export function ElectionTemplate({
  election,
  voters,
  hasEndedOrHasNotStarted,
}: ElectionTemplateProps) {
  return (
    <div className="min-h-screen w-full pb-20">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center">
        <Header />
        <main className="flex w-full flex-col gap-8">
          <ElectionHero
            electionIsNotHappening={hasEndedOrHasNotStarted}
            candidates={election.candidates}
            endsAt={election.endsAt}
            startsAt={election.startsAt}
            id={election.id}
            name={election.name}
            totalVotes={election.totalVotes}
          />
          <CandidatesOverview
            electionIsNotHappening={hasEndedOrHasNotStarted}
            candidates={election.candidates}
            electionTotalVotes={election.totalVotes}
            electionId={election.id}
            endsAt={election.endsAt}
          />
          <VotersList voters={voters} />
        </main>
      </div>
    </div>
  )
}
