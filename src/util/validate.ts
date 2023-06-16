export const validateEmail = (email: string) => {
  const regex = /\S+@\S+\.\S+/
  return regex.test(email)
}

export const validatePassword = (password: string) => password.length > 6
