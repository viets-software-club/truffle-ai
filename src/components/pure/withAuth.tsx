import { useUser } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function withAuth<P extends NonNullable<unknown>>(
  WrappedComponent: React.ComponentType<P>
) {
  return (props: React.PropsWithChildren<P>) => {
    const router = useRouter()
    const user = useUser()

    useEffect(() => {
      // Redirect if the user object doesn't exist
      if (!user) {
        void router.replace('/login')
      }
    }, [user, router])

    // While checking the user, you can return some loading state
    if (!user) {
      return <div>Loading...</div>
    }

    // Otherwise, return the wrapped component
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} />
  }
}
