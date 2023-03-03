import { get } from 'lodash'

export const color = (type = 'primary', shade = 500) => (props: any) =>
  get(props, ['theme', 'colors', type, shade])

export const font = (type = 'primary') => (props: any) =>
  get(props, ['theme', 'fonts', type])

export const spacing = (key = 500) => (props: any) =>
  get(props, ['theme', 'spacings', key])

export const prop = (key: string, defaultValue: string) => (props: any) =>
  get(props, key, defaultValue)
