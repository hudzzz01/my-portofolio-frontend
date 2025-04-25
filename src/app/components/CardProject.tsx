'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface data {
    name : string
    imageUrl: string
    description: string
    source : string
    link : string
    theme : boolean
}

export default function CardProject({ name, imageUrl, description, source, link, theme } : data) {
    const router = useRouter()
    return (
    <div className={`sm:max-w-sm hover:scale-110 transition-all duration-300 ease-in-out rounded-2xl shadow-lg overflow-hidden p-4 ${theme ? 'bg-gray-700 text-slate-400' : 'bg-gray-100'}`} onClick={() => router.push(link)} >
      <Image className={`${theme  ? 'brightness-50' : 'brightness-100' } w-full h-48 object-cover rounded-md`} width={500} height={500}
        src={imageUrl}
        alt='hero'
    
      />
      <p className='mt-4 text-xl text-sm text-center'>{name}</p>
      <p className="mt-4 text-sm text-center">
        {description}
      </p>
      <p className="mt-4  text-sm text-center">
        {source}
      </p>
    </div>  
  )
}
