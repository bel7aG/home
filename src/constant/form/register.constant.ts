export const routes = [
  { pathname: '/register/fullname', slug: 'fullname' },
  { pathname: '/register/email', slug: 'email' },
  { pathname: '/register/phone', slug: 'phone' },
  { pathname: '/register/salary', slug: 'salary' }
]

export const REGISTER_FORM_ROUTES = routes.map((route, index) => ({
  ...route,
  previous: index === 0 ? null : routes[index - 1],
  next: index === routes.length - 1 ? null : routes[index + 1]
}))
