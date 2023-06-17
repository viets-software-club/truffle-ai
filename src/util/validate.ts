export const validateEmail = (email: string) => {
  const regex = /\S+@\S+\.\S+/
  return regex.test(email)
}

export const validatePassword = (password: string) =>
  password.length >= 8 &&
  password.search('/[a-z]/') > 0 &&
  password.search('/[A-Z]/') > 0 &&
  password.search('/[0-9]/') > 0
