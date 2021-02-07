import React from 'react'
import { ImageData } from '../../data'
import './Thumbnails.css'

type ThumbnailsProps = {
    index: number
    images: ImageData[]
    onChange?: (index: number) => void
}

export const Thumbnails: React.FC<ThumbnailsProps> = ({ index, images, onChange }) => {
    return (
        <div className="mt-1">
            {images.map((image, idx) => (
                <img
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
