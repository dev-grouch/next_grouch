'use client'

import cx from 'classnames'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { addEntry } from '@/app/_actions'
import styles from './contact_form.module.scss'
import Container from '../container/container'
import { FormDataSchema } from '@/lib/schema'

type Inputs = z.infer<typeof FormDataSchema>


const ContactForm = () => {
  const [data, setData] = useState<Inputs>()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema)
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    const result = await addEntry(data)

    if (!result) {
      console.log('Something went wrong')
      return
    }

    if (result.error) {
      // set local error state
      console.log(result.error)
      return
    }

    reset()
    setData(result.data)
  }

  return (
    <Container
      extraClass={styles.contactForm}
      full={true}
      color={'white'}
      id="contact">
      <Container>
        <h2>send us a note!</h2>
        <p>
          Ready to turn your ideas into reality? We&apos;d love to hear from
          you! Fill out the form, and let&apos;s get started!
        </p>

        <div className={styles.form_wrapper}>
          <form
            onSubmit={handleSubmit(processForm)}
            className={styles.form}
          >
            <label htmlFor="name" className={cx([styles.name, styles.label])}>
              <span className={styles.labelText}>Name</span>
              <input type="text" {...register('name', { required: true })} />

              {errors.name?.message && (
              <p className={styles.errorMsg}>{errors.name.message}</p>
            )}
            </label>

            <label htmlFor="email" className={cx([styles.email, styles.label])}>
              <span className={styles.labelText}>Email</span>
              <input type="email" {...register('email', { required: true })} />

              {errors.email?.message && (
                <p className={styles.errorMsg}>{errors.email.message}</p>
              )}
            </label>


            <label
              htmlFor="message"
              className={cx([styles.message, styles.label])}>
              <span className={styles.labelText}>Message</span>
              <textarea
                {...register('message', { required: true })}
                className={styles.message}
              />

              {errors.message?.message && (
                <p className={styles.errorMsg}>{errors.message.message}</p>
              )}
            </label>

            <button className={styles.submit}>Submit</button>
          </form>
        </div>

        <div className='flex-1 rounded-lg bg-cyan-600 p-8 text-white'>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </Container>
    </Container>
  )
}

export default ContactForm
