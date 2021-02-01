import React from 'react'
import { AppMode } from '../../data'

type ToggleModeProps = {
    allAppModes: AppMode[]
    appMode: AppMode
    onChange: (appMode: AppMode) => void
}

export const ToggleAppMode: React.FC<ToggleModeProps> = ({ appMode, allAppModes, onChange }) => {
    return (
        <div className="btn-group" role="group">
            {allAppModes.map((mode) => (
                <button
                    key={mode}
                    type="button"
                    onClick={() => onChange(mode)}
                    className={'btn ' + (mode === appMode ? 'btn-info active' : 'btn-light')}
                >
                    {AppMode[mode]}
                </button>
            ))}
        </div>
    )
}
