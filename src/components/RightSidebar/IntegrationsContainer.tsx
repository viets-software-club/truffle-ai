import { FaSlack } from 'react-icons/fa'

import Button from '../Button'

const IntegrationsContainer = () => {
  const handleClick = () => {
    const url = 'test.com'
    window.open(url, '_blank')
  }

  return (
    <div className="border-y border-solid border-gray-800 py-2.5 text-14 font-normal leading-4">
      <h1 className="px-7 py-2.5 text-12 uppercase text-gray-300">Integrations</h1>
      <div className="flex flex-col justify-between">
        <div className="inline-flex px-7 py-2.5 transition-colors duration-100 hover:bg-gray-850">
          <div className="flex flex-row items-center justify-center gap-[15px]">
            <Button variant="normal" onClick={handleClick} text="Add to CRM" />
            <button type="button" onClick={handleClick}>
              <FaSlack className=" h-[14px] w-[14px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntegrationsContainer
