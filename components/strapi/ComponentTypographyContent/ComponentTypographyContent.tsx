'use client'

import { ComponentTypographyContent } from "@/app/generated/graphql-types";
import P from "@/components/p/p";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

const ComponentTypographyContainer = (props: ComponentTypographyContent) => {
  return (
    <BlocksRenderer
      content={props.text}
      blocks={{
        paragraph: ({ children })  => <P>{children}</P>,
        link: ({ children, url }) => <Link href={url}>{children}</Link>
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <em>{children}</em>,
      }}
    />
  )
}

export default ComponentTypographyContainer;
