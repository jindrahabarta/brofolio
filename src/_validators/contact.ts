import { z } from 'zod'
import validator from 'validator'

const contactFormValidationSchema = (
    t?: (
        key: string,
        values?: Record<string, string | number | Date> | undefined
    ) => string
) => {
    return z.object({
        firstName: z
            .string()
            .nonempty(t ? t('mandatory') : '')
            .min(3, t ? t('min', { number: 3 }) : '')
            .max(255, t ? t('max', { number: 255 }) : ''),
        lastName: z
            .string()
            .nonempty(t ? t('mandatory') : '')
            .min(3, t ? t('min', { number: 3 }) : '')
            .max(255, t ? t('max', { number: 255 }) : ''),
        email: z
            .string()
            .nonempty(t ? t('mandatory') : '')
            .email(t ? t('emailFormat') : ''),
        phone: z
            .string()
            .nonempty(t ? t('mandatory') : '')
            .max(13, t ? t('max', { number: 13 }) : '')
            .refine(validator.isMobilePhone, t ? t('phoneFormat') : ''),
        company: z.string().optional(),
        message: z
            .string()
            .nonempty(t ? t('mandatory') : '')
            .min(10, t ? t('min', { number: 10 }) : '')
            .max(1000, t ? t('max', { number: 1000 }) : ''),
    })
}

export default contactFormValidationSchema
