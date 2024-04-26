import { useEffect, useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import Textarea from '@/components/pure/Textarea'

type NotesProps = {
  projectId: string
}

const Notes = ({ projectId }: NotesProps) => {
  const persistedNotes = localStorage.getItem(`notes-${projectId}`)

  const [notes, setNotes] = useState<string>(persistedNotes || '')
  const [isEditing, setIsEditing] = useState(false)
  const [textAreaScrollHeight, setTextAreaScrollHeight] = useState(0)

  useEffect(() => {
    setNotes(persistedNotes || '')
  }, [projectId])

  return (
    <div className='border-b border-solid border-white/5 px-4 py-3 text-sm font-normal leading-4 lg:px-7'>
      <div className='flex items-center justify-between'>
        <h3 className='py-2 text-xs font-medium uppercase text-white/50'>Notes</h3>
        {!isEditing && (
          <button
            type='button'
            className='text-sm text-white/50 hover:text-white'
            onClick={() => setIsEditing(true)}>
            <FiEdit />
          </button>
        )}

        {isEditing && <p className='text-white/50'>Saving...</p>}
      </div>

      <div className='py-2.5'>
        {isEditing ? (
          <Textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            onFocus={e => setTextAreaScrollHeight(e.currentTarget.scrollHeight)}
            onInput={e => setTextAreaScrollHeight(e.currentTarget.scrollHeight)}
            onBlur={() => {
              localStorage.setItem(`notes-${projectId}`, notes)
              setIsEditing(false)
            }}
            className='no-scrollbar h-auto min-w-0 resize-none p-2'
            style={{
              height: `${textAreaScrollHeight + 2}px`,
              transition: 'border-color 0.2s ease-in-out'
            }}
            autoFocus
          />
        ) : (
          <div className='flex flex-col gap-2'>
            {notes ? (
              <p className='text-sm text-white'>
                {notes.split('\n').map((line, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            ) : (
              <p className='text-sm text-white/60'>No notes yet</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Notes
