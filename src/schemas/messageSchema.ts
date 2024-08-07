import {z} from 'zod'

export const messageSchema = z.object({
    content: z
    .string()
    .min(10,{message:'Content should be atleast 10 characters'})
    .max(300,{message:'Content should me maximum 300 characters'})
})