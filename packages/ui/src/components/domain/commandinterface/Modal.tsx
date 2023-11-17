import { FormEvent, RefObject } from 'react'
import Modal from '@/components/shared/Modal'
import RecommendationRow from './RecommendationRow'
import { RecommendationRowType } from './types'

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
      className='-mt-28 hidden max-h-[450px] w-[650px] overflow-hidden rounded-lg border-[0.5px] border-white/5 bg-white/5 backdrop-blur-xl transition-all duration-300 lg:block'>
      <form onSubmit={handleSubmit}>
        <input
          className='block w-full appearance-none bg-transparent px-6 py-5 text-lg font-light text-white/75 outline-none placeholder:text-white/50'
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
        className='h-full max-h-[383px] w-full overflow-y-auto py-2 scrollbar-hide'>
        {recommendationList &&
          recommendationList.map((item, index) => (
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
      </div>
    </div>
  </Modal>
)

export default CommandInterfaceModal
