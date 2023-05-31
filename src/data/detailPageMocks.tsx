import { ComponentProps } from 'react'
import Sidebar from '@/components/pure/Sidebar'

export const companyListMock = [
  { id: '0', name: 'Total Funding', value: '$1.2M', growth: '+$0.2M' },
  { id: '1', name: 'Contributions / Employee', value: '1.3', growth: '+0.2' }
]

export const founderListMock = [
  {
    id: '0',
    name: 'John Doe',
    linkedin: 'https://linkedin.com',
    mail: 'john.doe@gmail.com',
    company: 'Google'
  },
  {
    id: '1',
    name: 'Jane Doe',
    linkedin: 'https://linkedin.com',
    mail: 'jane.doe@gmail.com',
    company: 'Meta'
  }
]

export const socialMediaListMock: ({ id: ID } & ComponentProps<
  typeof Sidebar.Box.SocialMediaItem
>)[] = [
  {
    id: '0',
    icon: 'discord',
    name: 'Discord ',
    text: 'followers',
    value: '101k',
    growth: '+2k',
    onClick: () => {
      window.open('https://discord.com', '_blank')
    }
  },
  {
    id: '1',
    icon: 'twitter',
    name: 'Twitter ',
    text: 'followers',
    value: '200k',
    growth: '+1k',
    onClick: () => {
      window.open('https://twitter.com', '_blank')
    }
  }
]

export const tweetListMock = [
  {
    id: '0',
    content:
      'Lorem1 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
  },
  {
    id: '1',
    content:
      'Lorem2 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
  }
]

export const tagsMock = [
  { id: '1', name: 'tag1' },
  { id: '2', name: 'tag2' },
  { id: '3', name: 'tag3' }
]

export const hackerNewsListMock = [
  {
    id: '0',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore  -> Source: ELI5'
  },
  {
    id: '1',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore  -> Source: Hackernews'
  }
]
