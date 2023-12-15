import { useState } from 'react'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'

export function CreateElectionForm() {
  const [isCreating, setIsCreating] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [startsAt, setStartsAt] = useState<string>('')
  const [endsAt, setEndsAt] = useState<string>('')

  async function createElection(
    startsAt: string,
    endsAt: string,
    name: string,
  ) {
    const { onCreateElection } = await import('@/utils/near')
    await onCreateElection(endsAt, startsAt, name)
  }

  async function onCreateElection() {
    setIsCreating(true)

    try {
      await createElection(endsAt, startsAt, name)
    } catch (err) {
      setIsCreating(false)
    }
  }

  const someFieldNotSet = name.length < 3 || startsAt === '' || endsAt === ''

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onCreateElection()
      }}
    >
      <Input
        id="name"
        label="Election name"
        placeholder="Election 123"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <Input
        id="startsAt"
        label="Starts at"
        type="datetime-local"
        value={startsAt}
        onChange={(e) => {
          setStartsAt(e.target.value)
        }}
      />
      <Input
        id="endsAt"
        label="Ends at"
        type="datetime-local"
        value={endsAt}
        onChange={(e) => {
          setEndsAt(e.target.value)
        }}
      />

      <Button
        className="mt-12"
        disabled={someFieldNotSet || isCreating}
        type="submit"
      >
        Create
      </Button>
    </form>
  )
}
