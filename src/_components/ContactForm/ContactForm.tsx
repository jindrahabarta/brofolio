'use client'

import React, { FocusEventHandler, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input1 from '@/_assets/inputs/Input1'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './style.css'
import { nextClient } from '@/_axios/axios'
import contactFormValidationSchema from '@/_validators/contact'
import { useTranslations } from 'next-intl'

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

const ContactForm = ({ textColor }: { textColor?: string }) => {
    const t = useTranslations('fields')
    const t1 = useTranslations('contact')
    const t2 = useTranslations('zod')
    const [mounted, setMounted] = useState(false)
    const [formState, setFormState] = useState<FormState>(FormState.IDLE)

    const schema = contactFormValidationSchema(t2)

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<IFormData>({
        resolver: zodResolver(schema),
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

    const handleSetBtnSvg = () => {
        const button = document.querySelector('button')
        if (!button) return
        const { offsetWidth, offsetHeight } = button
        if (!offsetWidth || !offsetHeight) return

        const svg = button.querySelector('svg')
        if (!svg) return
        svg.setAttribute('width', offsetWidth.toString())
        svg.setAttribute('height', offsetHeight.toString())
    }

    useEffect(() => {
        setMounted(true)

        handlePageResize()

        handleSetBtnSvg()

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
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex-1 w-full sm:max-w-xl flex flex-col gap-2'
        >
            <header>
                <h2 className='font-instrument leading-normal text-2xl block origin-left'>
                    {t1('title')}
                </h2>
                <h1 className='font-league uppercase text-[clamp(1rem,7.5vw,4rem)] leading-[1.1em] mt-2'>
                    {t1('subtitle')}
                </h1>
            </header>

            <section className='flex flex-col gap-4'>
                <fieldset>
                    <label htmlFor='firstName'>
                        <p className='font-instrument text-xl'>
                            {t('firstName')}*
                        </p>
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
                                className={`${textColor ? textColor : 'black'}`}
                            />
                        </div>
                        {errors.firstName && (
                            <span role='alert' id='firstName-error'>
                                {errors.firstName.message}
                            </span>
                        )}
                    </label>

                    <label htmlFor='lastName'>
                        <p className='font-instrument text-xl'>
                            {t('lastName')}*
                        </p>
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
                        <p className='font-instrument text-xl'>E-mail*</p>
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
                        <p className='font-instrument text-xl'>{t('phone')}*</p>
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
                                    ? t2('mandatory')
                                    : errors.phone.message}
                            </span>
                        )}
                    </label>
                </fieldset>

                <fieldset>
                    <label htmlFor='company'>
                        <p className='font-instrument text-xl'>
                            {t('company')}
                        </p>
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
                        <p className='font-instrument text-xl'>
                            {t('message')}
                        </p>
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
                        <em> {t('sending')}</em>
                    </span>
                )}
                {formState === FormState.ERROR && (
                    <span role='alert' className='text-red-600'>
                        <em>{t('unsuccessfull')}</em>
                    </span>
                )}
                {formState === FormState.SUCCESS && (
                    <span role='alert' className='text-green-600'>
                        <em>{t('success')}</em>
                    </span>
                )}

                <button
                    type='submit'
                    aria-label='Submit contact form'
                    className='self-start text-lg relative px-4 py-2 mt-4'
                    disabled={formState === FormState.SENDING}
                >
                    <Input1
                        width='100%'
                        height='100%'
                        strokeWidth={7}
                        className='input-svg absolute inset-0 pointer-events-none select-none'
                    />
                    {t('send')}
                </button>
            </footer>
        </form>
    )
}

export default ContactForm
