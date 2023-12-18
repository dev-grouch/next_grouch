'use client'

import { ComponentMediaVideo } from "@/app/generated/graphql-types";
import Container from "@/components/container/container";
import { AdvancedVideo } from '@cloudinary/react';
import { CloudinaryVideo } from '@cloudinary/url-gen';

import styles from './video.module.scss';
import { useRef } from "react";

const StrapiVideo = ({
  title,
  description,
  video_file
}: ComponentMediaVideo) => {
  const { url, width, height, provider_metadata: { public_id } } = video_file.data?.attributes || {}
  const videoEl = useRef();
  const vid = new CloudinaryVideo(public_id, {cloudName: 'grouch'})


  return (
    <Container extraClass={styles.videoContainer}>
      <AdvancedVideo cldVid={vid} innerRef={videoEl} id={public_id} controls />
    </Container>
  )
}

export default StrapiVideo;
