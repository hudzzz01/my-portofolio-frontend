import React from 'react'
import { IoIosDocument } from 'react-icons/io'
import CardProject from './CardProject'

export default function Porto() {
  return (
    <div className='flex w-screen h-300 flex-col'>
         <div className="flex flex-col gap-2 items-center w-full text-3xl mt-10 mb-10">
             <div className='flex flex-row gap-2'>
                  <IoIosDocument /> Download CV saya di sini 
             </div>
            <a 
                href="/cv.pdf" 
                download 
                className="text-yellow-500 hover:underline font-medium"
            >
                Click
            </a>
        </div>
        <div className='bg-gray-100 min-h-200 flex flex-col justify-center items-center'>
            <div className='text-5xl'>
                Portoflio
            </div>
            <div className='flex flex-wrap mt-10 gap-10 mx-20 justify-center'>
                <CardProject imageUrl='/me.jpg' description='Project ' source='github saya' link="https://www.google.com" />
            </div>
        </div>

    </div>
  )
}
