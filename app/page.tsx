import styles from './page.module.scss'
import { getPage } from './content-queries'
import { PageEntity} from './generated/graphql-types'
import renderComponent from './utils/render_component'

export default async function Page() {
  const data: PageEntity = await getPage('home')
  const pageContent = data?.attributes?.pageContent

  return (
    <main className={styles.main}>
      {pageContent && pageContent.map(renderComponent)}
    </main>
  )
}
