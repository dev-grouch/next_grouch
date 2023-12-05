'use client'

import { ContentItem } from "@/app/types/strapi-content";
import P from "@/components/p/p";

type ComponentTypographyContainerProps = {
  contentItems: ContentItem[];
};


const ComponentTypographyContainer = ({
  contentItems,
}: ComponentTypographyContainerProps) => {
  console.log('contentItems ✨', contentItems)
  return (
    <>
      {contentItems.flatMap((item, itemIndex) =>
        item.text ? item.text.flatMap((text, textIndex) =>
          text.children.map((child, childIndex) => (
            <P key={`${itemIndex}-${textIndex}-${childIndex}`}>
              {child.text}
            </P>
          ))
        ) : []
      )}
    </>
  )
}

export default ComponentTypographyContainer;
