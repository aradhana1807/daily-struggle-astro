// src/components/ThemedImage.tsx
import React, { useEffect, useState } from 'react'

interface ThemedImageProps {
  alt: string
  width: number
  height: number
}

const ThemedImage: React.FC<ThemedImageProps> = ({ alt, width, height }) => {
  const [imageSrc, setImageSrc] = useState<string>('/cloudhikari-light.svg')

  useEffect(() => {
    const updateImageSrc = () => {
      const theme = localStorage.getItem('theme') || 'light'
      setImageSrc(
        theme === 'dark' ? '/cloudhikari.svg' : '/cloudhikari-light.svg'
      )
    }

    // Initial check
    updateImageSrc()

    // Update image when theme changes
    window.addEventListener('storage', updateImageSrc)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('storage', updateImageSrc)
    }
  }, [])

  return <img src={imageSrc} alt={alt} width={width} height={height} />
}

export default ThemedImage
