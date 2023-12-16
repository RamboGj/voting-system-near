'use client'

import { ElectionsProps, VoterProps } from '@/@types/types'
import { NEAR_TIMESTAMP_CONVERTER_FACTOR } from '@/utils/constants'
import { useEffect, useMemo, useState } from 'react'
import { ElectionTemplate } from '../Templates/ElectionTemplate'

export default function ClientElectionPage({
  params,
}: {
  params: { id: number }
}) {
  const [election, setElection] = useState<ElectionsProps>({
    candidates: [],
    endsAt: '',
    startsAt: '',
    id: -1,
    name: '',
    totalVotes: 0,
    voters: [],
  })
  const [voters, setVoters] = useState<VoterProps[]>([])

  const hasEndedOrHasNotStarted = useMemo(() => {
    if (election) {
      const condition =
        new Date().getTime() <
          Number(election?.startsAt) / NEAR_TIMESTAMP_CONVERTER_FACTOR ||
        new Date().getTime() >
          Number(election?.endsAt) / NEAR_TIMESTAMP_CONVERTER_FACTOR

      return condition
    } else return false
  }, [election])

  const getElectionData = async () => {
    const { onGetElectionData } = await import('@/utils/near')
    const data = await onGetElectionData(params.id)

    setElection(data.election)
    setVoters(data.voters)
  }

  useEffect(() => {
    getElectionData()
  }, [])

  return (
    <ElectionTemplate
      election={election}
      hasEndedOrHasNotStarted={hasEndedOrHasNotStarted}
      voters={voters}
    />
  )
}
