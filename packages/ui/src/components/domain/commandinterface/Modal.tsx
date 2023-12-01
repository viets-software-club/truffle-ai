import { FormEvent, RefObject } from 'react'
import { SearchIcon } from '@primer/octicons-react'
import Modal from '@/components/shared/Modal'
import RecommendationRow, { RecommendationRowType } from './RecommendationRow'

type CommandInterfaceModalProps = {
  open: boolean
  selectedLine: number
  searchWord: string
  isProjectListOn: boolean
  recommendationList: RecommendationRowType[]
  inputRef: RefObject<HTMLInputElement>
  listRef: RefObject<HTMLDivElement>
  wrapperRef: RefObject<HTMLDivElement>
  toggleModal: () => void
  handleClick: (
    command: string,
    searchText: string,
    isIdPrimary: boolean,
    needConfirmation: boolean
  ) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const CommandInterfaceModal = ({
  open,
  selectedLine,
  searchWord,
  isProjectListOn,
  recommendationList,
  wrapperRef,
  listRef,
  inputRef,
  toggleModal,
  handleClick,
  handleChange,
  handleSubmit
}: CommandInterfaceModalProps) => (
  <Modal isOpen={open} onClose={toggleModal} unstyled>
    <div
      ref={wrapperRef}
      className='-mt-28 hidden max-h-[450px] w-[650px] overflow-hidden rounded-md border border-white/5 bg-white/5 backdrop-blur-xl transition-all duration-300 lg:block'>
      <form onSubmit={handleSubmit}>
        <input
          className='block w-full appearance-none bg-transparent px-6 py-5 text-lg font-normal text-white/75 outline-none placeholder:text-white/50'
          onChange={handleChange}
          value={searchWord}
          autoComplete='off'
          spellCheck='false'
          type='text'
          id='spotlight'
          ref={inputRef}
          placeholder='Type a command or search...'
        />
      </form>

      <div className='border-b-[0.5px] border-white/10' />

      <div
        ref={listRef}
        className='h-full max-h-[383px] w-full overflow-y-auto py-2 transition-all duration-300 scrollbar-hide'>
        {recommendationList.map((item, index) => (
          <RecommendationRow
            key={item.menuText}
            Icon={item.Icon}
            isHighlighted={index === selectedLine}
            isNextItem={
              selectedLine + 1 === recommendationList.length ? true : selectedLine + 1 === index
            }
            isPrevItem={
              selectedLine === 0 && index + 1 === recommendationList.length
                ? true
                : selectedLine === index + 1
            }
            menuText={item.menuText}
            subtitle={item.subtitle}
            isProjectItem={isProjectListOn}
            shortcutKey={item.shortcutKey}
            handleClick={() =>
              handleClick(
                item.commandInterfaceOptions,
                item.menuText,
                item.isIdPrimary ?? false,
                item.needConfirmation ?? false
              )
            }
          />
        ))}
        {recommendationList.length === 0 && (
          <div className='mx-2 flex h-12 cursor-pointer items-center justify-between rounded-md p-4 text-sm transition-all hover:bg-white/10'>
            <div className='flex w-full items-center'>
              <SearchIcon className='mr-4 w-[24px] text-white/50' />
              <span className='w-full text-left text-white/90'>No results found</span>
            </div>
          </div>
        )}
      </div>
    </div>
  </Modal>
)

export default CommandInterfaceModal
