import { MutableRefObject } from 'react'

type SectionProps = {
  title: string
  subtitle: string
  children: React.ReactNode
  refs: MutableRefObject<Record<string, HTMLDivElement | null>>
}

const Section = ({ title, subtitle, children, refs }: SectionProps) => {
  const id = `${title} - ${subtitle}`
  return (
    <div
      ref={(ref) => {
        // eslint-disable-next-line no-param-reassign
        refs.current[id] = ref
      }}
      id={id}
      className="pb-32 pt-20"
    >
      <h3 className="mb-2 pb-4 text-16 font-medium">{subtitle}</h3>
      {children}
    </div>
  )
}

export default Section
