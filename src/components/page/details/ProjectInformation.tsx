import Image from 'next/image'
import { FiBookmark as Bookmark } from 'react-icons/fi'
import Button from '@/components/pure/Button'
import { FaSlack } from 'react-icons/fa'

type ProjectInformationProps = {
  image: string
  name: string
  url: string
  eli5: string
  tags: string[]
  sendSlackMessage: () => void
}

/**
 * Top part of project detail page (logo, name, tags, bookmark button)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const ProjectInformation = ({
  image,
  url,
  name,
  eli5,
  tags,
  sendSlackMessage
}: ProjectInformationProps) => (
  <div className="border-b border-gray-800 px-7 py-6">
    <div className="mb-6 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <div className="relative mr-4 h-8 w-8 overflow-hidden rounded-[5px] bg-gray-600">
          <Image src={image} alt="logo" fill sizes="32px" />
        </div>

        <a href={url} target="_blank" rel="noreferrer">
          <h1 className="mr-3 text-20 font-medium">
            {name.slice(0, 32)}
            {name.length > 32 ? '...' : ''}
          </h1>
        </a>

        {tags.length > 0 ? (
          tags.map((text) => (
            <p
              key={text}
              className="mx-1 rounded-[5px] bg-gray-850 px-2 py-0.5 text-12 font-light text-gray-300"
            >
              {text}
            </p>
          ))
        ) : (
          <p className="text-12 font-light text-gray-300">No tags available</p>
        )}
      </div>

      <div className="flex flex-row items-center justify-end gap-2">
        <button type="button" onClick={sendSlackMessage}>
          <FaSlack className=" h-[14px] w-[14px]" />
        </button>

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
    </div>

    <p className="text-14 font-light">{eli5}</p>
  </div>
)

export default ProjectInformation
