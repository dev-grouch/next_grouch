import { Heading } from "@/app/types/strapi-content";
import H1 from "@/components/h1/h1";
import H2 from "@/components/h2/h2";

const ComponentTypographyHeading = ({
  text,
  level
}: Heading) => {
  return (
    <>
      {level === 'h1' && <H1>{text}</H1>}
      {level === 'h2' && <H2>{text}</H2>}
    </>
  );
};

export default ComponentTypographyHeading;
