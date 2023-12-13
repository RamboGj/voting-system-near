import ClientElectionPage from '@/components/pages/ClientElectionPage'

export default function ElectionPage({ params }: { params: { id: number } }) {
  return <ClientElectionPage params={params} />
}
