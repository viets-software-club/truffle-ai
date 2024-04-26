type LanguagesProps = {
	languages: Array<{ name: string; color: string }>
}

const LanguagesItem = ({ languages }: LanguagesProps) => (
	<div className="flex flex-col gap-4 py-2.5 text-white/50">
		{languages.map((language) => (
			<div key={language.name} className="flex items-center gap-[5px]">
				<div
					className="h-3 w-3 rounded-full border border-white/20"
					style={{ backgroundColor: language.color }}
				/>
				{language.name}
			</div>
		))}
	</div>
)

export default LanguagesItem
