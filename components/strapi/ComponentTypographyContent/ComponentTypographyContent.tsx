'use client'

import { ComponentTypographyContent } from "@/app/generated/graphql-types";
import P from "@/components/p/p";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const ComponentTypographyContainer = (props: ComponentTypographyContent) => {
  return (
    <BlocksRenderer
      content={props.text}
      blocks={{
        paragraph: ({ children })  => <P>{children}</P>
      }}
    />
  )
}

export default ComponentTypographyContainer;
