import { css } from '@emotion/core'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  message: string
  onClick?: (message?: string) => void
  exampleAction: (message: string) => void
}

export const Button = (props: ButtonProps) => {
  const { children, message, exampleAction } = props
  const classes = styles()
  return (
    <button css={classes.button} onClick={() => exampleAction(message)}>
      {children}
    </button>
  )
}

const styles = () => ({
  button: css`
    border: none;
  `,
})
