import { FiX, FiChevronUp, FiChevronDown } from 'react-icons/fi'
import Link from 'next/link'
import Button from '@/components/shared/Button'

type NavbarProps = {
  currentProjectIndex?: number
  nextProjectId?: string
  previousProjectId?: string
  projectsLength?: number
}

const Navbar = ({
  currentProjectIndex,
  nextProjectId,
  previousProjectId,
  projectsLength
}: NavbarProps) => (
  <div className='flex h-[60px] w-full items-center gap-3 border-b border-white/5 bg-gray-900 px-4 lg:pl-7 lg:pr-3'>
    <Link href='/' className='mr-auto md:mr-0'>
      <FiX className='h-4 w-4 text-white/50' />
    </Link>

    {nextProjectId ? (
      <Link href={`/details/${nextProjectId}`}>
        <Button>
          <FiChevronUp />
        </Button>
      </Link>
    ) : (
      <Button disabled={!nextProjectId}>
        <FiChevronUp className='text-white/50' />
      </Button>
    )}

    {previousProjectId ? (
      <Link href={`/details/${previousProjectId}`}>
        <Button>
          <FiChevronDown />
        </Button>
      </Link>
    ) : (
      <Button disabled={!previousProjectId}>
        <FiChevronDown className='text-white/50' />
      </Button>
    )}

    <div className='flex flex-row items-center'>
      <p className='text-sm text-white'>
        {currentProjectIndex !== undefined ? currentProjectIndex + 1 : '0'}&nbsp;
      </p>
      <p className='text-sm text-white/50'>/&nbsp;{projectsLength}</p>
    </div>
  </div>
)

export default Navbar
