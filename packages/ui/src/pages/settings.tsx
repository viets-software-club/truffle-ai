import { useRef } from 'react'
import Link from 'next/link'
import AffinitySettings from '@/components/page/settings/AffinitySettings'
import DefaultFilters from '@/components/page/settings/DefaultFilters'
import DeleteAccount from '@/components/page/settings/DeleteAccount'
import EmailTemplate from '@/components/page/settings/EmailTemplate'
import Section from '@/components/page/settings/Section'
import SlackSettings from '@/components/page/settings/SendData/SlackSettings'
import Sidebar from '@/components/page/settings/Sidebar'
import Button from '@/components/pure/Button'
import CommandInterface from '@/components/side-effects/CommandInterface'
import withAuth from '@/components/side-effects/withAuth'

// @TODO use backend rather than local storage for Email template, slack webhook, affinity api key

const sections = {
  General: ['Default filters', 'Email template'],
  Account: ['Log out', 'Delete account'],
  Integrations: ['Notifications', 'Affinity']
}

const Separator = () => <div className='h-1 border-b border-gray-800' />

/**
 * Settings page
 */
const Settings = () => {
  const refs = useRef<Record<string, HTMLDivElement | null>>({})

  const scrollTo = (id: string) => {
    refs.current[id]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='flex'>
      <Sidebar sections={sections} onClick={scrollTo} />

      <CommandInterface />

      <div className='ml-64 w-full overflow-auto px-20 py-10 text-white'>
        <h2 className='mt-8 border-b border-gray-800 pb-4 text-xl font-medium'>General</h2>

        <Section title='General' subtitle='Default filters' refs={refs}>
          <DefaultFilters />
        </Section>

        <Separator />

        <Section title='General' subtitle='Email template' refs={refs}>
          <EmailTemplate />
        </Section>

        <h2 className='mt-8 border-b border-gray-800 pb-4 text-xl font-medium'>Account</h2>

        <Section title='Account' subtitle='Log out' refs={refs}>
          <Link href='/logout'>
            <Button variant='highlighted' className='text-white'>
              Log out
            </Button>
          </Link>
        </Section>

        <Separator />

        <Section title='Account' subtitle='Delete account' refs={refs}>
          <DeleteAccount />
        </Section>

        <h2 className='mt-8 border-b border-gray-800 pb-4 text-xl font-medium'>Integrations</h2>

        <Section title='Integrations' subtitle='Notifications' refs={refs}>
          <p className='mb-4 text-sm font-normal'>Slack notifications</p>
          <SlackSettings />
        </Section>

        <Separator />

        <Section title='Integrations' subtitle='Affinity' refs={refs}>
          <AffinitySettings />
        </Section>
      </div>
    </div>
  )
}

export default withAuth(Settings)
