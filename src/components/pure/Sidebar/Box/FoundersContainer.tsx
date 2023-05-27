import FounderItem from './FounderItem'

type FoundersData = {
  name: string
  linkedin: string
  mail: string
  urlLinkedIn: string
  urlMail: string
}

const generateMailTemplate = (founderName: string) =>
  `?subject=Interested%20In%20Product&body=Dear%20${founderName},%0D%0A%0D%0Anice%20to%20meet%20you.%20I%20am%20interested%20in%20your%20product.%0D%0A%0D%0ABest%20Regards,%0D%0A%0D%0AMax%20Mustermann`

type FoundersContainerProps = {
  foundersData: FoundersData[]
}

const FoundersContainer = ({ foundersData: socialMediaData }: FoundersContainerProps) => {
  const handleClick = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className="border-y border-solid py-2.5 text-14 font-normal leading-4">
      <h1 className="px-7 py-2.5 text-12 uppercase">Founders</h1>
      {socialMediaData.map((data) => (
        <FounderItem
          key={data.name}
          linkedin={data.linkedin}
          mail={data.mail}
          name={data.name}
          onClickLinkedIn={() => handleClick(data.urlLinkedIn)}
          onClickMail={() => handleClick(data.urlMail + generateMailTemplate(data.name))}
        />
      ))}
    </div>
  )
}

export default FoundersContainer
