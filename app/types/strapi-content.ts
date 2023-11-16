export interface PageSEO {
  seoTitle: string;
  seoDescription: string;
}

export interface ContentText {
  type: string;
  text: string;
}

export interface ContentItem {
  Text: Array<{
    type: string;
    children: ContentText[];
  }>;
}

export interface HeadingItem {
  Text: string;
}

export interface ComponentLayoutContainer {
  __typename: string;
  Heading: HeadingItem[];
  Content: ContentItem[];
}

export interface PageAttributes {
  slug: string;
  PageSEO: PageSEO;
  PageContent: ComponentLayoutContainer[];
}

export interface Page {
  attributes: PageAttributes;
}

export interface PagesResponse {
  data: {
    pages: {
      data: Page[];
    };
  };
}
