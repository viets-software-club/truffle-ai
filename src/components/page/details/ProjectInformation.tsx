import { StarIcon } from '@primer/octicons-react'
import Button from '../../pure/Button'

type ProjectInformationProps = {
  image?: string
  name: string
  eli5: string
  tags: string[]
}

/**
 * Top part of project detail page (logo, name, tags, bookmark button)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const ProjectInformation = ({ image, name, eli5, tags }: ProjectInformationProps) => (
  <div className="border-b border-gray-800 px-7 py-4">
    <div className="mb-4 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        {/* TODO: Replace with actual image */}
        <div className="mr-4 h-[30px] w-[30px] rounded-[5px] bg-gray-500" />

        <h1 className="mr-3 text-16 font-medium">{name}</h1>

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
          // TODO: Implement bookmark functionality
        }}
        order="ltr"
        textColor="text-gray-100"
        iconColor="text-gray-100"
      />
    </div>

    <p className="text-12 font-light">{eli5}</p>
  </div>
)

ProjectInformation.defaultProps = {
  image: undefined
}

export default ProjectInformation
