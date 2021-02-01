import React from 'react';

const BatsmenDetails = (props) => {
    const { name, dismissalInfo, balls, runScored, fours, sixes, strikeRate, isOut } = props;

    return (
        <tr className ={(!isOut) ? 'blue-grey lighten-5' : ''}>
            <td className={!isOut ? 'border-left' : ''}><span className='player-name text-capitalize'>{name}</span><div className='text-3'>{dismissalInfo}</div></td>
            <td><strong >{runScored}</strong></td>
            <td>{balls}</td>
            <td>{fours}</td>
            <td>{sixes}</td>
            <td>{strikeRate}</td>
        </tr>
    )
}

export default BatsmenDetails
