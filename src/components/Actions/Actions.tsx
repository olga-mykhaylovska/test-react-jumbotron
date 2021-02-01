import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type ActionsProps = {
    onPrev: () => void
    onNext: () => void
}

export const Actions: React.FC<ActionsProps> = ({ onPrev, onNext }) => {
    return (
        <div className="clearfix mt-3">
            <button className="btn btn-lg btn-primary float-left" onClick={onPrev}>
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </button>

            <button className="btn btn-lg btn-primary float-right" onClick={onNext}>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </div>
    )
}
