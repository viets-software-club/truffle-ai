import CompanyItem from './CompanyItem'

type CompanyData = {
  name: string
  value: string
  growth: string
}

type CompanyContainerProps = {
  companyData: CompanyData[]
}

const CompanyContainer = ({ companyData: socialMediaData }: CompanyContainerProps) => (
  <div className="border-y border-solid border-gray-800 py-2.5 text-14 font-normal leading-4">
    <h1 className="px-7 py-2.5 text-12 uppercase text-gray-300">Company</h1>
    {socialMediaData.map((data) => (
      <CompanyItem key={data.name} name={data.name} value={data.value} growth={data.growth} />
    ))}
  </div>
)

export default CompanyContainer
