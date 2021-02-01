import React, { useState } from 'react'
import { AppMode } from '../../data'
import ToggleAppMode from '../ToggleAppMode'
import './App.css'

const App = () => {
    const [appMode, setAppMode] = useState(AppMode.Multi)

    const allAppModes = [AppMode.Multi, AppMode.Single, AppMode.NoData]

    return (
        <div className="text-center">
            <div className="mt-3">
                <ToggleAppMode allAppModes={allAppModes} appMode={appMode} onChange={setAppMode} />
            </div>
        </div>
    )
}

export default App
