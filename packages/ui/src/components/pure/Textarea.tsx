import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'

const Textarea = (
  props: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
) => (
  <textarea
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className="text-14 h-96 w-full min-w-[250px] rounded-[5px] border border-gray-800 bg-gray-900 px-3 py-2 text-white focus:outline focus:outline-indigo-500"
  />
)

export default Textarea
