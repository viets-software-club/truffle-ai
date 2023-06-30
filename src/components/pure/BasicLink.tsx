import React from 'react'

interface LinkProps {
  href: string
  children: React.ReactNode
}

const Link: React.FC<LinkProps> = ({ href, children }) => (
  <a href={href} className="hover:underline">
    {children}
  </a>
)

export default Link
