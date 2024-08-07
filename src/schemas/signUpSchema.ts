import { z } from 'zod'

export const usernameValidation = z
    .string()
    .min(3,"username must be atleast 3 characters")
    .max(20, "username should be maximum 20 characters")
    .regex(/^[a-zA-Z0-9]+$/, "username must not contain specail character")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "enter valid email address"}),
    password: z.string().min(6, {message: "password should be atleast 6 characters long"}),
})