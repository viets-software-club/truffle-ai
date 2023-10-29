import { useState } from 'react'
import Button from '@/components/pure/Button'
import Banner from './Banner'
import FilterInput, { defaultFilters } from './FilterInput'

// Helper function to get the default filter value from local storage
const getStoredValue = (filterType: string) =>
  Number(localStorage.getItem(`${filterType}DefaultFilter`))

const DefaultFilters = () => {
  // Save settings to local storage
  const saveSettings = (value: number, filterType: string) => {
    const storageKey = `${filterType}DefaultFilter`
    localStorage.setItem(storageKey, JSON.stringify(value))
  }

  const [filters, setFilters] = useState<defaultFilters>({
    stars: getStoredValue('stars'),
    forks: getStoredValue('forks'),
    issues: getStoredValue('issues'),
    contributors: getStoredValue('contributors')
  })

  const [showBanner, setShowBanner] = useState(false)

  const showBannerFunc = () => {
    setShowBanner(true)
    setTimeout(() => setShowBanner(false), 4000)
  }

  return (
    <>
      <p className='mb-6 text-sm font-normal text-gray-400'>
        Anything below these values will be filtered out of your results on the trending page.
      </p>

      <div className='mb-6 flex flex-row'>
        {Object.keys(filters).map(filterType => (
          <FilterInput
            key={filterType}
            filterType={filterType}
            filters={filters}
            setFilters={setFilters}
            saveSettings={saveSettings}
          />
        ))}
      </div>

      <Button variant='highlighted' onClick={showBannerFunc}>
        Update
      </Button>

      {showBanner && <Banner variant='success' message='Filters updated' />}
    </>
  )
}

export default DefaultFilters
