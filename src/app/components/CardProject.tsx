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
}

export default function CardProject({ name, imageUrl, description, source, link } : data) {
    const router = useRouter()
    return (
    <div className="max-w-sm hover:scale-110 transition-all duration-300 ease-in-out rounded-2xl shadow-lg overflow-hidden p-4 bg-white" onClick={() => router.push(link)} >
      <Image width={500} height={500}
        src={imageUrl}
        alt='hero'
        className="w-full h-48 object-cover rounded-md"
      />
      <p className='mt-4 text-xl text-gray-700 text-sm text-center'>{name}</p>
      <p className="mt-4 text-gray-700 text-sm text-center">
        {description}
      </p>
      <p className="mt-4 text-gray-700 text-sm text-center">
        {source}
      </p>
    </div>
  )
}
