import React from 'react'
import { ImageData } from '../../data'

export const Image: React.FC<ImageData> = ({ imageUrl, description }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={imageUrl} alt={description} />
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}
