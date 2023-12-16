import { ComponentProps, useMemo } from 'react'
import { BulletText } from '../Atoms/Text/BulletText'
import { H2 } from '../Atoms/Text/H2'
import { SpanText } from '../Atoms/Text/SpanText'
import { tv } from 'tailwind-variants'
import { dateFormatter } from '@/utils/functions'

const overview = tv({
  slots: {
    container: 'flex items-start justify-between',
    mainContainer: 'flex w-full max-w-lg flex-col',
    sideContainer: 'flex flex-col',
  },
})

interface ELectionOverviewProps extends ComponentProps<'div'> {
  name: string
  startsAt: string
  endsAt: string
  totalVotes: number
  candidatesCount: number
}

export function ELectionOverview({
  candidatesCount,
  endsAt,
  name,
  startsAt,
  totalVotes,
  className,
  ...rest
}: ELectionOverviewProps) {
  const { container, mainContainer, sideContainer } = overview({ className })

  const formattedEndAt = useMemo(() => {
    return dateFormatter(endsAt)
  }, [endsAt])

  const formattedStartsAt = useMemo(() => {
    return dateFormatter(startsAt)
  }, [startsAt])

  return (
    <div className={container()} {...rest}>
      <div className={mainContainer()}>
        <H2>{name}</H2>

        <BulletText text={formattedStartsAt} status="warning" />
        <BulletText text={formattedEndAt} status="danger" />
      </div>
      <div className={sideContainer()}>
        <SpanText>Total votes: {totalVotes}</SpanText>
        <SpanText>Candidates: {candidatesCount}</SpanText>
      </div>
    </div>
  )
}
