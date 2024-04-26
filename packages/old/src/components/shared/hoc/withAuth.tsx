import Loading from '@/components/pure/LoadingSpinner'
import { useSessionContext, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import React, { FC, PropsWithChildren, useEffect, useState } from 'react'

/**
 * HOC for pages that require authentication
 */
export default function withAuth(WrappedComponent: FC<PropsWithChildren>) {
	return (props: PropsWithChildren) => {
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

		if (isLoading || !user)
			return <Loading fullscreen showSpinner={showLoading} />

		return React.createElement(WrappedComponent, props)
	}
}
