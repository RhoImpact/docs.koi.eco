import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'

interface ImageZoomProps {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  layout?: 'intrinsic' | 'responsive'
  className?: string
  containerClassName?: string
}

const ImageZoom: React.FC<ImageZoomProps> = ({
  src,
  alt,
  width,
  height,
  caption,
  className,
  containerClassName,
}) => {
  return (
    <div className={`koi-docs-image-container ${containerClassName}`}>
      <Zoom>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`koi-docs-image cursor-zoom-in ${className}`}
        />
      </Zoom>
      {caption && <p className="koi-docs-caption">{caption}</p>}
    </div>
  )
}

export default ImageZoom
