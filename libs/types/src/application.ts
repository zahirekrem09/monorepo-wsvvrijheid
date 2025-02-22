import { Applicant } from './applicant'
import { ApprovalStatus, Expand } from './common'
import { Competition } from './competition'
import { UploadFile } from './file'
import { StrapiBase, StrapiEntityBase } from './strapi'
import { Tag } from './tag'
import { Vote } from './vote'

export type ApplicationBase = Omit<StrapiEntityBase, 'description'> & {
  approvalStatus: ApprovalStatus
}

type ApplicationRelation = {
  images?: UploadFile[]
  competition?: Competition
  applicant?: Applicant
  votes?: Array<Vote>
  tags?: Array<Tag>
  localizations?: Array<Application>
}

type ApplicationRelationInput = {
  images: Array<Blob>
  competition: number
  applicant: number
  votes?: Array<number>
  juryVotes?: Array<number>
  tags?: Array<number>
}

export type ApplicationCreateInput = Expand<
  { publishedAt?: string | null } & Omit<
    ApplicationBase,
    'translationStatus' | 'approvalStatus'
  > &
    Omit<ApplicationRelationInput, 'votes' | 'juryVotes'>
>

export type ApplicationUpdateInput = Expand<
  { publishedAt?: string | null } & Partial<
    Omit<ApplicationBase, 'locale'> & ApplicationRelationInput
  >
>

export type Application = StrapiBase & ApplicationBase & ApplicationRelation
