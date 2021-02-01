import React from 'react'

type CounterProps = {
    counter: number
}

export const Counter: React.FC<CounterProps> = ({ counter }) => {
    return (
        <div className="card mt-3">
            <div className="card-body">next image in {counter} sec</div>
        </div>
    )
}
