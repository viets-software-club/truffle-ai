import { AiFillMail } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

type FounderProps = {
  name: string
  mail?: string
  linkedin?: string
  company: string
}

const emailTemplate = (founderName: string, companyName: string) =>
  `?subject=La%20Famiglia%20x%20${companyName}&body=Dear%20${founderName},%0D%0A%0D%0AI%20hope%20you're%20well.%20I%20saw%20you're%20the%20mastermind%20behind%20${companyName},%20and%20I%20had%20to%20reach%20out.%0D%0A%0D%0AI'm%20a%20former%20ML%20researcher%20(in%20federated%20learning)%20%2B%20data%20scientist%20at%20Amazon%20turned%20VC%20at%20La%20Famiglia%20(early-stage%20investor%20of%20Deel,%20Personio,%20Applied%20Intuition,%20Groq,%20Abacus%20AI,%20Stripe,%20etc.).%0D%0A%0D%0A{What%20you%20are%20building%20is%20compelling,%20especially%20after%20I%20played%20with%20Langchain%20%2B%20Pinecone%20%2B%20GPT3%20API%20a%20few%20weeks%20ago.}%0D%0A%0D%0AI%20would%20love%20to%20meet%20you%20and%20learn%20more%20about%20how%20we%20could%20work%20together.%20Is%20there%20a%20good%20time%20in%20the%20next%20few%20days%3F%0D%0A%0D%0ATake%20care%20%26%20all%20the%20best,%0D%0AViet%0D%0A%0D%0APS:%20if%20you%20have%20time,%20please%20check%20out%20my%20blog%20post%20on%20Building%20a%20Defensible%20ML%20company%20here:%20https%3A%2F%2Fvietle.substack.com%2Fp%2Fdefensible-machine-learning`

const FounderItem = ({ name, mail, linkedin, company }: FounderProps) => (
  <div className="flex flex-col justify-between">
    <div className="inline-flex px-7 py-2.5">
      <div className="flex flex-row items-center justify-center gap-[15px]">
        <span className="text-xs not-italic leading-3 text-gray-500">{name}</span>
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin className="h-[14px] w-[14px] text-gray-500" />
          </a>
        )}
        {mail && (
          <a
            href={`mailto:${mail}${emailTemplate(name, company)}`}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillMail className="h-[14px] w-[14px] text-gray-500" />
          </a>
        )}
      </div>
    </div>
  </div>
)

FounderItem.defaultProps = {
  mail: null,
  linkedin: null
}

export default FounderItem
