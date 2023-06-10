/* eslint-disable no-alert */
import CRM from '@/components/page/settings/SendData/CRM'
import SlackNotificationSender from '@/components/page/settings/SendData/SlackNotificationSender'
import Sidebar from '@/components/page/settings/Sidebar'
import withAuth from '@/components/side-effects/withAuth'
import { useEffect, useRef, useState } from 'react'
import Section from '@/components/page/settings/Section'
import Button from '@/components/pure/Button'
import { FiRefreshCcw, FiTrash2 } from 'react-icons/fi'

const Settings = () => {
  const sections = {
    General: ['Theme', 'Filters'],
    Account: ['Profile', 'Linked Accounts', 'Notifications', 'API', 'Delete account'],
    Integrations: ['Change']
  }

  // Saves the section that is currently in view
  const [activeSection, setActiveSection] = useState(sections.General[0])
  const refs = useRef<Record<string, HTMLDivElement | null>>({})

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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

  // for the filters: threshold values @TODO save in backend
  const [values, setValues] = useState({
    Stars: '',
    Forks: '',
    Issues: '',
    Contributors: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
  }

  return (
    <div className="flex">
      <Sidebar sections={sections} activeSection={activeSection} onClick={scrollTo} />
      <div className="ml-64 w-full overflow-auto px-20 py-10 text-white">
        <h2 className="border-b border-gray-800 pb-4 text-20 font-medium">General</h2>

        <Section title="General" subtitle="Theme" refs={refs}>
          <Button
            onClick={() => alert('Not implemented yet!')}
            text="Change theme"
            variant="highlighted"
            Icon={FiRefreshCcw}
            order="ltr"
            textColor="white"
            iconColor="white"
          />
        </Section>
        <div className="h-1 border-b border-gray-800" />
        <Section title="General" subtitle="Filters" refs={refs}>
          <div className="flex">
            {Object.entries(values).map(([key, value]) => (
              <div className="flex flex-col rounded pr-4 text-white" key={key}>
                <label htmlFor={key} className="mb-2 text-14 font-normal">
                  {key}
                </label>
                <input
                  type="number"
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                  className="rounded border border-gray-800 bg-gray-900 p-2 text-white"
                  placeholder="100"
                />
              </div>
            ))}
          </div>
        </Section>

        <h2 className="border-b border-gray-800 pb-4 text-20 font-medium">Account</h2>

        <Section title="Account" subtitle="Profile" refs={refs}>
          <p className="pb-2 text-14 font-normal">Name</p>
          <input
            type="text"
            id="name"
            name="name"
            className="mb-6 rounded border border-gray-800 bg-gray-900 p-2 text-white"
            placeholder="John Doe"
          />
          <p className="pb-2 text-14 font-normal">Email</p>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            className="rounded border border-gray-800 bg-gray-900 p-2 text-white"
          />
        </Section>
        <div className="h-1 border-b border-gray-800" />
        <Section title="Account" subtitle="Linked Accounts" refs={refs}>
          <p className="pb-2 text-14 font-normal">GitHub access token</p>
          <input
            type="password"
            id="github"
            name="github"
            placeholder="•"
            className="rounded border border-gray-800 bg-gray-900 p-2 text-white"
          />
        </Section>
        <div className="h-1 border-b border-gray-800" />
        <Section title="Account" subtitle="Notifications" refs={refs}>
          <p className="mb-4 text-14 font-normal">Slack notifications</p>
          <SlackNotificationSender />
        </Section>
        <div className="h-1 border-b border-gray-800" />
        <Section title="Account" subtitle="API" refs={refs}>
          <p className="text-14 font-normal">Your API keys</p>
        </Section>
        <div className="h-1 border-b border-gray-800" />
        <Section title="Account" subtitle="Delete account" refs={refs}>
          <p className="pb-6 text-14 font-normal text-gray-300">
            If you delete your account, all your data will be lost.
          </p>
          <Button
            onClick={() => alert('Not implemented yet!')}
            text="Delete account"
            variant="red"
            Icon={FiTrash2}
            order="ltr"
            textColor="white"
            iconColor="white"
          />
        </Section>
        <h2 className="border-b border-gray-800 pb-4 text-20 font-medium">Integrations</h2>
        <Section title="Integrations" subtitle="Change" refs={refs}>
          <CRM name="Affinity" stars={5} />
        </Section>
      </div>
    </div>
  )
}
export default withAuth(Settings)
