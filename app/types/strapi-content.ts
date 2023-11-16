export interface TextChild {
  type: 'text';
  text: string;
}

export interface Paragraph {
  type: 'paragraph';
  children: TextChild[];
}

export interface ContentItem {
  text: Paragraph[] | null;
}

export interface Heading {
  text: string;
  level: string;
}

export interface ComponentLayoutContainer {
  __typename: 'ComponentLayoutContainer';
  heading: Heading;
  content: ContentItem[];
}

export interface PageSEO {
  seoTitle: string;
  seoDescription: string;
}

export interface PageAttributes {
  slug: string;
  pageSEO: PageSEO;
  pageContent: ComponentLayoutContainer[];
}

export interface Page {
  attributes: PageAttributes;
}

export interface PagesData {
  data: Page[];
}

export interface PagesResponse {
  data: {
    pages: PagesData;
  };
}
