import cx from 'classnames'

import Container from "@/components/container/container";
import { ComponentHeroHeroOption } from '@/app/generated/graphql-types'

import styles from './ComponentHeroHeroOption.module.scss'


const ComponentHeroHeroOption = (heroData: ComponentHeroHeroOption) =>  {
  return (
    <Container full extraClass={cx(styles.hero)} color='yellow'>
      <Container extraClass={styles.hero__options}>
        {heroData.heroOptions.map((heroOption) => {
          return (
            <div className={styles.heroOption} key={heroOption?.id}>
              <h1>{heroOption?.lineOne}<br />{heroOption?.lineTwo}</h1>
              <p>{heroOption?.moreTarget}</p>
            </div>
          )
        })}
      </Container>
    </Container>
  )
}

export default ComponentHeroHeroOption
