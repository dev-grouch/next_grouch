import styles from './page.module.scss'
import { getPage } from '../content-queries'
import { PageEntity } from '../generated/graphql-types'
import renderComponent from '@/app/utils/render_component'

export default async function Page({ params }: { params: { page: string } }) {
  const slug = params?.page || 'home'
  console.log('[page] slug', slug)
  const data: PageEntity = await getPage(slug)
  const pageContent = data?.attributes?.pageContent

  return (
    <main className={styles.main}>
      {pageContent && pageContent.map(renderComponent)}
    </main>
  )
}
