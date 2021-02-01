import React, { useEffect, useState } from 'react'
import { ImageData } from '../../data'
import Actions from '../Actions'
import Counter from '../Counter'
import Image from '../Image'

const NEXT_IN_SEC = 10

type JumbotronProps = {
    images: ImageData[]
}

export const Jumbotron: React.FC<JumbotronProps> = ({ images }) => {
    const [index, setIndex] = useState(0)
    const [counter, setCounter] = useState(NEXT_IN_SEC)

    const handlePrev = () =>
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1))
    const handleNext = () =>
        setIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0))

    // reset index every time images changed
    useEffect(() => setIndex(0), [images])

    useEffect(() => {
        setCounter(NEXT_IN_SEC)

        const intervalId =
            images.length > 1
                ? setInterval(() => setCounter((prev) => (prev > 0 ? prev - 1 : 0)), 1000)
                : undefined

        return () => intervalId && clearInterval(intervalId)
    }, [images, index])

    useEffect(() => {
        if (counter === 0) {
            handleNext()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter])

    if (images.length === 0) return <h3>No images</h3>
    if (images.length === 1) return <Image {...images[0]} />

    return (
        <>
            <Image {...images[index]} />

            <Actions onPrev={handlePrev} onNext={handleNext} />

            <Counter counter={counter} />
        </>
    )
}
