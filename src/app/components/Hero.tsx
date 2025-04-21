import Image from 'next/image'
import React from 'react'
import Eye from './Eye'
import BinaryRain from './BinaryRain'
import json from '@/app/data/mine.json'
import TypingText from './TypingText'


export default function Hero() {
    const {nama} = json


    const fullname = nama.split(" ")
    const frontName = fullname.slice(0, fullname.length-1).join(" ") 
    const lastName = fullname[fullname.length-1]
  
  return (
    <div className='w-screen max-h-300'>
        <div className='pt-27 w-full h-300 p-3 md:p-10 flex flex-col md:flex-row justify-center items-center hover:p-0 transition-all duration-800 ease-in-out'>
            <div className='w-1/3 h-100 flex flex-col justify-center gap-1 ms-30'>
                <div className='ms-2 md:ms-10 text-gray-800'>
                    <h1 className='font-bold text-5xl'>{frontName} <span className='hover:text-7xl transition-all duration-1500 ease-in-out hover:text-yellow-300'>{lastName}</span></h1>
                    <h2 className='font-light mt-1 text-lg'> <TypingText text={json.jabatan} /></h2>
                </div>
            
                <div className='flex flex-col md:flex-row h-10 gap-5 ms-10'>
                        <div className='w-100 outline outline-gray-800 rounded-full text-center pt-2 text-gray-800 hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out ' >
                            Resume
                        </div>
                        <div className='w-100 outline outline-gray-800 rounded-full text-center pt-2 text-gray-800 hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out ' >
                            Portofolio
                        </div>
                </div>
            </div>
            <div className='w-2/3 h-100 flex justify-center'>
                    <div>
                        <Image src="/cat.svg" width={500} height={500} className='opacity-60' alt="hero" />
                        
                        <div className='top-135 ps-10 hidden absolute md:block'>
                            <div className='flex flex-row gap-20'>
                                <Eye/>
                                <Eye/>
                            </div>
                            <BinaryRain/>
                        </div>
                        
                    </div>
                
            </div>
        </div>
    </div>
  )
}
