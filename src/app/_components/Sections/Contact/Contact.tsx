'use client'

import Image from 'next/image'
import React, { FocusEventHandler, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input1 from '@/_assets/inputs/Input1'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './style.css'
import { nextClient } from '@/_axios/axios'
import contactFormValidationSchema from '@/_validators/contact'
import Btn1 from '@/../public/images/contact/btn1.png'
import Btn2 from '@/../public/images/contact/btn2.png'
import Btn3 from '@/../public/images/contact/btn3.png'
import Btn4 from '@/../public/images/contact/btn4.png'

interface IFormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    company: string
    message: string
}

enum FormState {
    IDLE,
    SENDING,
    SUCCESS,
    ERROR,
}

const Contact = () => {
    const [formState, setFormState] = useState<FormState>(FormState.IDLE)
    const [mounted, setMounted] = useState(false)

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<IFormData>({
        resolver: zodResolver(contactFormValidationSchema),
    })

    const handlePageResize = () => {
        const inputContainers = document.querySelectorAll(
            'fieldset .container'
        ) as NodeListOf<HTMLDivElement>
        inputContainers.forEach((inputContainer) => {
            const { offsetWidth, offsetHeight } = inputContainer
            if (!offsetWidth || !offsetHeight) return

            const svg = inputContainer.querySelector('svg')
            if (!svg) return
            svg.setAttribute('width', offsetWidth.toString())
            svg.setAttribute('height', offsetHeight.toString())

            const rect = svg.querySelector('rect')
            if (!rect) return
            rect.setAttribute('width', offsetWidth.toString())
            rect.setAttribute('height', offsetHeight.toString())
        })
    }

    const handleInputFocus: FocusEventHandler<HTMLElement> = (e) => {
        const container = e.target.closest('.container')
        if (!container) return
        container.classList.add('focused')
    }

    const handleInputBlur: FocusEventHandler<HTMLElement> = (e) => {
        const container = e.target.closest('.container')
        if (!container) return
        container.classList.remove('focused')
    }

    useEffect(() => {
        setMounted(true)

        handlePageResize()

        window.addEventListener('resize', handlePageResize)

        return () => {
            window.removeEventListener('resize', handlePageResize)
        }
    }, [])

    const onSubmit = (data: IFormData) => {
        if (formState === FormState.SENDING) return

        setFormState(FormState.SENDING)

        nextClient
            .post('/email', data)
            .then(() => {
                setFormState(FormState.SUCCESS)
                reset()
            })
            .catch(() => {
                setFormState(FormState.ERROR)
            })
    }

    useEffect(() => {
        if (formState === FormState.SUCCESS || formState === FormState.ERROR)
            setTimeout(() => {
                setFormState(FormState.IDLE)
            }, 5000)
    }, [formState])

    return (
        <section id='contact' className='relative overflow-x-hidden w-full'>
            <Image
                src='/images/contact/paper_edge.png'
                alt='Paper edge'
                width={2500}
                height={212}
                className='absolute top-[2px] z-10 w-full select-none'
            />
            <div id='contact-bg' className='absolute inset-0' />

            <div className='relative w-full flex flex-col lg:flex-row-reverse justify-evenly items-center gap-12 lg:gap-8 px-4 sm:px-8 py-16 pt-[11.8vw]'>
                <div className='flex-1 sm:max-w-xl'>
                    <Image
                        src='/images/contact/ContactGif2.webp'
                        unoptimized
                        width={600}
                        height={600}
                        alt='Contact form'
                        className='w-full sm:max-w-lg aspect-square object-cover object-center mix-blend-multiply select-none pointer-events-none'
                    />
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex-1 sm:max-w-xl flex flex-col gap-2'
                >
                    <header>
                        <h2 className='leading-normal text-xl'>
                            <em className='block origin-left'>
                                Chceš s náma rozjet projekt?
                            </em>
                        </h2>
                        <h1 className='text-[clamp(1rem,7.5vw,3rem)] leading-[1.1em] mt-2'>
                            <strong className='inline-block '>Napiš nám</strong>
                        </h1>
                    </header>

                    <section className='flex flex-col gap-4'>
                        <fieldset>
                            <label htmlFor='firstName'>
                                <em>Jméno*</em>
                                <div className='container'>
                                    <Input1
                                        width='100%'
                                        height='100%'
                                        strokeWidth={7}
                                        className='input-svg absolute pointer-events-none select-none'
                                    />
                                    <input
                                        id='firstName'
                                        {...register('firstName')}
                                        placeholder='John'
                                        aria-describedby='firstName-error'
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                    />
                                </div>
                                {errors.firstName && (
                                    <span role='alert' id='firstName-error'>
                                        {errors.firstName.message}
                                    </span>
                                )}
                            </label>

                            <label htmlFor='lastName'>
                                <em>Příjmení*</em>
                                <div className='container'>
                                    <Input1
                                        width='100%'
                                        height='100%'
                                        strokeWidth={7}
                                        className='input-svg absolute pointer-events-none select-none'
                                    />
                                    <input
                                        id='lastName'
                                        {...register('lastName')}
                                        placeholder='Wick'
                                        aria-describedby='lastName-error'
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                    />
                                </div>
                                {errors.lastName && (
                                    <span role='alert' id='lastName-error'>
                                        {errors.lastName.message}
                                    </span>
                                )}
                            </label>
                        </fieldset>

                        <fieldset>
                            <label htmlFor='email'>
                                <em>E-mail*</em>
                                <div className='container'>
                                    <Input1
                                        width='100%'
                                        height='100%'
                                        strokeWidth={7}
                                        className='input-svg absolute pointer-events-none select-none'
                                    />
                                    <input
                                        id='email'
                                        {...register('email')}
                                        placeholder='john@wick.cz'
                                        aria-describedby='email-error'
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                    />
                                </div>
                                {errors.email && (
                                    <span role='alert' id='email-error'>
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>

                            <label htmlFor='phone'>
                                <em>Telefon*</em>
                                <div className='container'>
                                    <Input1
                                        width='100%'
                                        height='100%'
                                        strokeWidth={7}
                                        className='input-svg absolute pointer-events-none select-none'
                                    />
                                    {mounted && (
                                        <Controller
                                            name='phone'
                                            control={control}
                                            render={({ field }) => (
                                                <PhoneInput
                                                    {...field}
                                                    defaultCountry='CZ'
                                                    aria-describedby='phone-error'
                                                    onFocus={handleInputFocus}
                                                    onBlur={handleInputBlur}
                                                />
                                            )}
                                        />
                                    )}
                                </div>
                                {errors.phone && (
                                    <span role='alert' id='phone-error'>
                                        {errors.phone.message === 'Required'
                                            ? 'Toto pole je povinné.'
                                            : errors.phone.message}
                                    </span>
                                )}
                            </label>
                        </fieldset>

                        <fieldset>
                            <label htmlFor='company'>
                                <em>Společnost</em>
                                <div className='container'>
                                    <Input1
                                        width='100%'
                                        height='100%'
                                        strokeWidth={7}
                                        className='input-svg absolute pointer-events-none select-none'
                                    />
                                    <input
                                        id='company'
                                        {...register('company')}
                                        placeholder='Apple'
                                        aria-describedby='company-error'
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                    />
                                </div>
                                {errors.company && (
                                    <span role='alert' id='company-error'>
                                        {errors.company.message}
                                    </span>
                                )}
                            </label>
                        </fieldset>

                        <fieldset>
                            <label htmlFor='message'>
                                <em>Zpráva</em>
                                <div className='container'>
                                    <Input1
                                        width='100%'
                                        height='100%'
                                        strokeWidth={7}
                                        className='input-svg absolute pointer-events-none select-none'
                                    />
                                    <textarea
                                        id='message'
                                        {...register('message')}
                                        rows={5}
                                        placeholder='Hello, I want best website ever.'
                                        aria-describedby='message-error'
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        className='resize-none'
                                    />
                                </div>
                                {errors.message && (
                                    <span role='alert' id='message-error'>
                                        {errors.message.message}
                                    </span>
                                )}
                            </label>
                        </fieldset>
                    </section>

                    <footer>
                        {formState === FormState.SENDING && (
                            <span role='alert' className='text-yellow-600'>
                                <em>Odesílání formuláře</em>
                            </span>
                        )}
                        {formState === FormState.ERROR && (
                            <span role='alert' className='text-red-600'>
                                <em>Nepodařilo se odeslat formulář</em>
                            </span>
                        )}
                        {formState === FormState.SUCCESS && (
                            <span role='alert' className='text-green-600'>
                                <em>Zpráva byla odeslána</em>
                            </span>
                        )}

                        <button
                            type='submit'
                            className='self-start mt-4'
                            disabled={formState === FormState.SENDING}
                        >
                            <Image
                                src={Btn4}
                                alt={'btn1'}
                                width={160}
                                height={77}
                            />
                        </button>
                    </footer>
                </form>
            </div>
        </section>
    )
}

export default Contact
