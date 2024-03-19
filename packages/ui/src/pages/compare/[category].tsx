import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { RowPinningState } from '@tanstack/react-table'
import CompareContent from '@/components/domain/compare'
import ProjectsTable from '@/components/domain/projects/ProjectsTable'
import { PercentileStats } from '@/components/domain/projects/columns'
import { defaultSort } from '@/components/domain/projects/types'
import Page from '@/components/shared/Page'
import {
  GthbRepo,
  GthbTrendingFilter,
  GthbTrendingOrderBy,
  PageInfo
} from '@/graphql/generated/gql'
import useFetchBookmarks from '@/hooks/useFetchBookmarks'
import { useComparePageRowPinningState } from '@/hooks/useProjectTableState'
import getPercentile from '@/util/getPercentile'
import { NextPageWithLayout } from '../_app'

const PAGE_SIZE = 30

/**
 * Compare projects page
 */
const ComparePage: NextPageWithLayout = () => {
  const {
    query: { category: categoryFromUrl }
  } = useRouter()

  const category =
    (typeof categoryFromUrl === 'string' ? categoryFromUrl : categoryFromUrl?.join('')) || ''

  // const { setFilters: setCategoryFilters, setSorting: setCategorySorting } =
  //   useCategoryProjectsState()
  // const { lastViewedPage, setLastViewedPage } = useLastViewedPageState()

  const { rowPinning, setRowPinning } = useComparePageRowPinningState()

  const [data, setData] = useState<GthbRepo[]>()
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<GthbTrendingFilter>({})
  const [sorting, setSorting] = useState<GthbTrendingOrderBy | null>(defaultSort)

  const [percentileStats, setPercentileStats] = useState<PercentileStats>({
    topTenPercent: {},
    topTwentyPercent: {},
    bottomTenPercent: {},
    bottomTwentyPercent: {}
  })

  const updateFilters = (filter: GthbTrendingFilter) => {
    setFilters(filter)
  }

  const { bookmarks, fetching } = useFetchBookmarks(category)

  // Only update table data when urql data changes
  useEffect(() => {
    if (bookmarks && !fetching) {
      const projectData = bookmarks.map(b => b.projRepo.gthbRepo)

      setData(projectData)
      setLoading(false)
      setPercentileStats({
        topTenPercent: getPercentile(projectData, 0.1),
        bottomTenPercent: getPercentile(projectData, 0.1, false),
        topTwentyPercent: getPercentile(projectData, 0.2),
        bottomTwentyPercent: getPercentile(projectData, 0.2, false)
      })
    }
  }, [bookmarks, fetching])

  // useEffect(() => {
  //   if (lastViewedPage !== category && bookmarkIds && !bookmarksFetching) {
  //     setLastViewedPage(category)
  //     setCategoryFilters({ ...filters, id: { in: bookmarkIds } })
  //   }
  // }, [bookmarkIds])

  // useEffect(() => {
  //   if (lastViewedPage === category && !bookmarksFetching) {
  //     setCategoryFilters({ ...filters, id: bookmarkIds ? { in: bookmarkIds } : undefined })
  //     setCategorySorting(sorting)
  //   }
  // }, [filters, sorting])

  return (
    <ProjectsTable
      data={data}
      filters={filters}
      sorting={sorting}
      fetching={loading}
      // @TODO fix error handling
      error={undefined}
      setSorting={setSorting}
      updateFilters={updateFilters}
      totalCount={data?.length ?? 0} // @TODO: Fix totalCount
      // @TODO do we need this?
      pageInfo={{} as PageInfo}
      setPagination={() => {}}
      pageSize={PAGE_SIZE}
      percentileStats={percentileStats}
      beforeTable={
        <CompareContent
          data={data}
          category={
            bookmarks[0].projCatAndProjBookmarkCollection.edges.map(edge => edge.node.projCat)[0]
          }
          loading={loading}
        />
      }
      hideTimeFrame
      showPinned
      rowPinning={{
        top: rowPinning[category]
      }}
      setRowPinning={(
        pinning: RowPinningState | ((prevState: RowPinningState) => RowPinningState)
      ) => {
        setRowPinning({
          ...rowPinning,
          [category]: [
            ...((typeof pinning === 'function'
              ? pinning({ top: rowPinning[category] }).top
              : pinning.top) ?? [])
          ].filter((value, index, self) => self.indexOf(value) === index)
        })
      }}
    />
  )
}

ComparePage.getLayout = page => <Page>{page}</Page>

export default ComparePage
