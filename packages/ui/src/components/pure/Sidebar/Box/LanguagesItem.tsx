type LanguagesProps = {
  languages: Array<{ name: string; color: string }>
}

const LanguagesItem = ({ languages }: LanguagesProps) => (
  <div className="flex flex-col justify-between">
    <div className="px-7 py-2.5">
      <div className="flex flex-col gap-4 text-gray-500">
        {languages.map((language) => (
          <div key={language.name} className="flex items-center gap-[5px]">
            <div
              className="h-[12px] w-[12px] rounded-full border border-gray-100/20"
              style={{ backgroundColor: language.color }}
            />
            {language.name}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default LanguagesItem
