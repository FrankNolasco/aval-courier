import React from 'react'
import HeaderBar from './components/Template/HeaderBar'
import LateralBar from './components/Template/LateralBar'
import Main from './components/Template/Main'
import './styles/Template.css'
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