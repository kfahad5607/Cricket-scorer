import React, { Fragment, useContext } from 'react';
import BowlerDetails from './BowlerDetails';
import CricketContext from '../../context/cricket/cricketContext';
import { Table} from 'react-bootstrap';

const BowlerTable2 = () => {
    const cricketContext = useContext(CricketContext);
    const { toss, optedTo, homeTeamBowlScorecardArray, awayTeamBowlScorecardArray, firstInning ,secondInning} = cricketContext;



    if (!firstInning && secondInning) {
        if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
            return (
                <Fragment>
                    <Table responsive hover size="sm">
                        <thead className='text-1'>
                            <tr style={{ color: '#2B2C2D'}}>
                                <th>Bowler</th>
                                <th>O</th>
                                <th>M</th>
                                <th>R</th>
                                <th>W</th>
                                <th>E/R</th>
                            </tr>
                        </thead>
                        <tbody className='text-1'>
                            {awayTeamBowlScorecardArray.map((atbsc) => {
                                return <BowlerDetails key={atbsc.id}
                                    name={atbsc.name}
                                    overs={atbsc.overs}
                                    maidens={atbsc.maidens}
                                    runConceded={atbsc.runConceded}
                                    wickets={atbsc.wickets}
                                    economyRate={atbsc.economyRate}
                                />
                            })}

                        </tbody>
                    </Table>
                </Fragment>
            )
        }
        else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
            return (
                <Fragment>
                    <Table responsive hover size="sm">
                        <thead className='text-1'>
                            <tr style={{ color: '#2B2C2D'}}>
                                <th>Bowler</th>
                                <th>O</th>
                                <th>M</th>
                                <th>R</th>
                                <th>W</th>
                                <th>E/R</th>
                            </tr>
                        </thead>
                        <tbody className='text-1'>
                            {homeTeamBowlScorecardArray.map((htbsc) => {
                                return <BowlerDetails key={htbsc.id}
                                    name={htbsc.name}
                                    overs={htbsc.overs}
                                    maidens={htbsc.maidens}
                                    runConceded={htbsc.runConceded}
                                    wickets={htbsc.wickets}
                                    economyRate={htbsc.economyRate}
                                />
                            })}

                        </tbody>
                    </Table>
                </Fragment>
            )
        }
    }


}

export default BowlerTable2
