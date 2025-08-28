import {z} from 'zod';



export const CreditCardSchema = z.object({
     Name: z.string()
    .nonempty("Can't be blank")
    .min(4, 'Name must have unless 4 letters '),
    CardNumber: z.string()
    .nonempty("Can't be blank")
    .regex(/^\d{16}/, 'Wrong format, numbers only'),
    ExperationDateDay:    z.string()
    .nonempty("Can't be blank")
    .regex(/^\d{2}/,'Wrong format, numbers only')
    .max(2, 'max of two'),
    ExperationDateYear:  z.string()
    .nonempty("Can't be blank")
    .regex(/^\d{2}/,'Wrong format, numbers only')
    .max(2, 'max of two'),
     Cvc:  z.string()
     .nonempty("Can't be blank")
    .regex(/^\d{2}/,'Wrong format, numbers only')
})


export type CardSchema = z.infer<typeof CreditCardSchema>;