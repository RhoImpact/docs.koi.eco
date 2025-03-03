import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'

interface ImageZoomProps {
  src: string
  alt: string
  width: number
  height: number
  layout?: 'intrinsic' | 'responsive'
  containerClassName?: string
  className?: string
}

const ImageZoom: React.FC<ImageZoomProps> = ({
  src,
  alt,
  width,
  height,
  containerClassName,
  className,
}) => {
  return (
    <div className={containerClassName}>
      <Zoom>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`cursor-zoom-in ${className}`}
        />
      </Zoom>
    </div>
  )
}

export default ImageZoom
