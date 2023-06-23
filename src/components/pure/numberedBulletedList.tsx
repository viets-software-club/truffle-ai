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
    <ol className="list-inside list-decimal text-14 font-normal leading-relaxed text-gray-400/80">
      {items.map((item) => (
        <li key={item.text}>
          {item.text}
          <ul className="list-inside list-disc">
            <div className="pl-4">
              <li>
                <a href={item.link1} className="hover:underline">
                  Link
                </a>
              </li>
              <li>
                <a href={item.link2} className="hover:underline">
                  License: Link
                </a>
              </li>
            </div>
          </ul>
        </li>
      ))}
    </ol>
  </div>
)

export default NumberedBulletList
