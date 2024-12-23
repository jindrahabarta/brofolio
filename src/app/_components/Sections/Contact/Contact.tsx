'use client'

import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const validationSchema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    phone: z.string().min(9).max(15),
    message: z.string().min(10).max(1000),
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
        formState: { errors },
    } = useForm<IFormData>({
        resolver: zodResolver(validationSchema),
    })

    const onSubmit = (data: IFormData) => {
        console.log(data)
    }

    return (
        <section className='flex flex-col md:flex-row-reverse gap-8 text-black p-8'>
            <div className='flex-1 flex items-center justify-center'>
                <Image
                    src='https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png'
                    width={500}
                    height={500}
                    alt='Contact form'
                    className='w-full aspect-square object-cover object-center'
                />
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex-1 flex flex-col gap-12'
            >
                <header className='flex flex-col gap-4'>
                    <h2>
                        <em>What's the tea?</em>
                    </h2>
                    <h1>
                        <strong>Let's chat</strong>
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
                            {...register('phone')}
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

                    <button
                        type='submit'
                        className='self-start text-2xl border-2 border-black rounded-full mt-8 py-2 px-4'
                    >
                        <em>Odeslat</em>
                    </button>
                </section>
            </form>
        </section>
    )
}

export default Contact
