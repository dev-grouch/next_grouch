import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { PageEntity } from './generated/graphql-types'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql?v=1',
  cache: new InMemoryCache(),
})

export async function getPage(slug: string): Promise<PageEntity> {
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
