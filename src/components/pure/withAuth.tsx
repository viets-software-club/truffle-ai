import { useUser, useSessionContext } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

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

    if (error) return <span style={{ color: 'white' }}>error</span>

    if (isLoading || !user) {
      return <span style={{ color: 'white' }}>loading</span>
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} />
  }
}
