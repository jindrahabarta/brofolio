'use client'

import Image from 'next/image'
import React, { ChangeEventHandler } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import validator from 'validator'

const validationSchema = z.object({
    name: z
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
    message: z
        .string()
        .nonempty('Toto pole je povinné.')
        .min(10, 'Minimálně 10 znaků.')
        .max(1000, 'Maximálně 1000 znaků.'),
})

interface IFormData {
    name: string
    email: string
    phone: string
    message: string
}

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IFormData>({
        resolver: zodResolver(validationSchema),
    })

    const {
        name: phoneName,
        onChange: phoneOnChange,
        onBlur: phoneOnBlur,
        ref: phoneRef,
    } = register('phone')

    const handlePhoneChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value.split('')

        if (!value.includes('+')) {
            if (
                value.length >= 4 &&
                !(value[3] === ' ' || value[3] === '\xa0')
            ) {
                value.splice(3, 0, '\xa0')
            }
            if (
                value.length >= 8 &&
                !(value[7] === ' ' || value[7] === '\xa0')
            ) {
                value.splice(7, 0, '\xa0')
            }
        }

        e.target.value = value.join('')

        phoneOnChange(e)
    }

    const onSubmit = (data: IFormData) => {
        console.log(data)

        reset()
    }

    return (
        <section
            id='contact'
            className='flex flex-col items-center gap-12 text-black px-8 py-16'
        >
            {/* <h1>
                <strong>Contact us</strong>
            </h1> */}
            <div className='w-full flex flex-col md:flex-row-reverse gap-8'>
                <div className='flex-1 flex items-center justify-center'>
                    <Image
                        src='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
                        width={300}
                        height={300}
                        alt='Contact form'
                        className='w-2/3 aspect-square object-cover object-center'
                    />
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex-1 flex flex-col gap-12'
                >
                    <header className='flex flex-col gap-4'>
                        <h2>
                            <em>What&apos;s the tea?</em>
                        </h2>
                        <h1>
                            <strong>Let&apos;s chat</strong>
                        </h1>
                    </header>

                    <section className='flex flex-col gap-6'>
                        <fieldset>
                            <label htmlFor='name'>
                                <em>Jméno</em>
                            </label>
                            <input
                                id='name'
                                {...register('name')}
                                placeholder='John Wick'
                                aria-describedby='name-error'
                            />
                            {errors.name && (
                                <span role='alert' id='name-error'>
                                    {errors.name.message}
                                </span>
                            )}
                        </fieldset>

                        <fieldset>
                            <label htmlFor='email'>
                                <em>E-mail</em>
                            </label>
                            <input
                                id='email'
                                {...register('email')}
                                placeholder='john@wick.com'
                                aria-describedby='email-error'
                            />
                            {errors.email && (
                                <span role='alert' id='email-error'>
                                    {errors.email.message}
                                </span>
                            )}
                        </fieldset>

                        <fieldset>
                            <label htmlFor='phone'>
                                <em>Phone</em>
                            </label>
                            <input
                                id='phone'
                                ref={phoneRef}
                                name={phoneName}
                                onChange={handlePhoneChange}
                                onBlur={phoneOnBlur}
                                maxLength={13}
                                placeholder='776 275 657'
                                aria-describedby='phone-error'
                            />
                            {errors.phone && (
                                <span role='alert' id='email-error'>
                                    {errors.phone.message}
                                </span>
                            )}
                        </fieldset>

                        <fieldset>
                            <label htmlFor='message'>
                                <em>Zpráva</em>
                            </label>
                            <textarea
                                id='message'
                                {...register('message')}
                                rows={5}
                                placeholder='Hello, I want best website ever.'
                                aria-describedby='message-error'
                                className='resize-none'
                            />
                            {errors.message && (
                                <span role='alert' id='email-error'>
                                    {errors.message.message}
                                </span>
                            )}
                        </fieldset>
                    </section>

                    <footer>
                        <button
                            type='submit'
                            className='self-start text-2xl border-2 border-black rounded-full py-2 px-4'
                        >
                            <em>Odeslat</em>
                        </button>
                    </footer>
                </form>
            </div>
        </section>
    )
}

export default Contact
