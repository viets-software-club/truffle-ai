import { useState } from 'react'
import { BiPencil } from 'react-icons/bi'
import { useRouter } from 'next/router'
import Button from '@/components/shared/Button'
import { DataPoint } from '@/components/shared/chart/Chart'
import ChartWrapper from '@/components/shared/chart/ChartWrapper'
import { Project } from '@/graphql/generated/gql'
import CategoryModal from './CategoryModal'
import SendToSlack from './SendToSlack'

type CompareContentProps = {
  data?: Project[]
  category: string
}

const CompareContent = ({ data, category }: CompareContentProps) => {
  const router = useRouter()

  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [selectedMetric, setSelectedMetric] = useState('Stars')

  // Redirects to new category page after renaming
  const redirect = (newCategory: string) => {
    void router.replace(`/compare/${newCategory}`)
  }

  const toggleCategoryModal = () => {
    setCategoryModalOpen(!categoryModalOpen)
  }

  const slackMessage =
    data
      ?.map(
        project =>
          `- <${project.githubUrl as string}|${project.name as string}>, ${
            project.starCount as number
          } stars`
      )
      .join('\n') ?? ''

  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-6 px-4 pt-4 sm:flex-row sm:items-center md:px-6 md:pt-3.5'>
        <div className='flex flex-col'>
          <p className='text-xs font-medium uppercase text-white/50'>Compare</p>
          <h1 className='text-2xl font-medium'>{category}</h1>
        </div>

        <div className='flex flex-row items-center gap-2 sm:justify-end'>
          <SendToSlack message={slackMessage} />

          <Button className='text-white' onClick={toggleCategoryModal}>
            <BiPencil />
            Edit category
          </Button>
        </div>
      </div>

      {data && data.length > 0 && (
        <>
          <ChartWrapper
            datasets={data.map(project => ({
              id: project.id as string,
              name: project.name as string,
              data:
                selectedMetric === 'Stars'
                  ? (project.starHistory as DataPoint[])
                  : (project.forkHistory as DataPoint[])
            }))}
            multipleLines
            selectedMetric={selectedMetric}
            setSelectedMetric={setSelectedMetric}
          />

          <p className='px-6 py-3.5 font-medium'>All projects in this category</p>
        </>
      )}

      <CategoryModal
        open={categoryModalOpen}
        close={() => setCategoryModalOpen(false)}
        category={category}
        redirect={redirect}
      />
    </>
  )
}

export default CompareContent
