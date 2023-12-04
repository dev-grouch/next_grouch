import Container from "@/components/container/container";
import { ComponentLayoutContainer } from "@/app/generated/graphql-types";
import ComponentTypographyHeading from "../ComponentTypographyHeading/ComponentTypographyHeading";
import ComponentTypographyContainer from "../ComponentTypographyContent/ComponentTypographyContent";
import ComponentTypographyAction_link from "../ComponentTypographyAction_link/ComponentTypographyAction_link";

const ComponentLayoutContainer = ({
  call_to_action,
  content,
  heading,
  htmlId,
}: ComponentLayoutContainer) => {
  return (
    <Container id={htmlId}>
      {heading && <ComponentTypographyHeading {...heading} />}

      {content && <ComponentTypographyContainer {...content} />}

      {call_to_action && (
          <ComponentTypographyAction_link {...call_to_action} />
      )}
    </Container>
  );
};

export default ComponentLayoutContainer;
