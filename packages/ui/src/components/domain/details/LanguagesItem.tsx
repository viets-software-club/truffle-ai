type LanguagesProps = {
  languages: Array<{ name: string; color: string }>
}

const LanguagesItem = ({ languages }: LanguagesProps) => (
  <div className='flex flex-col gap-4 py-2.5 text-gray-500'>
    {languages.map(language => (
      <div key={language.name} className='flex items-center gap-[5px]'>
        <div
          className='h-3 w-3 rounded-full border border-gray-100/20'
          style={{ backgroundColor: language.color }}
        />
        {language.name}
      </div>
    ))}
  </div>
)

export default LanguagesItem
