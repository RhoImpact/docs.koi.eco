import React from 'react'

interface YouTubeEmbedProps {
  videoId: string
  title?: string
  caption?: string
  className?: string
  containerClassName?: string
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title = 'YouTube video',
  caption,
  className,
  containerClassName,
}) => {
  return (
    <div className={`koi-docs-video-container my-6 ${containerClassName || ''}`}>
      <div className={`relative w-full overflow-hidden rounded-lg ${className || ''}`} style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
      {caption && (
        <p className="koi-docs-caption mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">
          {caption}
        </p>
      )}
    </div>
  )
}

export default YouTubeEmbed
