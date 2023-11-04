import { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import Link from 'next/link'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Button from '@/components/shared/Button'
import deleteAccount from '@/util/deleteAccount'

const DeleteAccount = () => {
  const [confirmDelete, setConfirmDelete] = useState(false)
  const supabaseClient = useSupabaseClient()

  const handleDeleteAccount = () => {
    void deleteAccount(supabaseClient)
  }

  const handleConfirmDelete = () => {
    setConfirmDelete(true)
  }

  return (
    <>
      <p className='pb-6 text-sm font-normal text-white/75'>
        If you delete your account, all your data will be lost.
      </p>

      {!confirmDelete ? (
        <Button onClick={handleConfirmDelete} variant='error' size='large'>
          <FiTrash2 />
          Delete account
        </Button>
      ) : (
        <>
          <p className='pb-6 text-sm font-normal text-red-400'>Are you sure?</p>

          <Link href='/logout'>
            <Button onClick={handleDeleteAccount} variant='error' size='large'>
              <FiTrash2 />
              Yes, delete
            </Button>
          </Link>
        </>
      )}
    </>
  )
}

export default DeleteAccount
