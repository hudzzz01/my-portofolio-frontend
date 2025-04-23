import Image from 'next/image'
import React from 'react'
import Eye from './Eye'
import BinaryRain from './BinaryRain'
import json from '@/app/data/mine.json'
import TypingText from './TypingText'
import { useSelector } from 'react-redux'



export default function Hero() {
    type RootState = {
        theme: {
          theme: {
            isDark: boolean;
          };
        };
    };
    const themeLight = useSelector((state: RootState) => state.theme.theme.isDark);

    const {nama} = json


    const fullname = nama.split(" ")
    const frontName = fullname.slice(0, fullname.length-1).join(" ") 
    const lastName = fullname[fullname.length-1]
  
  return (
    <div className='w-full max-h-300 flex'>
        <div className=' gap-4 xl:pt-27 w-full sm:h-300 p-3 md:p-10 flex sm:flex-col  lg:flex-row  justify-center items-center hover:p-0 transition-all duration-800 ease-in-out xl:gap-0'>
            <div className='sm:w-full lg:w-1/3 h-100 flex flex-col justify-center sm:gap-10 sm:items-center lg:items-start lg:gap-1 lg:ms-30'>
                <div className={`w-full mb-10 md:ms-10 ${themeLight ? "text-slate-300" : "text-text-gray-800"} transition-all duration-300 ease-in-out`}>
                    <div className=''>
                        <h1 className='font-bold text-xl sm:text-4xl lg:text-6xl'>{frontName} 
                        <div className=' hover:text-4xl hover:text-2xl sm:hover:text-5xl lg:hover:text-8xl xl:hover:text-9xl transition-all duration-1500 ease-in-out hover:text-green-600'>{lastName}</div></h1>
                    </div>
                    <h2 className='font-light mt-1 text-lg'> <TypingText text={json.jabatan} /></h2>
                </div>
            
                <div className='w-full flex flex-col md:flex-row xl:mt-30 h-10 gap-5 lg:ms-10 md:mt-20 2xl:mt-30'>
                        <div className={` w-50 sm:w-100 xl:w-100 outline ${themeLight ? "text-slate-100 outline-slate-100" : "text-text-gray-800 outline-gray-500"} rounded-full text-center pt-2 pb-2 sm:pt-2  hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out `} >
                            Resume
                        </div>
                        <div className={` sm:w-100 xl:w-100 outline ${themeLight ? "text-slate-100 outline-slate-100" : "text-text-gray-800 outline-gray-500"} rounded-full text-center pt-2 pb-2 sm:pt-2  hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out `} >
                            Portofolio
                        </div>
                </div>
            </div>
            <div className=' sm:w-50 lg:w-2/3 lg:h-100 xl:h-200 2xl:h-100 sm:flex sm:bg-none justify-center transition-all duration-1000 ease-in-out '>
                    <div className='bg-[]'>
                       {

                           themeLight ?
                           <Image src="/cat-white.svg" width={500} height={500} className='hidden sm:block opacity-60 xl:w-120 lg:w-80 sm:w-100 w-50 xs:opacity-80 transform-3d sm:hover:translate-x-5 lg:hover:translate-x-15 lg:hover:rotate-y-1 lg:hover:rotate-x-4 transition-all duration-2000 ease-in-out' alt="hero" />
                           :
                           <Image src="/cat.svg" width={500} height={500} className='hidden sm:block opacity-60 xl:w-120 lg:w-80 sm:w-100 w-50 xs:opacity-80 transform-3d sm:hover:translate-x-5 lg:hover:translate-x-15 lg:hover:rotate-y-1 lg:hover:rotate-x-4 transition-all duration-2000 ease-in-out' alt="hero" />
                       }
                        
                        <div className=' lg:top-115 xl:top-90 sm:top-175 2xl:top-135 xl:ps-10  absolute md:block transition-all duration-1000 ease-in-out'>
                            <div className='lg:flex lg:w-full sm:w-10 lg:flex-row lg:gap-0 xl:gap-20 sm:gap-8 sm:ms-5 lg:ms-0 hidden sm:flex'>
                              {
                                themeLight ? 

                                    <Eye pupilColor='oklch(64.8% 0.2 131.684)'/>

                                :
                                    <Eye pupilColor='#555'/>
                              }

{
                                themeLight ? 

                                    <Eye pupilColor='oklch(64.8% 0.2 131.684)'/>

                                :
                                    <Eye pupilColor='#555'/>
                              }
                            </div>
                            <div>
                                
                            </div>
                            <BinaryRain/>
                        </div>
                        
                    </div>
                
            </div>
        </div>
    </div>
  )
}
