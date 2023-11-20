import cx from 'classnames'

import Container from "@/components/container/container";
import { ComponentHeroHeroOption } from '@/app/generated/graphql-types'

import styles from './ComponentHeroHeroOption.module.scss'
import P from '@/components/p/p';
import H2 from '@/components/h2/h2';


const ComponentHeroHeroOption = (heroData: ComponentHeroHeroOption) =>  {
  return (
    <Container full extraClass={cx(styles.hero)} color='yellow'>
      <Container extraClass={styles.hero__options}>
        {heroData.heroOptions && heroData.heroOptions.map((heroOption) => {
          return (
            <div className={styles.heroOption} key={heroOption?.id}>
              <H2 extraClass={styles.h2}><span className={styles.line_one}>{heroOption?.lineOne}</span> <span className={styles.line_two}>{heroOption?.lineTwo}</span></H2>
              {heroOption?.moreTarget && <P extraClass={styles.p}><a href={heroOption.moreTarget} className={styles.heroOption__link}>more</a></P>}
            </div>
          )
        })}
      </Container>
    </Container>
  )
}

export default ComponentHeroHeroOption
