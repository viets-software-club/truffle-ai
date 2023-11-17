import { useRef } from 'react'
import Link from 'next/link'
import CommandInterface from '@/components/domain/commandinterface'
import AffinitySettings from '@/components/domain/settings/AffinitySettings'
import DefaultFilters from '@/components/domain/settings/DefaultFilters'
import DeleteAccount from '@/components/domain/settings/DeleteAccount'
import EmailTemplate from '@/components/domain/settings/EmailTemplate'
import Section from '@/components/domain/settings/Section'
import Sidebar from '@/components/domain/settings/Sidebar'
import SlackSettings from '@/components/domain/settings/SlackSettings'
import Button from '@/components/shared/Button'
import withAuth from '@/components/shared/hoc/withAuth'

// @TODO use backend rather than local storage for Email template, slack webhook, affinity api key

const sections = {
  General: ['Default filters', 'Email template'],
  Account: ['Log out', 'Delete account'],
  Integrations: ['Notifications', 'Affinity']
}

const Separator = () => <div className='h-1 border-b border-white/5' />

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
        <h2 className='mt-8 border-b border-white/5 pb-4 text-xl font-medium'>General</h2>

        <Section title='General' subtitle='Default filters' refs={refs}>
          <DefaultFilters />
        </Section>

        <Separator />

        <Section title='General' subtitle='Email template' refs={refs}>
          <EmailTemplate />
        </Section>

        <h2 className='mt-8 border-b border-white/5 pb-4 text-xl font-medium'>Account</h2>

        <Section title='Account' subtitle='Log out' refs={refs}>
          <p className='pb-6 text-sm font-normal text-white/75'>
            Log out of your account. You will be redirected to the login page.
          </p>
          <Link href='/logout'>
            <Button variant='highlighted' size='large' className='text-white'>
              Log out
            </Button>
          </Link>
        </Section>

        <Separator />

        <Section title='Account' subtitle='Delete account' refs={refs}>
          <DeleteAccount />
        </Section>

        <h2 className='mt-8 border-b border-white/5 pb-4 text-xl font-medium'>Integrations</h2>

        <Section title='Integrations' subtitle='Notifications' refs={refs}>
          <p className='mb-4 text-sm font-normal text-white/75'>
            Connect a Slack channel you want to share interesting projects with.
          </p>
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
