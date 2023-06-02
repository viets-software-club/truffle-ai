import { SetStateAction, useState } from 'react'
import Link from 'next/link'
import { MdClose, MdCreate } from 'react-icons/md'

type ItemProps = {
  id: number
  Icon: IconComponentType
  text: string
  path: string
  showIcon?: boolean
  secondaryItem?: boolean
  highlighted?: boolean
  onSave?: () => void
  onDelete?: () => void
  editable: boolean
}

/**
 * Item for main sidebar (3 types: overview, category/ folder, project)
 */
const Item = ({
  id,
  Icon,
  text,
  path,
  showIcon,
  secondaryItem,
  highlighted,
  onSave,
  onDelete,
  editable
}: ItemProps) => {
  const [value, setValue] = useState(text)
  const [isHovered, setIsHovered] = useState(false)
  const [isEditable, setIsEditable] = useState(false)

  const handleEdit = () => {
    setIsEditable(true)
  }

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value)
  }

  const handleBlur = () => {
    setIsEditable(false)
    if (onSave) onSave()
  }

  const handleDelete = () => {
    if (onDelete) onDelete()
  }

  return (
    <div
      className={`relative flex flex-col justify-between ${
        highlighted ? 'bg-gray-700' : ''
      } rounded-md hover:bg-gray-800`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Only add URL parameter if item links to compare or details page */}
      <Link href={path + (['/details', '/compare'].includes(path) ? `/${id}` : '')}>
        <div className="inline-flex w-full items-center justify-between py-2.5 pl-7">
          <div
            className={`flex flex-row items-center justify-center gap-[5px] 
          ${secondaryItem ? 'ml-2' : ''} overflow-hidden`}
          >
            {showIcon && <Icon className="h-[14px] w-[14px] text-gray-500" />}

            {isEditable ? (
              <input
                className="overflow-hidden bg-gray-500 text-left text-xs not-italic leading-3 text-gray-100"
                style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ) : (
              <span
                className="mt-[1px] h-[13px] w-[110px] overflow-hidden text-left text-xs not-italic leading-3 text-gray-100"
                style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
              >
                {text}
              </span>
            )}
          </div>

          {isHovered && editable && (
            <div className="flex space-x-1 pr-1">
              <MdCreate onClick={handleEdit} className="cursor-pointer text-gray-500" />
              <MdClose onClick={handleDelete} className="cursor-pointer text-gray-500" />
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}

Item.defaultProps = {
  showIcon: true,
  secondaryItem: false,
  highlighted: false,
  onSave: null,
  onDelete: null
}

export default Item
