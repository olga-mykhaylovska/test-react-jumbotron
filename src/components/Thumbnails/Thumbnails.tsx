import React from 'react'
import { ImageInfo } from '../../data'
import './Thumbnails.css'

type ThumbnailsProps = {
    index: number
    images: ImageInfo[]
    onChange?: (index: number) => void
}

export const Thumbnails: React.FC<ThumbnailsProps> = ({ index, images, onChange }) => {
    return (
        <div className="mt-1">
            {images.map((image, idx) => (
                <img
                    key={image.imageUrl}
                    src={image.imageUrl}
                    alt={image.description}
                    width="50"
                    className={
                        'img-link img-thumbnail m-1 p-2 ' + (idx === index ? 'bg-primary' : '')
                    }
                    onClick={() => onChange?.(idx)}
                />
            ))}
        </div>
    )
}
