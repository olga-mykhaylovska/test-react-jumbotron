import React, { useEffect, useState } from 'react'
import { ImageData } from '../../data'
import Actions from '../Actions'
import Image from '../Image'

const NEXT_TIMEOUT = 10 * 1000 // 10 sec

type JumbotronProps = {
    images: ImageData[]
}

export const Jumbotron: React.FC<JumbotronProps> = ({ images }) => {
    const [index, setIndex] = useState(0)

    const handlePrev = () =>
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1))
    const handleNext = () =>
        setIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0))

    useEffect(() => {
        const timeoutId = images.length > 1 ? setTimeout(handleNext, NEXT_TIMEOUT) : undefined

        return () => timeoutId && clearTimeout(timeoutId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [images, index])

    if (images.length === 0) return <h3>No images</h3>
    if (images.length === 1) return <Image {...images[0]} />

    return (
        <>
            <Image {...images[index]} />

            <Actions onPrev={handlePrev} onNext={handleNext} />
        </>
    )
}
