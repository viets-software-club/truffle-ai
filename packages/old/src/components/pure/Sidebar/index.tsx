import Logo from '@/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { FiBookmark, FiCompass, FiSettings } from 'react-icons/fi'
import { LuLogOut } from 'react-icons/lu'
import Item from './Item'
import MobileMenu from './MainMobileSidebar'
import SidebarSection from './SidebarSection'

const Sidebar = () => {
	return (
		<>
			<aside className="fixed z-30 hidden h-screen w-56 flex-col justify-between border-r border-white/5 lg:flex">
				<div>
					<div className="flex h-[59px] w-full items-center justify-between px-7 text-white/90">
						<Link href="/" className="flex items-center gap-2">
							<Image src={Logo} alt="Logo" className="h-6 w-6" />
							<span className="text-lg font-medium">TruffleAI</span>
						</Link>
					</div>
					<SidebarSection title="Overview">
						<Item Icon={FiCompass} text="Trending projects" path="/" />
						<Item Icon={FiBookmark} text="All bookmarks" path="/bookmarks" />
					</SidebarSection>
					<SidebarSection title="Categories">
						{loading ? (
							content
						) : (
							<p className="py-2.5 pl-5 text-xs text-white/90">
								No bookmarks yet
            </p>
						)}
					</SidebarSection>
					<div className="border-t border-solid border-white/5 p-2">
						<Item Icon={FiSettings} text="Settings" path="/settings" />
						<Item Icon={LuLogOut} text="Log out" path="/logout" />
					</div>
				</div>
			</aside>
			<MobileMenu title="TruffleAI" />
		</>
	)
}

export default withRouter(Sidebar)
