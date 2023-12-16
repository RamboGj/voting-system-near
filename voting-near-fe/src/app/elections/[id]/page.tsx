import ClientElectionPage from '@/components/Pages/ClientElectionPage'

export default function ElectionPage({ params }: { params: { id: number } }) {
  return <ClientElectionPage params={params} />
}
