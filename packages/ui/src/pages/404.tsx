import { LuArrowUpRight } from 'react-icons/lu'
import { useRouter } from 'next/router'
import Button from '@/components/shared/Button'
import withAuth from '@/components/shared/hoc/withAuth'

const FourOFour = () => {
  const router = useRouter()

  const routeToHomePage = () => {
    void router.push('/')
  }

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-6'>
      <h1 className='text-5xl font-bold leading-none text-indigo-500'>404</h1>
      <h2 className='text-white'>We couldn&apos;t find the page you&apos;re looking for...</h2>

      <Button onClick={routeToHomePage} variant='highlighted' className='text-white'>
        <LuArrowUpRight />
        Back to home
      </Button>
    </div>
  )
}

export default withAuth(FourOFour)
