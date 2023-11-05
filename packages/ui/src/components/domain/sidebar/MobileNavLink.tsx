import Link from 'next/link'

type MobileNavLinkProps = { Icon: IconComponentType; text: string; path: string }

const MobileNavLink = ({ Icon, text, path }: MobileNavLinkProps) => (
  <Link
    className='flex items-center gap-2 rounded-md px-2 py-3 text-sm transition-colors duration-150 hover:bg-white/5'
    href={path}>
    <Icon className='opacity-50' />
    {text}
  </Link>
)

export default MobileNavLink
