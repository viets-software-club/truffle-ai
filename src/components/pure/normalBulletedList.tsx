import React from 'react'

type Props = {
  items: string[]
}

const NormalBulletList: React.FC<Props> = ({ items }) => (
  <ul className="list-inside list-disc text-14 font-normal leading-relaxed text-gray-400/80">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

export default NormalBulletList
