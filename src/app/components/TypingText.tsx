'use client'
import { useEffect, useState } from 'react'

interface TypingTextProps {
  text: string
  speed?: number // Kecepatan ketik/hapus (ms per karakter)
}

export default function TypingText({ text, speed = 100 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(text.slice(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
        if (charIndex + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 1000) // Delay sebelum hapus
        }
      } else {
        setDisplayedText(text.slice(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
        if (charIndex === 0) {
          setIsDeleting(false)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, text, speed])

  return (
    <span style={{ fontFamily: 'monospace', borderRight: '2px solid #00ffcc', paddingRight: '4px' }}>
      {displayedText}
    </span>
  )
}
