import { PageSEO } from '@/app/types/strapi-content';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import ComponentLayoutContainer from '../ComponentLayoutContainer/ComponentLayoutContainer';

type BlocksProps = {
    pageContentBlocks: ComponentLayoutContainer[];
    pageSEO: PageSEO;
    slug: string;
}

const Blocks = ({ pageContentBlocks, pageSEO, slug }: BlocksProps) => {
  const blocks = pageContentBlocks as RootNode[];
    return (
        <>
            <BlocksRenderer
                    content={pageContentBlocks}
                />
        </>
    )
}
