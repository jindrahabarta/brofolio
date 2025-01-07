'use client'

import Image from 'next/image'
import React, { ChangeEventHandler } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import validator from 'validator'

const validationSchema = z.object({
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

interface IFormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    company: string
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
            className='bg-yellow-100 text-black overflow-x-hidden'
        >
            <Image
                src='/images/contact/paper_texture_edge.png'
                alt='Paper edge'
                width={3427}
                height={318}
                className='relative top-[-2px]'
            />
            <div className='w-full flex flex-col lg:flex-row-reverse justify-evenly items-center gap-16 lg:gap-8 px-4 sm:px-8 py-16'>
                <div className='flex-1 sm:max-w-xl'>
                    <Image
                        src='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/42549638-3207-452d-9f52-41e057be59c4/2ac41247-57bf-4313-bfb7-38f9bf7b8715.png'
                        width={300}
                        height={300}
                        alt='Contact form'
                        className='w-full sm:max-w-xl aspect-square object-cover object-center mix-blend-multiply'
                    />
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex-1 sm:max-w-xl flex flex-col gap-12'
                >
                    <header className='flex flex-col gap-4'>
                        <h2>
                            <em>Chceš rozjet projekt?</em>
                        </h2>
                        <h1 className='text-[clamp(1rem,7.5vw,3.75rem)]'>
                            <strong>Napiš nám</strong>
                        </h1>
                    </header>

                    <section className='flex flex-col gap-4'>
                        <fieldset>
                            <label htmlFor='firstName'>
                                <em>Jméno*</em>
                                <input
                                    id='firstName'
                                    {...register('firstName')}
                                    placeholder='John'
                                    aria-describedby='name-error'
                                />
                                {errors.firstName && (
                                    <span role='alert' id='name-error'>
                                        {errors.firstName.message}
                                    </span>
                                )}
                            </label>

                            <label htmlFor='lastName'>
                                <em>Příjmení*</em>
                                <input
                                    id='lastName'
                                    {...register('lastName')}
                                    placeholder='Wick'
                                    aria-describedby='name-error'
                                />
                                {errors.lastName && (
                                    <span role='alert' id='name-error'>
                                        {errors.lastName.message}
                                    </span>
                                )}
                            </label>
                        </fieldset>

                        <fieldset>
                            <label htmlFor='email'>
                                <em>E-mail*</em>
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
                            </label>

                            <label htmlFor='phone'>
                                <em>Telefon*</em>
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
                            </label>
                        </fieldset>

                        <fieldset>
                            <label htmlFor='company'>
                                <em>Společnost</em>
                                <input
                                    id='company'
                                    {...register('company')}
                                    placeholder='Apple'
                                    aria-describedby='name-error'
                                />
                                {errors.company && (
                                    <span role='alert' id='name-error'>
                                        {errors.company.message}
                                    </span>
                                )}
                            </label>
                        </fieldset>

                        <fieldset>
                            <label htmlFor='message'>
                                <em>Zpráva</em>
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
                            </label>
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
