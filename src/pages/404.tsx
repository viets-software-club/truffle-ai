import Button from '@/components/pure/Button'
import withAuth from '@/components/side-effects/withAuth'
import { useRouter } from 'next/router'
import { LuArrowUpRight } from 'react-icons/lu'

const FourOFour = () => {
  const router = useRouter()

  const routeToHomePage = () => {
    void router.replace('/')
  }

  return (
    <div className="flex h-screen justify-center">
      <div className="mt-72 items-center text-center">
        <h1 className="text-36 font-bold text-lightBlue">404</h1>
        <h2 className="mt-4 text-white">
          We couldn&apos;t find the page you&apos;re looking for...
        </h2>
        <div className="mt-6 pl-28">
          <Button
            onClick={routeToHomePage}
            variant="highlighted"
            text="Back to home"
            Icon={LuArrowUpRight}
            order="ltr"
            textColor="text-white"
            iconColor="text-white"
          />
        </div>
      </div>
    </div>
  )
}

export default withAuth(FourOFour)
