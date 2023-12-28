import { PropsWithChildren } from 'react'
import { Command } from 'cmdk'

type GroupProps = PropsWithChildren & {
  heading: string
}

const Group: React.FC<GroupProps> = ({ ...props }) => (
  <Command.Group
    className='[&>[cmdk-group-heading]]:px-6 [&>[cmdk-group-heading]]:py-2 [&>[cmdk-group-heading]]:text-sm [&>[cmdk-group-heading]]:text-white/50'
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
)

export default Group
