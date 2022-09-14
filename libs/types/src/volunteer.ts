import { SetRequired } from 'type-fest'

import { Expand } from './common'
import { Job } from './job'
import { StrapiBase } from './strapi'
import { User } from './user'

export type VolunteerBase = {
  username: string
  email: string
  availableHours: number
  approved: boolean | null
  bio: string | null
  comment: string | null
  country: string | null
  facebook: string | null
  heardFrom: string | null
  inMailingList: boolean | null
  instagram: string | null
  isPublic: boolean | null
  linkedin: string | null
  name: string | null
  occupation: string | null
  phone: string | null
  twitter: string | null
}

type VolinteerRelation = {
  user?: User | null
  jobs?: Array<Job>
}

type VolinteerRelationInput = {
  user?: number
  jobs?: Array<number>
}

export type VolunteerCreateInput = Expand<
  SetRequired<
    Partial<Omit<VolunteerBase, 'approved'>>,
    'username' | 'name' | 'email' | 'phone' | 'availableHours'
  > &
    VolinteerRelationInput
>

export type VolunteerUpdateInput = Expand<
  Partial<VolunteerBase> & VolinteerRelationInput
>

export type Volunteer = Expand<StrapiBase & VolunteerBase & VolinteerRelation>
