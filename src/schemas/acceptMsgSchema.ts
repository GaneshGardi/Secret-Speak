import {z} from 'zod'

export const acceptMsgShema = z.object({
    acceptMsgs: z.boolean(),
})