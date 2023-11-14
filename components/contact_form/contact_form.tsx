'use client'
import cx from 'classnames'

import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './contact_form.module.scss'
import Container from '../container/container'
import SubmitButton from '../submit-button/submit-button'

type FormValues = {
  name: string
  email: string
  message: string
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

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
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            action="/api/contact">
            <label htmlFor="name" className={cx([styles.name, styles.label])}>
              <span className={styles.labelText}>Name</span>
              <input type="text" {...register('name', { required: true })} />

              {errors.name?.type === 'required' && (
                <p className={styles.errorMsg}>Name is required.</p>
              )}
            </label>

            <label htmlFor="email" className={cx([styles.email, styles.label])}>
              <span className={styles.labelText}>Email</span>
              <input type="email" {...register('email', { required: true })} />

              {errors.email?.type === 'required' && (
                <p className={styles.errorMsg}>Email is required.</p>
              )}
              {errors.email?.type === 'pattern' && (
                <p className={styles.errorMsg}>Email is not valid.</p>
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

              {errors.message?.type === 'required' && (
                <p className={styles.errorMsg}>Message is required.</p>
              )}
            </label>

            <SubmitButton extraClass={styles.submit} />
          </form>
        </div>
      </Container>
    </Container>
  )
}

export default ContactForm
