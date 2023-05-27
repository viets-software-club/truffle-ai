import FounderItem from './FounderItem'

type FoundersData = {
  name: string
  linkedin: string
  mail: string
  urlLinkedIn: string
  urlMail: string
}

const generateMailTemplate = (founderName: string, companyName: string) =>
  `?subject=La%20Famiglia%20x%20${companyName}&body=Dear%20${founderName},%0D%0A%0D%0AI%20hope%20you’re%20well.%20I%20saw%20you’re%20the%20mastermind%20behind%20${companyName},%20and%20I%20had%20to%20reach%20out.%0D%0A%0D%0AI’m%20a%20former%20ML%20researcher%20(in%20federated%20learning)%20%2B%20data%20scientist%20at%20Amazon%20turned%20VC%20at%20La%20Famiglia%20(early-stage%20investor%20of%20Deel,%20Personio,%20Applied%20Intuition,%20Groq,%20Abacus%20AI,%20Stripe,%20etc.).%0D%0A%0D%0A{What%20you%20are%20building%20is%20compelling,%20especially%20after%20I%20played%20with%20Langchain%20%2B%20Pinecone%20%2B%20GPT3%20API%20a%20few%20weeks%20ago.}%0D%0A%0D%0AI%20would%20love%20to%20meet%20you%20and%20learn%20more%20about%20how%20we%20could%20work%20together.%20Is%20there%20a%20good%20time%20in%20the%20next%20few%20days%3F%0D%0A%0D%0ATake%20care%20%26%20all%20the%20best,%0D%0AViet%0D%0A%0D%0APS:%20if%20you%20have%20time,%20please%20check%20out%20my%20blog%20post%20on%20Building%20a%20Defensible%20ML%20company%20here:%20https%3A%2F%2Fvietle.substack.com%2Fp%2Fdefensible-machine-learning`

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
          onClickMail={() =>
            handleClick(data.urlMail + generateMailTemplate(data.name, data.companyName))
          }
        />
      ))}
    </div>
  )
}

export default FoundersContainer
