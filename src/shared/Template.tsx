import React from 'react'
import HeaderBar from './components/Template/HeaderBar'
import LateralBar from './components/Template/LateralBar'
import Main from './components/Template/Main'
function Template() {
    return (
        <div>
            <HeaderBar/>
            <LateralBar/>
            <Main/>
        </div>
    )
}
export default Template