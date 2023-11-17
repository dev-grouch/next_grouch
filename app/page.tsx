import styles from './page.module.scss'
import { getPage } from './content-queries'
import ComponentLayoutContainer from '@/components/strapi/ComponentLayoutContainer/ComponentLayoutContainer'
import { PageEntity, PagePageContentDynamicZone } from './generated/graphql-types'
import ComponentHeroHeroOption from '@/components/strapi/ComponentHeroHeroOption/ComponentHeroHeroOption'
import ComponentTypographyContent from '@/components/strapi/ComponentTypographyContent/ComponentTypographyContent'
import ComponentTypographyHeading from '@/components/strapi/ComponentTypographyHeading/ComponentTypographyHeading'

export const COMPONENT_MAP = {
  'ComponentLayoutContainer': ComponentLayoutContainer,
  'ComponentTypographyContent': ComponentTypographyContent,
  'ComponentTypographyHeading': ComponentTypographyHeading,
  'ComponentHeroHeroOption': ComponentHeroHeroOption,
  'Error': () => <div>ERROR</div>
}

const renderComponent = (componentData :PagePageContentDynamicZone | null ) => {
  const typeName = componentData?.__typename

  if (!typeName)
    return null

  const Component = COMPONENT_MAP[typeName];
  if (!Component) {
    return null; // or a default/fallback component
  }

  switch (componentData.__typename) {
    case 'ComponentHeroHeroOption':
      // Similar handling for hero options
      return (
        <Component key={componentData.id} heroOptions={componentData.heroOptions} />
      );
    case 'ComponentLayoutContainer':
      return (
        <Component
          key={componentData.id}
          heading={componentData.heading}
          content={componentData.content}
          id={componentData.id}
        />
      );
    case 'ComponentTypographyHeading':
      return (
        <Component key={componentData.id} text={componentData.text} level={componentData.level} />
      );
    // ... other cases
    default:
      return <div>No Component...</div>;
  }
};


export default async function Home() {
  const data: PageEntity = await getPage('home')
  const pageContent = data?.attributes?.pageContent

  return (
    <main className={styles.main}>
      {pageContent && pageContent.map(renderComponent)}
    </main>
  )
}
