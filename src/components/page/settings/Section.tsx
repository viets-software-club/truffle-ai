type SectionProps = {
  title: string
  subtitle: string
  children: React.ReactNode
}

const Section = ({ title, subtitle, children }: SectionProps) => {
  const id = `${title} - ${subtitle}`
  return (
    <div id={id} className="py-12">
      <h3 className="mb-2 pb-4 text-16 font-medium">{subtitle}</h3>
      {children}
    </div>
  )
}

export default Section
