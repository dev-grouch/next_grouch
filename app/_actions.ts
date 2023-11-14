'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import ContactFormEmail from '../emails/contact-form-email'
import { ContactFormSchema } from '@/lib/schema'

type Inputs = z.infer<typeof ContactFormSchema>

export async function addEntry(data: Inputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.success) {
    return { success: true, data: result.data }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.success) {
    const { name, email, message } = result.data
    try {
      const data = await resend.emails.send({
        from: 'robut@next.grouch.dev',
        to: ['steve@grouch.dev'],
        subject: 'Contact form submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({ name, email, message })
      })
      return { success: true, data }
    } catch (error) {
      return { success: false, error }
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}
