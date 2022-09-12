import { Expand, ModelStatus } from './common'
import { UploadFile } from './file'
import { Hashtag } from './hashtag'
import { StrapiLocale } from './locale'
import { StrapiCore } from './strapi'
import { Tag } from './tag'
import { Translator } from './translator'
import { User } from './user'

export type PostBase = {
  title: string
  description: string
  content?: string | null
  status: ModelStatus
  capsStatus: ModelStatus
  locale: StrapiLocale
  twitterMedia?: string | null
}

export type PostRelation = {
  image?: UploadFile
  hashtag?: Hashtag
  tags?: Array<Tag>
  translator?: Translator | null
  creator?: User | null
  reviewer?: User | null
  localizations?: Array<Post>
}

export type PostRelationInput = {
  image: Blob
  hashtag: number
  tags?: number[]
  translator?: number
  creator?: number
  reviewer?: number
}

export type PostCreateInput = Expand<
  Omit<PostBase, 'status' | 'capsStatus'> &
    Pick<PostRelationInput, 'image' | 'hashtag' | 'tags'>
>

export type PostUpdateInput = Expand<
  Partial<Omit<PostBase, 'locale'>> &
    Partial<Omit<PostRelationInput, 'translator' | 'creator'>>
>

export type PostLocalizeInput = Pick<
  PostBase,
  'title' | 'description' | 'content' | 'status'
>

export type Post = Expand<StrapiCore & PostBase & PostRelation>
