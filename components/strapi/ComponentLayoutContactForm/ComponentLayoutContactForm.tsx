import { ComponentLayoutContactForm } from '@/app/generated/graphql-types'
import ContactForm from "@/components/contact_form/contact_form"

const ComponentLayoutContactForm = ({ heading, content, id }: ComponentLayoutContactForm ) => (
  <ContactForm heading={heading} content={content} id={id} />
)

export default ComponentLayoutContactForm
