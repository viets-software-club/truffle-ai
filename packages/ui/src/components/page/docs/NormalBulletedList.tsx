import { FC } from 'react'

type NormalBulletListProps = {
  items: string[]
}

const NormalBulletList: FC<NormalBulletListProps> = ({ items }) => (
  <ul className="text-14 list-inside list-disc pl-4 font-normal leading-relaxed text-gray-100/80">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

export default NormalBulletList
