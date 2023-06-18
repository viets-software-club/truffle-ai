import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

const Input = (
  props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => (
  <input
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className="min-w-[250px] rounded-[5px] border border-gray-800 bg-gray-900 px-3 py-2 text-14 text-white focus:outline focus:outline-indigo-500"
  />
)

export default Input
