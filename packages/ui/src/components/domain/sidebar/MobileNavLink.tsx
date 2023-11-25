import Link from 'next/link'

type MobileNavLinkProps = {
  Icon: IconComponentType
  text: string
  path: string
  onClick?: () => void
}

const MobileNavLink = ({ Icon, text, path, onClick }: MobileNavLinkProps) => (
  <Link
    className='flex items-center gap-2 rounded-md px-2 py-3 text-sm transition-colors duration-150 hover:bg-white/5'
    href={path}
    onClick={onClick}>
    <Icon className='opacity-50' />
    {text}
  </Link>
)

export default MobileNavLink
