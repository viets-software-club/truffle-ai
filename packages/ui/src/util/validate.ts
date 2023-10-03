const emailRegex = /\S+@\S+\.\S+/

export const validateEmail = (email: string) => emailRegex.test(email)

export const validatePassword = (password: string) => password.length >= 8
