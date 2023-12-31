import { PropsWithChildren } from 'react'

const Tag = ({ children }: PropsWithChildren) => (
  <span className='rounded-full border border-indigo-500/60 bg-indigo-500/60 px-3 py-1 text-xs text-white'>
    {children}
  </span>
)

export default Tag
