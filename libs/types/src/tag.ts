import { Activity } from './activity'
import { Announcement } from './announcement'
import { Application } from './application'
import { Art } from './art'
import { Blog } from './blog'
import { Expand } from './common'
import { Post } from './post'
import { StrapiBase } from './strapi'

export type TagBase = {
  slug: string
  name_en: string
  name_nl: string
  name_tr: string
}

type TagRelation = {
  activities?: Array<Activity>
  announcements?: Array<Announcement>
  applications?: Array<Application>
  arts?: Array<Art>
  blogs?: Array<Blog>
  posts?: Array<Post>
}

type TagRelationInput = {
  activities?: Array<number>
  announcements?: Array<number>
  applications?: Array<number>
  arts?: Array<number>
  blogs?: Array<number>
  posts?: Array<number>
}

export type TagCreateInput = Expand<
  { publishedAt?: string | null } & TagBase & TagRelationInput
>

export type Tag = StrapiBase & TagBase & TagRelation
