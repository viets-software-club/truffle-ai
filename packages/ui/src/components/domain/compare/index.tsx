import { useState } from 'react'
import { BiPencil } from 'react-icons/bi'
import { useRouter } from 'next/router'
import Button from '@/components/shared/Button'
import Skeleton from '@/components/shared/Skeleton'
import { DataPoint } from '@/components/shared/chart/Chart'
import ChartWrapper from '@/components/shared/chart/ChartWrapper'
import { GthbRepo, ProjCat } from '@/graphql/generated/gql'
import CategoryModal from './CategoryModal'
import SendToSlack from './SendToSlack'

type CompareContentProps = {
  data?: GthbRepo[]
  category?: ProjCat
  loading?: boolean
}

const CompareContent = ({ data, category, loading }: CompareContentProps) => {
  const router = useRouter()

  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [selectedMetric, setSelectedMetric] = useState('Stars')

  // Redirects to new category page after renaming
  const redirect = (newCategoryId: string) => {
    void router.replace(`/compare/${encodeURIComponent(newCategoryId)}`)
  }

  const toggleCategoryModal = () => {
    setCategoryModalOpen(!categoryModalOpen)
  }

  const slackMessage =
    data
      ?.map(repo => `- <${repo.gthbRepoUrl}|${repo.gthbRepoName}>, ${repo.stargazerCount} stars`)
      .join('\n') ?? ''

  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-6 px-4 pt-4 sm:flex-row sm:items-center md:px-6 md:pt-3.5'>
        <div className='flex flex-col'>
          {loading ? (
            <>
              <Skeleton className='h-6 !w-20' />
              <Skeleton className='mt-1 h-8 !w-48' />
            </>
          ) : (
            <>
              <p className='text-xs font-medium uppercase text-white/50'>Compare</p>
              <h1 className='text-2xl font-medium'>{category?.title}</h1>
            </>
          )}
        </div>

        <div className='flex flex-row items-center gap-2 sm:justify-end'>
          {loading ? (
            <>
              <Skeleton className='h-8 !w-32' />
              <Skeleton className='h-8 !w-32' />
            </>
          ) : (
            <>
              <SendToSlack content={slackMessage} multiple />

              <Button className='text-white' onClick={toggleCategoryModal}>
                <BiPencil />
                Edit category
              </Button>
            </>
          )}
        </div>
      </div>

      <ChartWrapper
        loading={loading}
        datasets={
          data?.map(repo => ({
            id: repo.gthbRepoId as string,
            name: repo.gthbRepoName,
            data: (selectedMetric === 'stars'
              ? repo?.gthbStarHistCollection.edges.map(edge => ({
                  date: edge.node.gthbStarHistDate as string,
                  count: edge.node.amount as number
                }))
              : repo?.gthbForkHistCollection.edges.map(edge => ({
                  date: edge.node.gthbForkHistDate as string,
                  count: edge.node.amount as number
                }))) as DataPoint[]
          })) ?? []
        }
        multipleLines
        selectedMetric={selectedMetric}
        setSelectedMetric={setSelectedMetric}
      />

      {loading ? (
        <Skeleton className='mx-6 my-3.5 h-8 !w-72' />
      ) : (
        <p className='px-6 py-3.5 font-medium'>All projects in this category</p>
      )}

      {category && (
        <CategoryModal
          open={categoryModalOpen}
          close={() => setCategoryModalOpen(false)}
          category={category}
          redirect={redirect}
        />
      )}
    </>
  )
}

export default CompareContent
