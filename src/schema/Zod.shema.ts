import {z} from 'zod';

const NumFormate = (formate: number) => {
     z.string()
    .regex( new RegExp(`^\\d{${formate}}`), 'Wrong format, numbers only')
    .nonempty("Can't be blank")
    .transform(Number)
}

export const CreditCardSchema = z.object({
     Name: z.string()
    .min(4, 'Name must have unless 4 letters ')
    .nonempty('Name required'),
    CardNumber: z.string()
    .regex(/^\d{16}/, 'Wrong format, numbers only')
    .transform(Number),
    ExperationDateDay:  NumFormate(2),
    ExperationDateYear: NumFormate(2),
    Cvc: NumFormate(3)
})


export type CardSchema = z.infer<typeof CreditCardSchema>;