import { Category } from './category'
import { Expand } from './common'
import { UploadFile } from './file'
import { StrapiBase, StrapiEntityBase } from './strapi'
import { Tag } from './tag'

type AnnouncementBase = StrapiEntityBase & {
  date: string
}

type AnnouncementRelation = {
  categories?: Array<Category>
  tags?: Array<Tag>
  image?: UploadFile
  localizations?: Array<Announcement>
}

type AnnouncementRelationInput = {
  categories?: Array<number>
  tags?: Array<number>
  image: Blob
}

export type AnnouncementCreateInput = Expand<
  { publishedAt?: string | null } & Omit<
    AnnouncementBase,
    'translationStatus'
  > &
    AnnouncementRelationInput
>
export type AnnouncementUpdateInput = Expand<
  { publishedAt?: string | null } & Partial<
    Omit<AnnouncementBase, 'locale'> & AnnouncementRelationInput
  >
>
export type AnnouncementLocalizeInput = Pick<
  AnnouncementBase,
  'title' | 'description' | 'content'
>

export type Announcement = StrapiBase & AnnouncementBase & AnnouncementRelation
