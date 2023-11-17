
import { PageEntity } from '@/app/generated/graphql-types'
import ComponentLayoutContainer from '@/components/strapi/ComponentLayoutContainer/ComponentLayoutContainer'
import ComponentHeroHeroOption from '../ComponentHeroHeroOption/ComponentHeroHeroOption'

const Page = (pageData: PageEntity) =>  {
  const pageContent = pageData?.attributes?.pageContent

  return (
    <></>
  )
}

export default Page
