import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { FiTrash2 } from 'react-icons/fi'
import Button from '@/components/pure/Button'
import Sidebar from '@/components/page/settings/Sidebar'
import Section from '@/components/page/settings/Section'
import withAuth from '@/components/side-effects/withAuth'
import SlackSettings from '@/components/page/settings/SendData/SlackSettings'
import EmailTemplate from '@/components/page/settings/EmailTemplate'
import deleteAccount from '@/util/deleteAccount'
import FilterInput, { defaultFilters } from '@/components/page/settings/FilterInput'
import AffinitySettings from '@/components/page/settings/AffinitySettings'
import Banner from '@/components/page/settings/Banner'
import CommandInterface from '@/components/side-effects/CommandInterface'

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
    (entries) => {
      entries.forEach((entry) => {
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
      subSections.forEach((subSection) => {
        const id = `${category} - ${subSection}`
        if (refs.current[id]) {
          observer.observe(refs.current[id] as Element)
        }
      })
    })

    return () => {
      Object.entries(sections).forEach(([category, subSections]) => {
        subSections.forEach((subSection) => {
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
    <div className="flex">
      <Sidebar sections={sections} activeSection={activeSection} onClick={scrollTo} />

      <CommandInterface />

      <div className="ml-64 w-full overflow-auto px-20 py-10 text-white">
        <h2 className="text-20 mt-8 border-b border-gray-800 pb-4 font-medium">General</h2>

        <Section title="General" subtitle="Default filters" refs={refs}>
          <p className="text-14 mb-6 font-normal text-gray-400">
            Anything below these values will be filtered out of your results on the trending page.
          </p>
          <div className="mb-6 flex flex-row">
            {Object.keys(filters).map((filterType) => (
              <FilterInput
                key={filterType}
                filterType={filterType}
                filters={filters}
                setFilters={setFilters}
                saveSettings={saveSettings}
              />
            ))}
          </div>
          <Button variant="highlighted" text="Update" onClick={showBannerFunc} />
          {showBanner && <Banner variant="success" message="Filters updated" />}
        </Section>

        <div className="h-1 border-b border-gray-800" />

        <Section title="General" subtitle="Email template" refs={refs}>
          <EmailTemplate />
        </Section>

        <h2 className="text-20 mt-8 border-b border-gray-800 pb-4 font-medium">Account</h2>

        <Section title="Account" subtitle="Log out" refs={refs}>
          <div className="flex">
            <Link href="/logout">
              <Button
                text="Log out"
                variant="highlighted"
                order="ltr"
                textColor="white"
                iconColor="white"
              />
            </Link>
          </div>
        </Section>

        <div className="h-1 border-b border-gray-800" />

        <Section title="Account" subtitle="Delete account" refs={refs}>
          <p className="text-14 pb-6 font-normal text-gray-300">
            If you delete your account, all your data will be lost.
          </p>
          {!confirmDelete ? (
            <Button
              onClick={() => setConfirmDelete(true)}
              text="Delete account"
              variant="red"
              Icon={FiTrash2}
              order="ltr"
              textColor="white"
              iconColor="white"
            />
          ) : (
            <>
              <p className="text-14 pb-6 font-normal text-red-500">Are you sure?</p>
              <Link href="/logout">
                <Button
                  onClick={handleDeleteAccount}
                  text="Yes, delete"
                  variant="red"
                  Icon={FiTrash2}
                  order="ltr"
                  textColor="white"
                  iconColor="white"
                />
              </Link>
            </>
          )}
        </Section>

        <h2 className="text-20 mt-8 border-b border-gray-800 pb-4 font-medium">Integrations</h2>
        <Section title="Integrations" subtitle="Notifications" refs={refs}>
          <p className="text-14 mb-4 font-normal">Slack notifications</p>

          <SlackSettings />
        </Section>
        <div className="h-1 border-b border-gray-800" />

        <Section title="Integrations" subtitle="Affinity" refs={refs}>
          <AffinitySettings />
        </Section>
      </div>
    </div>
  )
}

export default withAuth(Settings)
