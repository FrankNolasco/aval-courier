import React from 'react'

interface Props {
    type? : "fa" | "fab" | "fas"
    iconName : string
}

const IconFA = ({type="fa" , iconName }: Props) => <i className={`fa ${type}-${iconName}`}></i>

export default IconFA
