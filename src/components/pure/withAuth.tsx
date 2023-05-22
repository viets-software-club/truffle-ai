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
      const timeoutId = setTimeout(() => {
        if (!user) {
          void router.replace('/login')
        }
      }, 500)

      return () => clearTimeout(timeoutId)
    }, [user, router])

    if (!user) {
      return <div>Loading...</div>
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} />
  }
}
