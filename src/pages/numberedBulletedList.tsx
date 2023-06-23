import React from 'react'

type Item = {
  text: string
  link1: string
  link2: string
}

type Props = {
  items: Item[]
}

const NumberedBulletList: React.FC<Props> = ({ items }) => (
  <div>
    <ol className="list-inside list-decimal">
      {items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>
          {item.text}
          <ul className="list-inside list-disc">
            <div className="pl-4">
              <li>
                <a href={item.link1}>Link</a>
              </li>
              <li>
                Licence: <a href={item.link2}>Link</a>
              </li>
            </div>
          </ul>
        </li>
      ))}
    </ol>
  </div>
)

export default NumberedBulletList
