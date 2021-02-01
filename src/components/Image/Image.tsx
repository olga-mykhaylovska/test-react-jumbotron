import React from 'react'
import { ImageData } from '../../data'

export const Image: React.FC<ImageData> = ({ imageUrl, description }) => {
    return <img src={imageUrl} alt={description} />
}
