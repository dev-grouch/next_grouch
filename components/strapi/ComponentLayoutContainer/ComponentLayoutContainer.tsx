import Container from "@/components/container/container";
import { ComponentLayoutContainer } from "@/app/types/strapi-content";
import ComponentTypographyHeading from "../ComponentTypographyHeading/ComponentTypographyHeading";
import ComponentTypographyContainer from "../ComponentTypographyContent/ComponentTypographyContent";

const ComponentLayoutContainer = ({
  heading,
  content,
}: ComponentLayoutContainer) => {
  return (
    <Container>
      <ComponentTypographyHeading {...heading} />

      <ComponentTypographyContainer contentItems={content} />
    </Container>
  );
};

export default ComponentLayoutContainer;
