import React, { useState } from 'react'
import { ImageData } from '../../data'
import Image from '../Image'

type JumbotronProps = {
    images: ImageData[]
}

export const Jumbotron: React.FC<JumbotronProps> = ({ images }) => {
    const [index, setIndex] = useState(0)

    if (images.length === 0) return <h3>No images</h3>
    if (images.length === 1) return <Image {...images[0]} />

    return (
        <>
            <Image {...images[index]} />
        </>
    )
}
