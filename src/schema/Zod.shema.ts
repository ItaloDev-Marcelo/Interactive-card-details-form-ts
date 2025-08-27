import {z} from 'zod';



export const CreditCardSchema = z.object({
     Name: z.string()
    .min(4, 'Name must have unless 4 letters ')
    .nonempty('Name required'),
    CardNumber: z.string()
    .regex(/^\d{16}/, 'Wrong format, numbers only'),
    ExperationDateDay:    z.string()
    .regex(/^\d{2}/,'Wrong format, numbers only')
    .nonempty("Can't be blank")
    .max(2, 'max of two'),
    ExperationDateYear:  z.string()
    .regex(/^\d{2}/,'Wrong format, numbers only')
    .nonempty("Can't be blank")
    .max(2, 'max of two'),
     Cvc:  z.string()
    .regex(/^\d{2}/,'Wrong format, numbers only')
    .nonempty("Can't be blank")
})


export type CardSchema = z.infer<typeof CreditCardSchema>;