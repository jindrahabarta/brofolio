import { z } from 'zod'
import validator from 'validator'

const contactFormValidationSchema = z.object({
    firstName: z
        .string()
        .nonempty('Toto pole je povinné.')
        .min(3, 'Minimálně 3 znaky.')
        .max(255, 'Maximálně 255 znaků.'),
    lastName: z
        .string()
        .nonempty('Toto pole je povinné.')
        .min(3, 'Minimálně 3 znaky.')
        .max(255, 'Maximálně 255 znaků.'),
    email: z
        .string()
        .nonempty('Toto pole je povinné.')
        .email('E-mail není ve správném formátu.'),
    phone: z
        .string()
        .nonempty('Toto pole je povinné.')
        .max(13, 'Maximálně 13 znaků.')
        .refine(validator.isMobilePhone, 'Telefon není ve správném formátu'),
    company: z.string().optional(),
    message: z
        .string()
        .nonempty('Toto pole je povinné.')
        .min(10, 'Minimálně 10 znaků.')
        .max(1000, 'Maximálně 1000 znaků.'),
})

export default contactFormValidationSchema
