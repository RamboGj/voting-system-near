import { Button } from '@/components/Atoms/Buttons/Button'
import { Input } from '@/components/Atoms/Form/Input'
import { useState } from 'react'

interface AddCandidateFormProps {
  electionId: number
}

export function AddCandidateForm({ electionId }: AddCandidateFormProps) {
  const [isAdding, setIsAdding] = useState<boolean>(false)
  const [candidateAccountId, setCandidateAccountId] = useState<string>('')

  const addCandidate = async () => {
    setIsAdding(true)
    const { onAddCandidate } = await import('@/utils/near')

    try {
      await onAddCandidate(electionId, candidateAccountId)
    } catch (err) {
      console.log('ERR', err)
      setIsAdding(false)
    }
  }

  const notAValidAccountId =
    !candidateAccountId.includes('.testnet') &&
    !candidateAccountId.includes('.near')

  return (
    <form
      className="flex flex-1 flex-col"
      onSubmit={(e) => {
        e.preventDefault()
        addCandidate()
      }}
    >
      <Input
        id="candidate"
        label="Candidate account"
        placeholder="candidate.near"
        type="text"
        value={candidateAccountId}
        onChange={(e) => {
          setCandidateAccountId(e.target.value)
        }}
      />

      <Button
        disabled={notAValidAccountId || isAdding}
        type="submit"
        className="mt-auto"
      >
        Add
      </Button>
    </form>
  )
}
