import ComponentHeroHeroOption from "@/components/strapi/ComponentHeroHeroOption/ComponentHeroHeroOption";
import ComponentLayoutContactForm from "@/components/strapi/ComponentLayoutContactForm/ComponentLayoutContactForm";
import ComponentLayoutContainer from "@/components/strapi/ComponentLayoutContainer/ComponentLayoutContainer";
import ComponentTypographyContent from "@/components/strapi/ComponentTypographyContent/ComponentTypographyContent";
import ComponentTypographyHeading from "@/components/strapi/ComponentTypographyHeading/ComponentTypographyHeading";
import { PagePageContentDynamicZone } from "../generated/graphql-types";
import StrapiImage from "@/components/strapi/ComponentMediaImage/ComponentMediaImage";

type ComponentTypeMap = {
  [key: string]: React.ComponentType<any>
};

const COMPONENT_MAP: ComponentTypeMap = {
  'ComponentMediaImage': StrapiImage,
  'ComponentLayoutContainer': ComponentLayoutContainer,
  'ComponentTypographyContent': ComponentTypographyContent,
  'ComponentTypographyHeading': ComponentTypographyHeading,
  'ComponentHeroHeroOption': ComponentHeroHeroOption,
  'ComponentLayoutContactForm': ComponentLayoutContactForm,
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
      return (
        <Component key={componentData.id} {...componentData} />
      );
    case 'ComponentLayoutContainer':
      return (
        <Component
          key={componentData.id}
          heading={componentData.heading}
          content={componentData.content}
          call_to_action={componentData.call_to_action}
          htmlId={componentData.htmlId}
        />
      );
    case 'ComponentLayoutContactForm':
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
    case 'ComponentMediaImage':
      return (
        <Component
          key={componentData.id}
          title={componentData.title}
          description={componentData.description}
          image_file={componentData.image_file}
        />
      );
    default:
      return <div>No Component...</div>;
  }
}

export default renderComponent
