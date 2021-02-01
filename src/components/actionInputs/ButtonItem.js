import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonItem = (props) => {
    return (
        <Button variant='' className='mt-3 mb-3 btn  btn-md btn-circular text-1' size='sm' style={buttonStyle}  value={props.value} onClick={props.onClick} >{props.value}</Button>
    )
}
const buttonStyle = {
    marginRight: '3rem'
}

export default ButtonItem
