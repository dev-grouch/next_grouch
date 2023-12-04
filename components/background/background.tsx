'use client'

import Image from 'next/image'
import styles from './background.module.scss'
import ImgHands from '@media/hands.png'
import { memo } from 'react'

export const GrouchLandscape = () => (
  <div className={styles['landscape']}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 1065 1163"
        className={styles['grouch-gradient-1']}>
        <path d="M1065.3.1c-158.6 0-347.9 96.5-475 111.6C225 155.1.3 165.3.3 333.1v830h1065V.1z" />
      </svg>
  </div>
)

export const GrouchShapeOne = () => (
  <div className={styles['shape-one']}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 684.8 1542"
        className={styles['grouch-gradient-2']}>
        <path d="M684.8 0C472.6 275.9 289.9 1360 501.3 1542H0C201.6 1307.2 466.6 352.7 351.9 0h332.9z" />
      </svg>
  </div>
)

export const GrouchShapeTwo = () => (
  <div className={styles['shape-two']}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 425 1542"
      className={styles['grouch-gradient-3']}>
      <path d="M425 1508v34H0C146 1360.5 455 29.6 311.1 0H425v251.6C345.5 676.3 272.2 1491 425 1508z" />
    </svg>
  </div>
)

export const Hands = () => (
  <div className={styles['hands']}>
    <Image src={ImgHands} alt="Hands" className={styles['hero-image']} />
  </div>
)

export const GrouchGradients = () => (
  <>
    <svg aria-hidden="true" focusable="false">
      <linearGradient
        id="grouch-gradient--main-one"
        gradientTransform="rotate(-25)">
        <stop offset="18%" stopColor="var(--grouch-gradient--main-1)" />
        <stop offset="78%" stopColor="var(--grouch-gradient--main-2)" />
        <stop offset="100%" stopColor="var(--grouch-gradient--main-3)" />
      </linearGradient>

      <linearGradient
        id="grouch-gradient--main-one--a"
        gradientTransform="rotate(-25)">
        <stop offset="18%" stopColor="var(--grouch-gradient--main--a-1)" />
        <stop offset="78%" stopColor="var(--grouch-gradient--main--a-2)" />
        <stop offset="100%" stopColor="var(--grouch-gradient--main--a-3)" />
      </linearGradient>

      <linearGradient
        id="grouch-gradient--main-one--b"
        gradientTransform="rotate(-25)">
        <stop offset="0%" stopColor="var(--grouch-gradient--main--b-1)" />
        <stop offset="100%" stopColor="var(--grouch-gradient--main--b-2)" />
      </linearGradient>

      <linearGradient id="grouch-gradient--shape-one">
        <stop offset="0%" stopColor="var(--color-shape-one-stop-1)" />
        <stop offset="100%" stopColor="var(--color-shape-one-stop-2)" />
      </linearGradient>

      <linearGradient id="grouch-gradient--shape-two">
        <stop offset="0%" stopColor="var(--color-shape-two-stop-1)" />
        <stop offset="100%" stopColor="var(--color-shape-two-stop-2)" />
      </linearGradient>
    </svg>
  </>
)

const Background = memo(() => {
  return (
    <div className={styles['background']}>
      <Hands />
      <GrouchLandscape />
      <GrouchShapeOne />
      <GrouchShapeTwo />
      <GrouchGradients />
    </div>
)
})

Background.displayName = 'Background'

export default Background
