'use client'

import cx from 'classnames'

import React from 'react'
import { useFormStatus } from 'react-dom'

interface SubmitButtonProps {
  extraClass?: string | string[]
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ extraClass }) => {
  const { pending } = useFormStatus()

  return (
    <button type="submit" className={cx([extraClass])} aria-disabled={pending}>
      Send
    </button>
  )
}

export default SubmitButton
