import React from 'react'

interface Props {
    children : JSX.Element | JSX.Element[]
}

const DividerRowWrapper = ({children}: Props) => {
    return (
        <div className="global-comp-divider-row-wrapper">
            {children}
        </div>
    )
}

export default DividerRowWrapper
