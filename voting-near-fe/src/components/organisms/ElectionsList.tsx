import { dateFormatter } from '@/utils/functions'
import { ComponentProps } from 'react'
import { ElectionCard } from '../molecules/ElectionCard'
import { ElectionsPropsHome } from '@/app/page'
import { tv } from 'tailwind-variants'

const list = tv({
  slots: {
    container: 'mt-12 flex w-full flex-wrap items-center gap-8',
    listItemContainer: 'w-full max-w-lg',
  },
})

interface ElectionsListProps extends ComponentProps<'ul'> {
  elections: ElectionsPropsHome[]
}

export function ElectionsList({
  elections,
  className,
  ...rest
}: ElectionsListProps) {
  const { container, listItemContainer } = list({ className })

  return (
    <ul className={container()} {...rest}>
      {elections.map(
        ({ 1: { candidates, endsAt, id, name, startsAt, totalVotes } }) => {
          const formattedStartsAt = dateFormatter(startsAt)
          const formattedEndsAt = dateFormatter(endsAt)

          return (
            <li key={id} className={listItemContainer()}>
              <ElectionCard
                id={id}
                candidates={candidates.length}
                name={name}
                endsAt={formattedEndsAt}
                startsAt={formattedStartsAt}
                totalVotes={totalVotes}
              />
            </li>
          )
        },
      )}
    </ul>
  )
}
