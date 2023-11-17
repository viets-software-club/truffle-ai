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

  return (
    <>
      <p className='pb-6 text-sm font-normal text-gray-300'>
        If you delete your account, all your data will be lost.
      </p>

      {!confirmDelete ? (
        <Button onClick={() => setConfirmDelete(true)} variant='red' className='text-white'>
          <FiTrash2 />
          Delete account
        </Button>
      ) : (
        <>
          <p className='pb-6 text-sm font-normal text-red-500'>Are you sure?</p>

          <Link href='/logout'>
            <Button onClick={handleDeleteAccount} variant='red' className='text-white'>
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
