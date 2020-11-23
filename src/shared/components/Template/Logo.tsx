import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <Link to = "/" className="Logo">
            <span>AVAL</span><span>courier</span>
        </Link>
    )
}

export default Logo 
