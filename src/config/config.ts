interface Config {
  [key: string]: string
}

export const config: Config = {
  APP_URL:
    process.env.REACT_APP_APP_URL ||
    process.env.PUBLIC_URL ||
    'http://localhost:3000/react-starter',
  API_URL:
    process.env.REACT_APP_API_URL ||
    process.env.API_URL ||
    'https://cat-fact.herokuapp.com/',
  BASE_URL:
    process.env.REACT_APP_BASE_URL ||
    process.env.PUBLIC_URL ||
    '/react-starter',
}
