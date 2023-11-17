import React, { useMemo } from 'react'
import cx from 'classnames'
import styles from './container.module.scss'

type Colors = 'white' | 'black' | 'blue' | 'green' | 'red' | 'yellow' | 'purple'

interface ContainerProps {
  color?: Colors
  extraClass?: string | string[]
  full?: boolean
  id?: string
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
  color,
  extraClass,
  full,
  id,
  children,
}) => {
  const classes = useMemo(() => {
    let computedClasses = cx(styles.container, {
      [styles.container__full]: full,
    })

    if (color) {
      computedClasses += ` ${styles[`container__${color}`]}`
    }

    if (extraClass) {
      const extraClasses = Array.isArray(extraClass)
        ? extraClass.join(' ')
        : extraClass
      computedClasses += ` ${extraClasses}`
    }

    return computedClasses
  }, [color, extraClass, full])

  const containerId = useMemo(() => {
    return id ? id : undefined
  }, [id])

  return (
    <section id={containerId} className={classes}>
      {children}
    </section>
  )
}

export default Container
