import React, { useState } from 'react'
import { AppMode, Images } from '../../data'
import Jumbotron from '../Jumbotron'
import ToggleAppMode from '../ToggleAppMode'
import './App.css'

const App = () => {
    const [appMode, setAppMode] = useState(AppMode.Multi)

    const allAppModes = [AppMode.Multi, AppMode.Single, AppMode.NoData]

    const images =
        appMode === AppMode.NoData ? [] : appMode === AppMode.Single ? Images.slice(0, 1) : Images

    return (
        <div className="text-center">
            <div className="mt-3">
                <ToggleAppMode allAppModes={allAppModes} appMode={appMode} onChange={setAppMode} />
            </div>

            <div className="main mt-3">
                <Jumbotron images={images} />
            </div>
        </div>
    )
}

export default App
