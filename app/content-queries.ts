import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { PageEntity } from './generated/graphql-types'

const cacheBust = new Date().getMinutes()

const client = new ApolloClient({
  uri: `${process.env.STRAPI_GRAPHQL_ENDPOINT}?cacheBust=${cacheBust}`,
  cache: new InMemoryCache(),
})

export async function getPage(slug: string): Promise<PageEntity> {
  const { data } = await client.query({
    query: gql`
      fragment mediaAttributes on UploadFileEntityResponse {
        data {
          attributes {
            url
            width
            height
          }
        }
      }

      fragment imageAttributes on ComponentMediaImage {
        title
        description
        id
        image_file {
          ...mediaAttributes
        }
      }

      fragment videoAttributes on ComponentMediaVideo {
        title
        description
        id
        video_file {
          ...mediaAttributes
        }
      }

      query GetPage($slug: String!) {
        pages(filters: {slug: {eq: $slug}}) {
          data {
            attributes {
              pageContent {
                __typename
                ... on ComponentLayoutContainer {
                  heading {
                    text
                    level
                  }
                  content {
                    text
                  }
                  call_to_action {
                    action_text
                    action_url
                  }
                  htmlId
                }
                ... on ComponentHeroHeroOption {
                  heroOptions {
                    lineOne
                    lineTwo
                    moreTarget
                  }
                }
                ... on ComponentLayoutContactForm {
                  heading {
                    text
                    level
                  }
                  content {
                    text
                  }
                }
                ... on ComponentMediaImage {
                  ...imageAttributes
                }
                ... on ComponentMediaVideo {
                  ...videoAttributes
                }
                ... on ComponentMediaSlider {
                  slider_videos {
                    ...videoAttributes
                  }
                  slider_images {
                    ...imageAttributes
                  }
                }
              }
              slug
              pageSEO {
                seoTitle
                seoDescription
              }
            }
          }
        }
      }
    `,
    variables: { slug }
  })

  return data.pages.data[0]
}
