import { StarIcon } from '@primer/octicons-react'
import Button from '../../pure/Button'

type ProjectInformationProps = {
  name: string
  eli5: string
  tags: string[]
}

const ProjectInformation = ({ name, eli5, tags }: ProjectInformationProps) => (
  <div className="border-b border-gray-800 py-4">
    <div className="mb-4 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <h1 className="mr-3">{name}</h1>
        {tags.map((text) => (
          <p
            key={text}
            className="mx-1 rounded-lg bg-gray-850 px-2 py-0.5 text-12 font-light text-gray-300"
          >
            {text}
          </p>
        ))}
      </div>
      <Button
        variant="highlighted"
        text="Bookmark"
        Icon={StarIcon}
        onClick={() => {
          // eslint-disable-next-line no-alert
          alert('Bookmark clicked!')
        }}
        order="ltr"
        textColor="text-gray-100"
        iconColor="text-gray-100"
      />
    </div>
    <p className="text-12 font-light">{eli5}</p>
  </div>
)

export default ProjectInformation
