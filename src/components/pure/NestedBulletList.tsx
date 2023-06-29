import React, { ReactNode } from 'react'

type ListItemType = {
  key: string
  value: Array<string | ListItemType>
}

type Props = {
  items: Array<string | ListItemType>
}

const NestedBulletList: React.FC<Props> = ({ items }) => {
  const renderNestedList = (item: string | ListItemType, uniqueKey: string): ReactNode => {
    if (typeof item === 'string') {
      return <li key={uniqueKey}>{item}</li>
    }
    return (
      <div className="pl-4">
        <li key={uniqueKey}>
          {item.key}
          <ul className="list-inside list-disc">
            {item.value.map((subitem, index) => renderNestedList(subitem, `${uniqueKey}-${index}`))}
          </ul>
        </li>
      </div>
    )
  }

  return (
    <ul className="list-inside list-disc text-14 font-normal leading-relaxed text-gray-400/80">
      {items.map((item, index) => renderNestedList(item, index.toString()))}
    </ul>
  )
}

export default NestedBulletList
