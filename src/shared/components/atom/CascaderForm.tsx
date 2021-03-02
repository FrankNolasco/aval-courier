import React, { Fragment, useState } from 'react'
import { CascadeSelect } from 'primereact/cascadeselect'

const CascaderForm = (props: any) => {
    const [value, setValue] = useState(null)
    return (
        <Fragment>
            <CascadeSelect
                value={value}
                options={props.options}
                onChange={(e) => {
                    setValue(e.value)
                    props.onChange(e)
                }}
                {...props}
            />
        </Fragment>
    )
}

export default CascaderForm
