import { useEffect, useRef, useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import Link from 'next/link'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import AffinitySettings from '@/components/page/settings/AffinitySettings'
import Banner from '@/components/page/settings/Banner'
import EmailTemplate from '@/components/page/settings/EmailTemplate'
import FilterInput, { defaultFilters } from '@/components/page/settings/FilterInput'
import Section from '@/components/page/settings/Section'
import SlackSettings from '@/components/page/settings/SendData/SlackSettings'
import Sidebar from '@/components/page/settings/Sidebar'
import Button from '@/components/pure/Button'
import CommandInterface from '@/components/side-effects/CommandInterface'
import withAuth from '@/components/side-effects/withAuth'
import deleteAccount from '@/util/deleteAccount'

// @TODO use backend rather than local storage for Email template, slack webhook, affinity api key

// Helper function to get the default filter value from local storage
const getStoredValue = (filterType: string) =>
  Number(localStorage.getItem(`${filterType}DefaultFilter`))

const sections = {
  General: ['Default filters', 'Email template'],
  Account: ['Log out', 'Delete account'],
  Integrations: ['Notifications', 'Affinity']
}

/**
 * Settings page
 */
const Settings = () => {
  const [confirmDelete, setConfirmDelete] = useState(false)
  const supabaseClient = useSupabaseClient()

  // Saves the section that is currently in view
  const [activeSection, setActiveSection] = useState(sections.General[0])

  const refs = useRef<Record<string, HTMLDivElement | null>>({})

  // Observer to detect when a section is in view
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        // Check if the top of the element is visible
        if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
          setActiveSection(entry.target.id)
        }
      })
    },
    { threshold: 1.0 }
  )

  useEffect(() => {
    Object.entries(sections).forEach(([category, subSections]) => {
      subSections.forEach(subSection => {
        const id = `${category} - ${subSection}`
        if (refs.current[id]) {
          observer.observe(refs.current[id] as Element)
        }
      })
    })

    return () => {
      Object.entries(sections).forEach(([category, subSections]) => {
        subSections.forEach(subSection => {
          const id = `${category} - ${subSection}`
          if (refs.current[id]) {
            observer.unobserve(refs.current[id] as Element)
          }
        })
      })
    }
  }, [sections, observer])

  const scrollTo = (id: string) => {
    refs.current[id]?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDeleteAccount = () => {
    void deleteAccount(supabaseClient)
  }

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
    <div className='flex'>
      <Sidebar sections={sections} activeSection={activeSection} onClick={scrollTo} />

      <CommandInterface />

      <div className='ml-64 w-full overflow-auto px-20 py-10 text-white'>
        <h2 className='mt-8 border-b border-gray-800 pb-4 text-xl font-medium'>General</h2>

        <Section title='General' subtitle='Default filters' refs={refs}>
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
        </Section>

        <div className='h-1 border-b border-gray-800' />

        <Section title='General' subtitle='Email template' refs={refs}>
          <EmailTemplate />
        </Section>

        <h2 className='mt-8 border-b border-gray-800 pb-4 text-xl font-medium'>Account</h2>

        <Section title='Account' subtitle='Log out' refs={refs}>
          <div className='flex'>
            <Link href='/logout'>
              <Button variant='highlighted' className='text-white'>
                Log out
              </Button>
            </Link>
          </div>
        </Section>

        <div className='h-1 border-b border-gray-800' />

        <Section title='Account' subtitle='Delete account' refs={refs}>
          <p className='pb-6 text-sm font-normal text-gray-300'>
            If you delete your account, all your data will be lost.
          </p>
          {!confirmDelete ? (
            <Button onClick={() => setConfirmDelete(true)} variant='red' className='text-white'>
              <FiTrash2 />
              Delete account
            </Button>
          ) : (
            <>
              <p className='pb-6 text-sm font-normal text-red-500'>Are you sure?</p>
              <Link href='/logout'>
                <Button onClick={handleDeleteAccount} variant='red' className='text-white'>
                  <FiTrash2 />
                  Yes, delete
                </Button>
              </Link>
            </>
          )}
        </Section>

        <h2 className='mt-8 border-b border-gray-800 pb-4 text-xl font-medium'>Integrations</h2>
        <Section title='Integrations' subtitle='Notifications' refs={refs}>
          <p className='mb-4 text-sm font-normal'>Slack notifications</p>

          <SlackSettings />
        </Section>
        <div className='h-1 border-b border-gray-800' />

        <Section title='Integrations' subtitle='Affinity' refs={refs}>
          <AffinitySettings />
        </Section>
      </div>
    </div>
  )
}

export default withAuth(Settings)
