import { FC, FormEvent, RefObject } from 'react'
import { Transition, Dialog } from '@headlessui/react'
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

/**
 * Command interface UI
 */
const CommandInterfaceModal: FC<CommandInterfaceModalProps> = ({
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
}) => (
  <Transition appear show={open}>
    <Dialog
      as="div"
      open={open}
      onClose={toggleModal}
      className="fixed inset-0 z-30 flex h-screen w-screen justify-center"
    >
      <Transition.Child
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-950/25" />
      </Transition.Child>

      <Transition.Child
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Dialog.Panel
          as="div"
          ref={wrapperRef}
          className="mt-28 max-h-[450px] w-[650px] overflow-hidden rounded-lg border-[0.5px] border-gray-700/75 bg-gray-100/5 backdrop-blur-2xl transition-all duration-300"
        >
          <form onSubmit={handleSubmit}>
            <input
              className="block w-full appearance-none bg-transparent px-6 py-5 text-lg font-light text-gray-300 outline-none placeholder:text-gray-500"
              onChange={handleChange}
              value={searchWord}
              autoComplete="off"
              spellCheck="false"
              type="text"
              id="spotlight"
              ref={inputRef}
              placeholder="Type a command or search..."
            />
          </form>

          <div className="border-b-[0.5px] border-gray-500/25" />

          <div
            ref={listRef}
            className="h-full max-h-[383px] w-full overflow-y-auto py-2 scrollbar-hide"
          >
            {recommendationList &&
              recommendationList.map((item, index) => (
                <RecommendationRow
                  key={item.menuText}
                  Icon={item.Icon}
                  isHighlighted={index === selectedLine}
                  isNextItem={
                    selectedLine + 1 === recommendationList.length
                      ? true
                      : selectedLine + 1 === index
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
        </Dialog.Panel>
      </Transition.Child>
    </Dialog>
  </Transition>
)
export default CommandInterfaceModal
