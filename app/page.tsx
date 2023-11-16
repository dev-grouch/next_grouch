import styles from './page.module.scss'
import { getPage } from './content-queries'
import ComponentLayoutContainer from '@/components/strapi/ComponentLayoutContainer/ComponentLayoutContainer'

export default async function Home() {
  const { pageContentBlocks, pageSEO, slug } = await getPage('home')


  // pageContentBlocks.forEach((block) => {
  //   console.log('block.Heading', block.Heading)

  //   block.Content.forEach((content) => {
  //     console.log('content.Text', content.Text)

  //     content.Text.forEach((text) => {
  //       console.log('text', text)

  //       text.children.forEach((child) => {
  //         console.log('child', child.text)
  //       })
  //     })
  //   })
  // })

  return (
    <main className={styles.main}>
      {pageContentBlocks.map((item, index) => {
        if (item.__typename === "ComponentLayoutContainer") {
          return <ComponentLayoutContainer key={index} {...item} />;
        }
      })}
    </main>
  )
}
