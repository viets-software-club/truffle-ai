import { useUser } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Loading from '@/pages/loading'

export default function withAuth<P extends JSX.IntrinsicAttributes>(
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
      return <Loading />
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} />
  }
}
