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

const ContactForm = () => {
  const [data, setData] = useState<Inputs>()

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
    const result = await sendEmail(data) as Result

    if (result?.success) {
      console.log({ data: result.data })
      setData(result.data)
      reset()
      return
    }

    console.log(result?.error)
    return
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
            className={cx(styles.form, {[styles.form__submitting]: isSubmitting})}
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

        <div className='flex-1 rounded-lg bg-cyan-600 p-8 text-white'>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </Container>
    </Container>
  )
}

export default ContactForm
