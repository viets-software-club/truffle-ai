import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useUser, useSessionContext } from '@supabase/auth-helpers-react'
import Loading from '@/components/shared/Loading'

/**
 * HOC for pages that require authentication
 */
export default function withAuth<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<P>
) {
  return (props: React.PropsWithChildren<P>) => {
    const { isLoading, error } = useSessionContext()
    const router = useRouter()
    const user = useUser()

    const [showLoading, setShowLoading] = useState(false)

    const emailError = router.query.error
    const errorDescription = router.query.error_description

    useEffect(() => {
      // Only show loading screen if loading takes longer than 500ms
      const loadingTimeout = setTimeout(() => {
        setShowLoading(true)
      }, 500)

      return () => clearTimeout(loadingTimeout)
    }, [])

    useEffect(() => {
      if (emailError && errorDescription) {
        void router.replace('/login?error=invalid_email')
      } else if (error || (!isLoading && !user)) {
        void router.replace('/login')
      }
    }, [emailError, error, errorDescription, isLoading, user])

    if (isLoading || !user) return <Loading fullscreen showSpinner={showLoading} />

    return React.createElement(WrappedComponent, props)
  }
}
