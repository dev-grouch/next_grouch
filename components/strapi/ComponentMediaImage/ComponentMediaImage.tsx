
import { ComponentMediaImage } from "@/app/generated/graphql-types";
import Image from "next/image";

const StrapiImage = ({
  title,
  description,
  image_file
}: ComponentMediaImage) => {
  const { url, width, height } = image_file.data?.attributes || {};

  return (
    <Image
      src={url || ''}
      alt={title || ''}
      width={width || 0}
      height={height || 0}
      aria-description={description || ''}
    />
  )
}

export default StrapiImage;
