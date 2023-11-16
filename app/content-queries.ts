import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { PagesResponse } from './types/strapi-content'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
})

export async function getPage(slug: string) {
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
  }) as PagesResponse

  return {
    pageContentBlocks: data.pages.data[0].attributes.pageContent,
    pageSEO: data.pages.data[0].attributes.pageSEO,
    slug: data.pages.data[0].attributes.slug,
  }
}
