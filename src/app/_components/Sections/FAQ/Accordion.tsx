'use client'
import React, { useState } from 'react'
import AccordionItem from './AccordionItem'
import { Faq } from '@/_constants/faq'

const Accordion = () => {
    const [selected, setSelected] = useState<null | string>(null)

    const openItem: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (!e.target.id) return

        const id = e.target.id

        if (selected === id) {
            setSelected(null)
        } else {
            setSelected(id)
        }
    }

    return (
        <div className=' p-4 rounded-2xl bg-gray-100/80 text-black flex-[2]'>
            {Faq.map((faqItem, i) => {
                return (
                    <AccordionItem
                        key={i.toString()}
                        title={faqItem.question}
                        answer={faqItem.answer}
                        id={i}
                        onClick={openItem}
                        accordionOpen={selected === i.toString() ? true : false}
                    />
                )
            })}
        </div>
    )
}

export default Accordion
