import { ComponentType, ReactNode } from 'react'

type CardProps = {
  Icon: ComponentType<{ className?: string }>
  name: string
  button: ReactNode
  textFields: string[]
}

const Card = ({ Icon, name, button, textFields }: CardProps) => (
  <div className="mx-7 my-4 rounded-lg border border-gray-800 bg-gray-850">
    <div className="flex flex-row items-center px-4 pt-4">
      <Icon className="mr-2 text-indigo-500" />
      <h2>{name}</h2>
    </div>
    {textFields.map((text) => (
      <p key={text} className="border-b border-gray-800 p-4 text-12 font-light text-gray-300">
        {text}
      </p>
    ))}
    <div className="p-4">{button}</div>
  </div>
)

export default Card
