import { Command } from 'cmdk'
import { PropsWithChildren } from 'react'

type GroupProps = PropsWithChildren & {
	heading: string
}

const Group: React.FC<GroupProps> = ({ ...props }) => (
	<Command.Group
		className="[&>[cmdk-group-heading]]:px-6 [&>[cmdk-group-heading]]:py-2 [&>[cmdk-group-heading]]:text-sm [&>[cmdk-group-heading]]:text-white/50"
		{...props}
	/>
)

export default Group
