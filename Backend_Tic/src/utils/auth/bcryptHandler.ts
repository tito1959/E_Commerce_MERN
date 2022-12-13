import bcrypt from 'bcrypt'

export const verifyPass = async (inputPass: string, databasePass: string): Promise<boolean> => {
  return await bcrypt.compare(inputPass, databasePass)
}

export const encryptPass = async (pass: string): Promise<string> => {
  return await bcrypt.hash(pass, 10)
}
