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
  <div className='fixed z-10 flex h-[60px] w-full items-center gap-3 border-b border-gray-800 px-3 pl-7'>
    <Link href='/'>
      <FiX key='2' className='h-4 w-4 text-gray-500' />
    </Link>

    {nextProjectId ? (
      <Link href={`/details/${nextProjectId}`}>
        <Button>
          <FiChevronUp />
        </Button>
      </Link>
    ) : (
      <Button disabled={!nextProjectId}>
        <FiChevronUp className='text-gray-600' />
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
        <FiChevronDown className='text-gray-600' />
      </Button>
    )}

    <div className='flex flex-row items-center'>
      <p className='text-sm text-white'>
        {currentProjectIndex !== undefined ? currentProjectIndex + 1 : '0'}&nbsp;
      </p>
      <p className='text-sm text-gray-500'>/&nbsp;{projectsLength}</p>
    </div>
  </div>
)

export default Navbar
