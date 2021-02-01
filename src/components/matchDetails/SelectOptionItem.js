import React from 'react'

const OptionItem = (props) => {
    return (
        <option value={props.id} name={props.name}>{props.name}</option>
    )
}

export default OptionItem;
