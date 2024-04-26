import Button from '@/components/pure/Button'
import withAuth from '@/components/shared/hoc/withAuth'
import Link from 'next/link'
import { LuArrowUpRight } from 'react-icons/lu'

const FourOFour = () => (
	<div className="flex h-screen w-screen flex-col items-center justify-center gap-6">
		<h1 className="text-5xl font-bold leading-none text-white">404</h1>
		<h2 className="text-white/50">
			We couldn&apos;t find the page you&apos;re looking for...
		</h2>

		<Link href="/">
			<Button variant="highlighted" size="large">
				<LuArrowUpRight />
				Back to home
			</Button>
		</Link>
	</div>
)

export default withAuth(FourOFour)
