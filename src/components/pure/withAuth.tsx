import { useUser, useSessionContext } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Loading from '@/pages/loading'
import Error from '@/pages/error'

export default function withAuth<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<P>
) {
  return (props: React.PropsWithChildren<P>) => {
    const { isLoading, error } = useSessionContext()
    const router = useRouter()
    const user = useUser()

    useEffect(() => {
      if (!isLoading && !user) void router.replace('/login')
    }, [isLoading])

    if (error) return <Error />

    if (isLoading || !user) return <Loading />

    return React.createElement(WrappedComponent, props)
  }
}
