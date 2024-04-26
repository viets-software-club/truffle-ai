import CompanyItem from '@/components/domain/details/CompanyItem'
import FounderItem from '@/components/pure/InformationSidebar/FounderItem'
import LanguagesItem from '@/components/domain/details/LanguagesItem'
import Box from '@/components/pure/InformationSidebar/Box'
import SmallSidebar from '@/components/domain/sidebar/SmallSidebar'
import Skeleton from '@/components/pure/LoadingBar'
import { Project } from '@/graphql/generated/gql'
import { AffinityData } from '@/util/sendToAffinity'
import SendToAffinity from './SendToAffinity'
import GithubStats from './GithubStats'
import Notes from '../../domain/details/Notes'

type RightSidebarProps = {
  project?: Project
  loading?: boolean
}

/**
 * Right sidebar for project details page
 */
const RightSidebar = ({ project, loading }: RightSidebarProps) => {
  const affinityAPIKey = typeof window !== 'undefined' && localStorage.getItem('affinityKey')
  const affinityListID = typeof window !== 'undefined' && localStorage.getItem('affinityListId')

  const sendToAffinityProps: AffinityData = {
    name: project?.name as string,
    stars: project?.starCount || 0,
    forks: project?.forkCount || 0,
    contributors: project?.contributorCount || 0,
    githubUrl: project?.githubUrl as string,
    apiKey: affinityAPIKey as string,
    listId: affinityListID as string
  }

  return (
    <SmallSidebar>
      <div className='hidden lg:block'>
        <GithubStats project={project} loading={loading} />
      </div>

      {loading ? (
        <Box title=''>
          <div className='-mt-1 mb-2 flex flex-col gap-3'>
            <Skeleton className='h-6' />
            <Skeleton className='h-6' />
            <Skeleton className='h-6' />
            <Skeleton className='h-6' />
          </div>
        </Box>
      ) : project ? (
        <>
          {project.languages && project.languages?.length > 0 && (
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

          <Notes projectId={project.id as string} />
        </>
      ) : null}
    </SmallSidebar>
  )
}

export default RightSidebar
