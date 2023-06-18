import Image from 'next/image'
import { FiBookmark as Bookmark } from 'react-icons/fi'
import Button from '@/components/pure/Button'
import { Tooltip } from 'react-tooltip'

type ProjectInformationProps = {
  image: string
  name: string
  url: string
  eli5: string
  tags: Array<{ name: string; color: string }>
}

/**
 * Top part of project detail page (logo, name, tags, bookmark button)
 */
const ProjectInformation = ({ image, url, name, eli5, tags }: ProjectInformationProps) => (
  <div className="border-b border-gray-800 px-7 py-6">
    <div className="mb-6 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <div className="relative mr-4 h-8 w-8 overflow-hidden rounded-[5px] bg-gray-600">
          <Image src={image} alt="logo" fill sizes="32px" />
        </div>
        <a href={url} target="_blank" rel="noreferrer">
          <h1 className="mr-3 text-20 font-medium" data-tooltip-id="project-url">
            {name.slice(0, 32)}
            {name.length > 32 ? '...' : ''}
          </h1>
        </a>

        <Tooltip id="project-url" data-tooltip-content="Hello world!">
          {url}
        </Tooltip>

        {tags.length > 0 ? (
          tags.map((tag) => (
            <p
              key={tag.name}
              className="mx-1 rounded-[5px] bg-gray-850 px-2 py-0.5 text-12 font-normal text-gray-300"
              style={{ color: tag.color }}
            >
              {tag.name}
            </p>
          ))
        ) : (
          <p className="text-12 font-light text-gray-300">No tags available</p>
        )}
      </div>

      <Button
        variant="normal"
        text="Bookmark"
        Icon={Bookmark}
        onClick={() => {
          // @TODO Implement bookmark functionality
        }}
        order="ltr"
        textColor="text-gray-100"
      />
    </div>

    <p className="text-14 font-light">{eli5}</p>
  </div>
)

export default ProjectInformation
