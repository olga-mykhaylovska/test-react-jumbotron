import React from 'react'
import { AppMode } from '../../data'

type ToggleModeProps = {
    allModes: AppMode[]
    selectedMode: AppMode
    onChange: (mode: AppMode) => void
}

export const ToggleAppMode: React.FC<ToggleModeProps> = ({ selectedMode, allModes, onChange }) => {
    return (
        <div className="btn-group" role="group">
            {allModes.map((mode) => (
                <button
                    key={mode}
                    type="button"
                    onClick={() => onChange(mode)}
                    className={'btn ' + (mode === selectedMode ? 'btn-info active' : 'btn-light')}
                >
                    {AppMode[mode]}
                </button>
            ))}
        </div>
    )
}
