import { ReactNode } from 'react'

type CardProps = {
  Icon: IconComponentType
  name: string
  button: ReactNode
  textFields: {
    id: ID
    content: string
  }[]
}

const Card = ({ Icon, name, button, textFields }: CardProps) => (
  <div className="my-4 rounded-lg border border-gray-800">
    <div className="flex flex-row items-center px-4 pt-4">
      <Icon className="mr-2 text-indigo-500" />
      <h2>{name}</h2>
    </div>
    {textFields.map(({ id, content }) => (
      <p key={id} className="border-b border-gray-800 p-4 text-12 font-light text-gray-300">
        {content}
      </p>
    ))}
    <div className="p-4">{button}</div>
  </div>
)

export default Card
