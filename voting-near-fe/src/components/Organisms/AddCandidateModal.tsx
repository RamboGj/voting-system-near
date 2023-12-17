import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { H2 } from '../Atoms/Text/H2'
import { AddCandidateForm } from '../Molecules/Forms/AddCandidateFrom'

interface VoteModalProps {
  electionId: number
}

export function AddCandidateModal({ electionId }: VoteModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-30 bg-black/80" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-50 h-[380px] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-[24px] bg-white p-9">
        <div className="flex h-full flex-col">
          <div className="flex w-full items-center justify-between">
            <div className="invisible" />
            <H2>ADD CANDIDATE</H2>
            <Dialog.Trigger>
              <X
                className="text-black transition-colors duration-300 hover:text-black/70"
                size={30}
              />
            </Dialog.Trigger>
          </div>

          <AddCandidateForm electionId={electionId} />
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
