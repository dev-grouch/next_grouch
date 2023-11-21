import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { PageEntity } from './generated/graphql-types'

const cacheBust = new Date().getMinutes()

const client = new ApolloClient({
  uri: `${process.env.STRAPI_GRAPHQL_ENDPOINT}?cacheBust=${cacheBust}`,
  cache: new InMemoryCache(),
})

export async function getPage(slug: string): Promise<PageEntity> {
  console.log('cacheBust', cacheBust)
  const { data } = await client.query({
    query: gql`
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
