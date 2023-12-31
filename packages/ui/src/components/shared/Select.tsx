import { Fragment, useEffect, useRef, useState } from 'react'
import { LuChevronsUpDown } from 'react-icons/lu'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, PlusIcon } from '@primer/octicons-react'
import { twMerge } from 'tailwind-merge'
import { inputErrorClasses } from './Input'
import Tag from './Tag'

type SelectProps = {
  values: string[]
  selected: string[]
  setSelected: (values: string[]) => void
  placeholder?: string
  error?: string
}

const Select = ({
  values,
  selected: selectedState,
  setSelected,
  placeholder,
  error
}: SelectProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const [previousSelected, setPreviousSelected] = useState<string[]>(selectedState)
  const [query, setQuery] = useState('')

  const allValues = [...values, ...selectedState].filter(
    (value, index, array) => array.indexOf(value) === index
  )

  const filteredValues =
    query === ''
      ? allValues
      : allValues.filter(value =>
          value.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  // Close dropdown when user selects an option
  useEffect(() => {
    if (previousSelected.length !== selectedState.length) {
      buttonRef.current?.click()
      setPreviousSelected(selectedState)
    }
  }, [selectedState])

  return (
    <div>
      <Combobox value={selectedState} onChange={setSelected} multiple>
        <div className='relative min-w-[250px]'>
          {selectedState.length > 0 && (
            <div className='mb-4 flex flex-wrap gap-2'>
              {selectedState.map(value => (
                <Tag key={value}>{value}</Tag>
              ))}
            </div>
          )}

          <div className='relative rounded-md border border-white/5 bg-white/5 text-white'>
            <Combobox.Input
              placeholder={placeholder}
              className={twMerge(
                'w-full appearance-none rounded-md bg-transparent px-3 py-2.5 text-sm outline-none transition-all duration-75 placeholder:text-white/40 focus:ring-2 focus:ring-indigo-500',
                error && inputErrorClasses
              )}
              onChange={event => setQuery(event.currentTarget.value)}
              autoComplete='off'
            />
            <Combobox.Button
              ref={buttonRef}
              className='absolute inset-y-0 right-0 flex items-center pr-2'>
              <LuChevronsUpDown className='h-5 w-5 text-white/50' aria-hidden='true' />
            </Combobox.Button>
          </div>

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}>
            <Combobox.Options
              static
              className='absolute mt-2 max-h-60 w-full overflow-auto rounded-md border border-white/5 bg-[#191c20] py-1 text-sm shadow-sm shadow-white/5 outline-none'>
              {filteredValues.map(value => (
                <Combobox.Option
                  key={value}
                  className={({ active }) =>
                    `relative cursor-pointer py-2 pl-10 pr-4 transition-colors duration-75 ${
                      // eslint-disable-next-line sonarjs/no-duplicate-string
                      active ? 'text-white' : 'text-white/70'
                    }`
                  }
                  value={value}>
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate transition-all duration-75 ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}>
                        {value}
                      </span>

                      {selected && (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 transition-colors duration-75 ${
                            active ? 'text-white' : 'text-white/70'
                          }`}>
                          <CheckIcon className='h-4 w-4' aria-hidden='true' />
                        </span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))}

              {query.trim().length > 0 && !filteredValues.includes(query) && (
                <Combobox.Option
                  value={query}
                  className={({ active }) =>
                    `relative cursor-pointer py-2 pl-10 pr-4 transition-colors duration-75 ${
                      active ? 'text-white' : 'text-white/70'
                    }`
                  }>
                  {({ active }) => (
                    <>
                      Create {`"${query}"`}
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 transition-colors duration-75 ${
                          active ? 'text-white' : 'text-white/70'
                        }`}>
                        <PlusIcon className='h-4 w-4' aria-hidden='true' />
                      </span>
                    </>
                  )}
                </Combobox.Option>
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>

      {error && <p className='mt-1.5 text-sm text-red-400'>{error}</p>}
    </div>
  )
}

export default Select
