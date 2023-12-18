
import { ComponentMediaImage } from "@/app/generated/graphql-types";
import Container from "@/components/container/container";
import Image from "next/image";

import styles from './image.module.scss';

const StrapiImage = ({
  title,
  description,
  image_file
}: ComponentMediaImage) => {
  const { url, width, height } = image_file.data?.attributes || {};

  return (
    <Container extraClass={styles.imageContainer}>
      <Image
        src={url || ''}
        alt={title || ''}
        width={width || 0}
        height={height || 0}
        aria-description={description || ''}
      />
    </Container>
  )
}

export default StrapiImage;
