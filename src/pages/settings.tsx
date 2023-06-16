import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { FiTrash2 } from 'react-icons/fi'
import Input from '@/components/pure/Input'
import Button from '@/components/pure/Button'
import Sidebar from '@/components/page/settings/Sidebar'
import Section from '@/components/page/settings/Section'
import withAuth from '@/components/side-effects/withAuth'
import SlackNotificationSender from '@/components/page/settings/SendData/SlackNotificationSender'
import EmailTemplate from '@/components/page/settings/EmailTemplate'

// @TODO prefill inputs, add action handlers, success/ error banner, loading spinners

/**
 * Settings page
 */
const Settings = () => {
  const sections = {
    General: ['Filters', 'Email template'],
    Account: ['Notifications', 'Delete account'], // 'Linked Accounts',
    Integrations: ['Affinity']
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

  const supabaseClient = useSupabaseClient()

  /**
   * Handle account deletion.
   * @async
   * @returns {Promise<void>} A promise that resolves when the account deletion attempt is complete.
   */
  async function handleDeleteAccount() {
    await supabaseClient.rpc('delete_user')
  }

  const deleteAccount = () => {
    void handleDeleteAccount()
  }

  return (
    <div className="flex">
      <Sidebar sections={sections} activeSection={activeSection} onClick={scrollTo} />

      <div className="ml-64 w-full overflow-auto px-20 py-10 text-white">
        <h2 className="border-b border-gray-800 pb-4 text-20 font-medium">General</h2>

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

        <div className="h-1 border-b border-gray-800" />

        <Section title="General" subtitle="Email template" refs={refs}>
          <p className="pb-2 text-14 font-normal">Email template</p>
          <EmailTemplate />
        </Section>

        <h2 className="border-b border-gray-800 pb-4 text-20 font-medium">Account</h2>

        <Section title="Account" subtitle="Notifications" refs={refs}>
          <p className="mb-4 text-14 font-normal">Slack notifications</p>

          <SlackNotificationSender />
        </Section>

        <div className="h-1 border-b border-gray-800" />

        <Section title="Account" subtitle="Delete account" refs={refs}>
          <p className="pb-6 text-14 font-normal text-gray-300">
            If you delete your account, all your data will be lost.
          </p>
          <Link href="/logout">
            <Button
              onClick={deleteAccount}
              text="Delete account"
              variant="red"
              Icon={FiTrash2}
              order="ltr"
              textColor="white"
              iconColor="white"
            />
          </Link>
        </Section>

        <h2 className="border-b border-gray-800 pb-4 text-20 font-medium">Integrations</h2>

        <Section title="Integrations" subtitle="Affinity" refs={refs}>
          <p className="pb-2 text-14 font-normal">Affinity API token</p>

          <Input type="password" id="affinity" name="affinity" placeholder="•••••••••••••••••" />

          <div className="mb-64 mt-4">
            <Button variant="highlighted" text="Update" onClick={() => ''} />
          </div>
        </Section>
      </div>
    </div>
  )
}

export default withAuth(Settings)
