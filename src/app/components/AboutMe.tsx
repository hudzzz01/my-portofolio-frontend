import React from 'react'
import json from '@/app/data/mine.json'
import Image from 'next/image'
import TypingText from './TypingText'
import { FaWhatsapp } from 'react-icons/fa'

export default function AboutMe() {
    const [hoverPhoneNumber, setHoverPhoneNumber] = React.useState(false)
    const {about} = json
  return (
    <div className='w-screen h-300 bg-gray-100 ps-10 flex flex-row'>
    <div className='w-1/2 flex flex-col gap-5 justify-center items-center p-20 text-justify'>
        <div className=''>
             <h1 className='text-5xl relative' >About <TypingText text='Me.' speed={500} /></h1>
        </div>
        <div className='text-center'>
            <h2>{json.email}</h2>
            <div className='flex flex-row gap-2 p-3'>
                <FaWhatsapp /> <h2 onMouseEnter={()=> setHoverPhoneNumber(true)} onMouseLeave={()=> setHoverPhoneNumber(false)} className='hover:cursor-pointer hover:text-2xl transition-all duration-300 ease-in-out' onClick={() => window.open(`https://wa.me/${json.wa}`)}>{json.phone}</h2>
              
            </div>
            {hoverPhoneNumber && <h2 className='text-sm'> Click to open Whatsapp</h2>}

        </div>
        <p className='text-2xl'>{about}</p>
    </div>
    <div className='w-1/2 flex flex-col gap-2 justify-center items-center p-20 text-justify'>
        <Image src={json.urlPhoto} width={500} height={500} className='opacity-80 rounded-lg hover:opacity-85 transform-3d hover:translate-x-15 hover:rotate-y-1 hover:rotate-x-4 transition-all duration-2000 ease-in-out' alt="hero" />
    </div>
</div>
  )
}
