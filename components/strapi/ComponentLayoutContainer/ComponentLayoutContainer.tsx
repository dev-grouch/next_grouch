import Container from "@/components/container/container";
import { ComponentLayoutContainer } from "@/app/generated/graphql-types";
import ComponentTypographyHeading from "../ComponentTypographyHeading/ComponentTypographyHeading";
import ComponentTypographyContainer from "../ComponentTypographyContent/ComponentTypographyContent";

const ComponentLayoutContainer = ({
  heading,
  content,
}: ComponentLayoutContainer) => {
  return (
    <Container>
      {heading && <ComponentTypographyHeading {...heading} />}

      {content && <ComponentTypographyContainer {...content} />}
    </Container>
  );
};

export default ComponentLayoutContainer;
