import CompanyItem from '@/components/domain/details/CompanyItem'
import FounderItem from '@/components/domain/details/FounderItem'
import LanguagesItem from '@/components/domain/details/LanguagesItem'
import Box from '@/components/domain/sidebar/Box'
import SmallSidebar from '@/components/domain/sidebar/SmallSidebar'
import { Project } from '@/graphql/generated/gql'
import { AffinityData } from '@/util/sendToAffinity'
import SendToAffinity from '../settings/SendToAffinity'
import GithubStats from './GithubStats'

type RightSidebarProps = {
  project: Project
}

/**
 * Right sidebar for project details page
 */
const RightSidebar = ({ project }: RightSidebarProps) => {
  const affinityAPIKey = localStorage.getItem('affinityKey')
  const affinityListID = localStorage.getItem('affinityListId')

  const sendToAffinityProps: AffinityData = {
    name: project.name as string,
    stars: project.starCount || 0,
    forks: project.forkCount || 0,
    contributors: project.contributorCount || 0,
    githubUrl: project.githubUrl as string,
    apiKey: affinityAPIKey as string,
    listId: affinityListID as string
  }

  return (
    <SmallSidebar>
      <div className='hidden lg:block'>
        <GithubStats project={project} />
      </div>

      {project.languages?.length && (
        <Box title='Languages'>
          <LanguagesItem
            languages={project.languages as unknown as Array<{ name: string; color: string }>}
          />
        </Box>
      )}

      {(project.organization?.twitterUsername || project.organization?.websiteUrl) && (
        <Box title='Company'>
          <CompanyItem
            twitterLink={project.organization?.twitterUsername as string}
            websiteLink={project.organization?.websiteUrl as string}
          />
        </Box>
      )}

      {project.name &&
        (project.associatedPerson?.name ||
          project.associatedPerson?.githubUrl ||
          project.associatedPerson?.email ||
          project.associatedPerson?.twitterUsername ||
          project.associatedPerson?.websiteUrl) && (
          <Box title='Founder'>
            <FounderItem
              projectName={project.name}
              name={project.associatedPerson?.name as string}
              github={project.associatedPerson?.githubUrl as string}
              mail={project.associatedPerson?.email as string}
              twitter={project.associatedPerson?.twitterUsername as string}
              website={project.associatedPerson?.websiteUrl as string}
            />
          </Box>
        )}

      <Box title='Integrations'>
        <div className='py-2.5'>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <SendToAffinity {...sendToAffinityProps} />
        </div>
      </Box>
    </SmallSidebar>
  )
}

export default RightSidebar
