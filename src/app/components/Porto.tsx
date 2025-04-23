import React from 'react'
import { IoIosDocument } from 'react-icons/io'
import CardProject from './CardProject'
import json from '@/app/data/mine.json'

export default function Porto() {
  return (
    <div className='flex w-full min-h-300 flex-col'>
         <div className="flex flex-col gap-2 items-center w-full text-2xl lg:text-3xl mt-10 mb-10">
             <div className='flex flex-row gap-2 '>
                  <IoIosDocument /> Download CV saya di sini 
             </div>
            <a 
                href="/mycv.pdf" 
                download 
                className="text-yellow-500 hover:underline font-medium"
            >
                Click
            </a>
        </div>
        <div className='bg-gray-100 min-h-200 flex flex-col justify-center items-center'>
            <div className='text-3xl lg:text-5xl mt-20'>
                Portoflio
            </div>
            <div className='flex flex-wrap mt-10 gap-10 mx-20 justify-center'>
               {json.porto.map((item, index) => (
                   <div key={index}>
                         <CardProject name={item.nama} imageUrl={item.image} description={item.description} source='github saya' link={item.link} />
                   </div>
               ))}
            </div>
        </div>

    </div>
  )
}
