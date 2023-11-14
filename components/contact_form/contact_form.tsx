'use client'

import cx from 'classnames'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { sendEmail } from '@/app/_actions'
import styles from './contact_form.module.scss'
import Container from '../container/container'
import { ContactFormSchema } from '@/lib/schema'

type Inputs = z.infer<typeof ContactFormSchema>
type Result = {
  success: boolean
  data?: Inputs
  error?: Error
}
type FormStateClass = 'form__idle' | 'form__submitting' | 'form__submitted';

const ContactForm = () => {
  const [data, setData] = useState<Inputs>()
  const [formState, setFormState] = useState<FormStateClass>('form__idle')

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema)
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    setFormState('form__submitting')
    const result = await sendEmail(data) as Result

    if (result?.success) {
      console.log({ data: result.data })
      setData(result.data)
      setFormState('form__submitted')
      reset()
      return
    }

    console.log(result?.error)
    setFormState('form__idle')
    return
  }

  return (
    <Container
      extraClass={cx(styles.contactForm, {
        [styles.contactForm__submitting]: isSubmitting || formState === 'form__submitting',
        [styles.contactForm__submitted]: formState === 'form__submitted',
        [styles.contactForm__idle]: formState === 'form__idle',
      })}
      full={true}
      color={'white'}
      id="contact">
      <Container>
        <div className={styles.form_content_wrapper}>
          <h2>send us a note!</h2>
          <p>
            Ready to turn your ideas into reality? We&apos;d love to hear from
            you! Fill out the form, and let&apos;s get started!
          </p>

          <div className={styles.form_wrapper}>
            <form
              onSubmit={handleSubmit(processForm)}
              className={cx(styles.form)}
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

              <button className={cx(styles.submit, {[styles.disabled]: isSubmitting})} disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send'}</button>
            </form>
          </div>
        </div>

        <div className={styles.form_thank_you_wrapper}>
          <h2>Thanks!</h2>
          <p>
            We&apos;re happy to hear from you, and will be in touch shortly.
          </p>
        </div>
      </Container>
    </Container>
  )
}

export default ContactForm
