import React from 'react';

const BowlerDetails = (props) => {
    const { name, overs, maidens, runConceded, wickets, economyRate } = props

    return (
        <tr>
            <td><span className='player-name text-capitalize'>{name}</span></td>
            <td>{overs}</td>
            <td>{maidens}</td>
            <td>{runConceded}</td>
            <td>{wickets}</td>
            <td>{(economyRate === 'Infinity') ? '0.00' : economyRate}</td>
        </tr>
    )
}

export default BowlerDetails
