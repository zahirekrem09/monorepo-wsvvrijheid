import {
  Collection,
  Localize,
  StrapiCollectionResponse,
} from '@wsvvrijheid/types'

export const COLLECTION_MOCKS: Localize<
  StrapiCollectionResponse<Collection[]>
> = {
  tr: {
    data: [
      {
        id: 5,
        createdAt: '2022-06-17T09:20:29.328Z',
        updatedAt: '2022-09-13T21:28:44.298Z',
        publishedAt: '2022-06-17T09:20:36.532Z',
        locale: 'tr',
        title: 'Korona Döneminde Yalnızlık',
        slug: 'korona-doneminde-yalnizlik',
        description: 'Açıklama',
        translationStatus: 'original',
        image: {
          id: 291,
          name: 'Nederland',
          alternativeText: null,
          caption: null,
          width: 1440,
          height: 1920,
          formats: {
            large: {
              ext: '',
              url: '/uploads/large_Nederland_be7b17286c',
              hash: 'large_Nederland_be7b17286c',
              mime: 'image/jpeg',
              name: 'large_Nederland',
              path: null,
              size: 72.16,
              width: 750,
              height: 1000,
            },
            small: {
              ext: '',
              url: '/uploads/small_Nederland_be7b17286c',
              hash: 'small_Nederland_be7b17286c',
              mime: 'image/jpeg',
              name: 'small_Nederland',
              path: null,
              size: 23.82,
              width: 375,
              height: 500,
            },
            medium: {
              ext: '',
              url: '/uploads/medium_Nederland_be7b17286c',
              hash: 'medium_Nederland_be7b17286c',
              mime: 'image/jpeg',
              name: 'medium_Nederland',
              path: null,
              size: 46.07,
              width: 563,
              height: 750,
            },
            thumbnail: {
              ext: '',
              url: '/uploads/thumbnail_Nederland_be7b17286c',
              hash: 'thumbnail_Nederland_be7b17286c',
              mime: 'image/jpeg',
              name: 'thumbnail_Nederland',
              path: null,
              size: 3.77,
              width: 117,
              height: 156,
            },
          },
          hash: 'Nederland_be7b17286c',
          ext: '',
          mime: 'image/jpeg',
          size: 138.8,
          url: '/uploads/Nederland_be7b17286c',
          previewUrl: null,
          provider: 'local',
          provider_metadata: null,
          createdAt: '2022-07-30T16:02:26.476Z',
          updatedAt: '2022-07-30T16:02:26.476Z',
        },
        arts: [
          {
            id: 2,
            title: 'Anneler',
            slug: 'anneler',
            description: 'Anneler günü',
            content: 'Anneler günü konulu resim çalışması',
            createdAt: '2022-03-22T10:33:44.349Z',
            updatedAt: '2022-09-13T21:56:59.220Z',
            publishedAt: '2022-03-22T10:34:40.773Z',
            locale: 'tr',
            likes: 7,
            views: 6,
            translationStatus: 'original',
            approvalStatus: 'approved',
          },
          {
            id: 6,
            title: 'Korona döneminde yalnızlık',
            slug: 'korona',
            description:
              'Korona döneminde, bakım merkezinde kalan anneye ve ziyaretine izin verildiği sırada onunla zar zor iletişim kurabilen eşim.',
            content:
              'Korona döneminde, bakım merkezinde kalan anneye ve ziyaretine izin verildiği sırada onunla zar zor iletişim kurabilen eşim. \nÜzücü, neler olup bittiğini hiç anlamayan annenin ve pencereye hafifçe vurarak onunla biraz sohbet etmeye çalışan eşimin boş bakışları, ama boşuna... her iki taraf için de dokunmak çok zord ve yorucuydu. ',
            createdAt: '2022-03-25T19:23:47.237Z',
            updatedAt: '2022-09-13T21:18:12.797Z',
            publishedAt: '2022-03-25T19:23:50.818Z',
            locale: 'tr',
            likes: 1,
            views: 1,
            translationStatus: 'original',
            approvalStatus: 'approved',
          },
          {
            id: 8,
            title: 'Yalnızlık',
            slug: 'yalnizlik',
            description:
              'Karısı ölen bir koca yalnız, annesi ölen bir çocuk yalnız, sevdiklerimiz gidiyor kalıyoruz yalnız. ',
            content:
              'Karısı ölen bir koca yalnız, annesi ölen bir çocuk yalnız, sevdiklerimiz gidiyor kalıyoruz yalnız. ',
            createdAt: '2022-03-25T19:28:03.911Z',
            updatedAt: '2022-09-13T21:19:30.569Z',
            publishedAt: '2022-03-25T19:28:05.724Z',
            locale: 'tr',
            likes: 1,
            views: 1,
            translationStatus: 'original',
            approvalStatus: 'approved',
          },
        ],
        localizations: [
          {
            id: 3,
            createdAt: '2022-06-17T09:19:06.765Z',
            updatedAt: '2022-09-13T21:28:44.297Z',
            publishedAt: '2022-06-17T09:19:15.023Z',
            locale: 'en',
            title: 'Loneliness in the Corona Period',
            slug: 'loneliness-in-the-corona-period',
            description: 'Description',
            translationStatus: 'pending',
          },
          {
            id: 4,
            createdAt: '2022-06-17T09:19:43.529Z',
            updatedAt: '2022-09-13T21:28:44.281Z',
            publishedAt: '2022-06-17T09:19:50.356Z',
            locale: 'nl',
            title: 'Eenzaamheid in de Corona-period',
            slug: 'eenzaamheid-in-de-corona-period',
            description: 'Uitleg',
            translationStatus: 'pending',
          },
        ],
      },
    ],
    meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } },
  },
  nl: {
    data: [
      {
        id: 4,
        createdAt: '2022-06-17T09:19:43.529Z',
        updatedAt: '2022-09-13T21:28:44.281Z',
        publishedAt: '2022-06-17T09:19:50.356Z',
        locale: 'nl',
        title: 'Eenzaamheid in de Corona-period',
        slug: 'eenzaamheid-in-de-corona-period',
        description: 'Uitleg',
        translationStatus: 'pending',
        image: {
          id: 291,
          name: 'Nederland',
          alternativeText: null,
          caption: null,
          width: 1440,
          height: 1920,
          formats: {
            large: {
              ext: '',
              url: '/uploads/large_Nederland_be7b17286c',
              hash: 'large_Nederland_be7b17286c',
              mime: 'image/jpeg',
              name: 'large_Nederland',
              path: null,
              size: 72.16,
              width: 750,
              height: 1000,
            },
            small: {
              ext: '',
              url: '/uploads/small_Nederland_be7b17286c',
              hash: 'small_Nederland_be7b17286c',
              mime: 'image/jpeg',
              name: 'small_Nederland',
              path: null,
              size: 23.82,
              width: 375,
              height: 500,
            },
            medium: {
              ext: '',
              url: '/uploads/medium_Nederland_be7b17286c',
              hash: 'medium_Nederland_be7b17286c',
              mime: 'image/jpeg',
              name: 'medium_Nederland',
              path: null,
              size: 46.07,
              width: 563,
              height: 750,
            },
            thumbnail: {
              ext: '',
              url: '/uploads/thumbnail_Nederland_be7b17286c',
              hash: 'thumbnail_Nederland_be7b17286c',
              mime: 'image/jpeg',
              name: 'thumbnail_Nederland',
              path: null,
              size: 3.77,
              width: 117,
              height: 156,
            },
          },
          hash: 'Nederland_be7b17286c',
          ext: '',
          mime: 'image/jpeg',
          size: 138.8,
          url: '/uploads/Nederland_be7b17286c',
          previewUrl: null,
          provider: 'local',
          provider_metadata: null,
          createdAt: '2022-07-30T16:02:26.476Z',
          updatedAt: '2022-07-30T16:02:26.476Z',
        },
        arts: [
          {
            id: 3,
            title: 'Moeder',
            slug: 'moeder',
            description: 'Moederdag',
            content: 'Schilderwerk op moederdag',
            createdAt: '2022-03-22T10:34:26.664Z',
            updatedAt: '2022-09-13T21:56:59.174Z',
            publishedAt: '2022-03-22T10:34:31.537Z',
            locale: 'nl',
            likes: 7,
            views: 6,
            translationStatus: 'approved',
            approvalStatus: 'approved',
          },
          {
            id: 5,
            title: 'Eenzaamheid tijdens corona',
            slug: 'eenzaa',
            description:
              'Mijn vrouw die tijdens de lockdown een bliksembezoek mag brengen aan moeder',
            content:
              "Mijn vrouw die tijdens de lockdown een bliksembezoek mag brengen aan moeder, die in het zorgcentrum verblijft en ternauwernood contact kan krijgen met haar. Hartverscheurend is de lege blik van moeder die het helemaal niet begrijpt wat er gaande is en mijn vrouw die via zacht tikken op het raam toch enigszins probeert om nog even 'n praatje te kunnen maken met haar, maar tevergeefs ... het contact liep heel stroef en was voor beide partijen uitputten.",
            createdAt: '2022-03-25T19:21:11.815Z',
            updatedAt: '2022-09-13T21:18:12.828Z',
            publishedAt: '2022-03-25T19:22:15.419Z',
            locale: 'nl',
            likes: 1,
            views: 1,
            translationStatus: 'pending',
            approvalStatus: 'approved',
          },
          {
            id: 9,
            title: 'eenzaamheid',
            slug: 'alone',
            description: 'Alleen is een man wiens vrouw stierf',
            content:
              'Alleen is een man wiens vrouw stierf, aleeen is een kind wiens moeder stierf, onze dierbaren gaan weg, we blijven alleen ',
            createdAt: '2022-03-25T19:29:31.617Z',
            updatedAt: '2022-09-13T21:19:30.588Z',
            publishedAt: '2022-03-25T19:29:35.091Z',
            locale: 'nl',
            likes: 1,
            views: 1,
            translationStatus: 'approved',
            approvalStatus: 'approved',
          },
        ],
        localizations: [
          {
            id: 3,
            createdAt: '2022-06-17T09:19:06.765Z',
            updatedAt: '2022-09-13T21:28:44.297Z',
            publishedAt: '2022-06-17T09:19:15.023Z',
            locale: 'en',
            title: 'Loneliness in the Corona Period',
            slug: 'loneliness-in-the-corona-period',
            description: 'Description',
            translationStatus: 'pending',
          },
          {
            id: 5,
            createdAt: '2022-06-17T09:20:29.328Z',
            updatedAt: '2022-09-13T21:28:44.298Z',
            publishedAt: '2022-06-17T09:20:36.532Z',
            locale: 'tr',
            title: 'Korona Döneminde Yalnızlık',
            slug: 'korona-doneminde-yalnizlik',
            description: 'Açıklama',
            translationStatus: 'original',
          },
        ],
      },
    ],
    meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } },
  },
  en: {
    data: [
      {
        id: 3,
        createdAt: '2022-06-17T09:19:06.765Z',
        updatedAt: '2022-09-13T21:28:44.297Z',
        publishedAt: '2022-06-17T09:19:15.023Z',
        locale: 'en',
        title: 'Loneliness in the Corona Period',
        slug: 'loneliness-in-the-corona-period',
        description: 'Description',
        translationStatus: 'pending',
        image: {
          id: 291,
          name: 'Nederland',
          alternativeText: null,
          caption: null,
          width: 1440,
          height: 1920,
          formats: {
            large: {
              ext: '',
              url: '/uploads/large_Nederland_be7b17286c',
              hash: 'large_Nederland_be7b17286c',
              mime: 'image/jpeg',
              name: 'large_Nederland',
              path: null,
              size: 72.16,
              width: 750,
              height: 1000,
            },
            small: {
              ext: '',
              url: '/uploads/small_Nederland_be7b17286c',
              hash: 'small_Nederland_be7b17286c',
              mime: 'image/jpeg',
              name: 'small_Nederland',
              path: null,
              size: 23.82,
              width: 375,
              height: 500,
            },
            medium: {
              ext: '',
              url: '/uploads/medium_Nederland_be7b17286c',
              hash: 'medium_Nederland_be7b17286c',
              mime: 'image/jpeg',
              name: 'medium_Nederland',
              path: null,
              size: 46.07,
              width: 563,
              height: 750,
            },
            thumbnail: {
              ext: '',
              url: '/uploads/thumbnail_Nederland_be7b17286c',
              hash: 'thumbnail_Nederland_be7b17286c',
              mime: 'image/jpeg',
              name: 'thumbnail_Nederland',
              path: null,
              size: 3.77,
              width: 117,
              height: 156,
            },
          },
          hash: 'Nederland_be7b17286c',
          ext: '',
          mime: 'image/jpeg',
          size: 138.8,
          url: '/uploads/Nederland_be7b17286c',
          previewUrl: null,
          provider: 'local',
          provider_metadata: null,
          createdAt: '2022-07-30T16:02:26.476Z',
          updatedAt: '2022-07-30T16:02:26.476Z',
        },
        arts: [
          {
            id: 1,
            title: 'Mother',
            slug: 'mother',
            description: "Mother's day",
            content: "Painting work on mother's day",
            createdAt: '2022-03-22T10:33:06.622Z',
            updatedAt: '2022-09-13T21:56:59.218Z',
            publishedAt: '2022-03-22T10:34:34.541Z',
            locale: 'en',
            likes: 7,
            views: 6,
            translationStatus: 'approved',
            approvalStatus: 'approved',
          },
          {
            id: 52,
            title: 'Samenvvv',
            slug: 'samenvvv',
            description: 'Samen voor Vrijheid en Verbinding',
            content: 'Samen inhoud',
            createdAt: '2022-05-28T18:23:37.518Z',
            updatedAt: '2022-09-13T20:17:50.988Z',
            publishedAt: '2022-05-28T18:23:37.431Z',
            locale: 'en',
            likes: 5,
            views: 0,
            translationStatus: 'approved',
            approvalStatus: 'approved',
          },
        ],
        localizations: [
          {
            id: 4,
            createdAt: '2022-06-17T09:19:43.529Z',
            updatedAt: '2022-09-13T21:28:44.281Z',
            publishedAt: '2022-06-17T09:19:50.356Z',
            locale: 'nl',
            title: 'Eenzaamheid in de Corona-period',
            slug: 'eenzaamheid-in-de-corona-period',
            description: 'Uitleg',
            translationStatus: 'pending',
          },
          {
            id: 5,
            createdAt: '2022-06-17T09:20:29.328Z',
            updatedAt: '2022-09-13T21:28:44.298Z',
            publishedAt: '2022-06-17T09:20:36.532Z',
            locale: 'tr',
            title: 'Korona Döneminde Yalnızlık',
            slug: 'korona-doneminde-yalnizlik',
            description: 'Açıklama',
            translationStatus: 'original',
          },
        ],
      },
    ],
    meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } },
  },
}
