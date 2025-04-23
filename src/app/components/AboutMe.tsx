import React from 'react'
import json from '@/app/data/mine.json'
import Image from 'next/image'
import TypingText from './TypingText'
import { FaWhatsapp } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export default function AboutMe() {
    type RootState = {
        theme: {
          theme: {
            isDark: boolean;
          };
        };
      };
    const themeLight = useSelector((state: RootState) => state.theme.theme.isDark);

    const [hoverPhoneNumber, setHoverPhoneNumber] = React.useState(false)
    const {about} = json
  return (
    <div className='w-full '>
        <div className={`sm:h-300 ${!themeLight ? 'bg-gray-100 text-gray-800' : 'bg-gray-900 text-slate-400' } lg:ps-10 flex flex-col lg:flex-row`}>

            <div className='lg:w-1/2 w-full flex flex-col gap-5 justify-center items-center p-8 lg:p-20 text-justify'>
            <div className=''>
                <h1 className=' text-2xl sm:text-3xl lg:text-4xl xl:text-5xl relative' >About <TypingText text='Me.' speed={500} /></h1>
            </div>
            <div className='text-center'>
                <h2>{json.email}</h2>
                <div className='flex flex-row gap-2 p-3'>
                    <FaWhatsapp /> <h2 onMouseEnter={()=> setHoverPhoneNumber(true)} onMouseLeave={()=> setHoverPhoneNumber(false)} className='hover:cursor-pointer hover:text-2xl transition-all duration-300 ease-in-out' onClick={() => window.open(`https://wa.me/${json.wa}`)}>{json.phone}</h2>
                
                </div>
                {hoverPhoneNumber && <h2 className='text-sm'> Click to open Whatsapp</h2>}

            </div>
            <p className='text-lg sm:text-lg lg:text-xl text-2xl'>{about}</p>
            {themeLight &&
                  <p className='text-lg sm:text-lg lg:text-xl text-2xl'>Di sisi lain saya memiliki pengalaman tentang IT security</p>
            }
        </div>
        <div className=' lg:w-1/2 flex flex-col gap-2 justify-center items-center p-20 text-justify'>
        {
            !themeLight ?   
            <Image src={json.urlPhoto} width={500} height={500} className='opacity-80 rounded-lg hover:opacity-85 transform-3d hover:translate-x-15 hover:rotate-y-1 hover:rotate-x-4 transition-all duration-2000 ease-in-out' alt="hero" />
            :
            <div>
                <Image src={json.urlPhoto2} width={500} height={500} className='opacity-80 rounded-lg hover:opacity-70 brightness-50 transform-3d hover:translate-x-15 hover:rotate-y-1 hover:rotate-x-4 transition-all duration-2000 ease-in-out' alt="hero" />
             </div>

        }
           
             
        </div>

        </div>   {themeLight &&     <div className='font-bold text-2xl ms-40 text-red-500 italic' >Work in progress</div>}

   
</div>
  )
}
