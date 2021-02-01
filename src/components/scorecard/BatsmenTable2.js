import React, { Fragment, useContext } from 'react';
import BatsmenDetails from './BatsmenDetails';
import CricketContext from '../../context/cricket/cricketContext';
import { Row, Col, Table, Card } from 'react-bootstrap';

const BatsmenTable2 = () => {
    const cricketContext = useContext(CricketContext);
    const { toss, optedTo, homeTeamBatScorecardArray,
        homeTeamPlayer, awayTeamBatScorecardArray, firstInningInfo, secondInning
        , awayTeamPlayer, firstInning, teamTotal, teamWicket, oversBowled, ballCount } = cricketContext;

    if (!firstInning && secondInning) {
        if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
            return (
                <Fragment>
                    <Table responsive hover size="sm">
                        <thead className='text-1'>
                            <tr style={{ color: '#2B2C2D' }}>
                                <th>Batsmen</th>
                                <th>R</th>
                                <th>B</th>
                                <th>4s</th>
                                <th>6s</th>
                                <th>S/R</th>
                            </tr>
                        </thead>
                        <tbody className='text-1'>
                            {homeTeamBatScorecardArray.map((htbsc) => {
                                return <BatsmenDetails key={htbsc.id}
                                    name={htbsc.name}
                                    dismissalInfo={htbsc.dismissalInfo}
                                    runScored={htbsc.runScored}
                                    balls={htbsc.balls}
                                    fours={htbsc.fours}
                                    sixes={htbsc.sixes}
                                    strikeRate={htbsc.strikeRate}
                                    isOut={htbsc.isOut}

                                />
                            })}

                        </tbody>
                    </Table>
                    {/* <Row> */}
                    <Card.Header>
                        <Row>
                            <Col lg='auto' md='auto' sm='auto' xs='auto'><span className='text-1'>TOTAL</span></Col>
                            {secondInning ? <Col lg='auto' md='auto' sm='auto' xs='auto'><strong className='text-1'>{`${firstInningInfo.totalRunScored}/${firstInningInfo.wicketsLost}`}</strong></Col>
                                : <Col lg='auto' md='auto' sm='auto' xs='auto'><strong className='text-1'>{`${teamTotal}/${teamWicket}`}</strong></Col>}
                            {secondInning ? <Col lg='auto' md='auto' sm='auto' xs='auto'><span className='text-1'>{`(${firstInningInfo.oversPlayed} Overs,
                                 CRR: ${(((firstInningInfo.totalRunScored / (firstInningInfo.ballsPlayed)) * 6).toFixed(2)) > 36 ? '36.00+'
                                    : isNaN(((firstInningInfo.totalRunScored / (firstInningInfo.ballsPlayed)) * 6).toFixed(2)) ? '0.00'
                                        : ((firstInningInfo.totalRunScored / (firstInningInfo.ballsPlayed)) * 6).toFixed(2)}
                                )`}</span></Col>
                                :
                                <Col lg='auto' md='auto' sm='auto' xs='auto'><span className='text-1'>{`(${oversBowled} Overs,
                                 CRR: ${(((teamTotal / (ballCount)) * 6).toFixed(2)) > 36 ? '36.00+'
                                        : isNaN(((teamTotal / (ballCount)) * 6).toFixed(2)) ? '0.00'
                                            : ((teamTotal / (ballCount)) * 6).toFixed(2)}
                                )`}</span></Col>
                            }
                        </Row>
                    </Card.Header>

                    <Card.Header>
                        <Row>
                            <Col lg='auto' md='auto' sm='auto' xs='auto'>
                                <strong className='text-1'>Did not bat: </strong>
                            </Col>
                            {homeTeamPlayer.map((htp, index) => {
                                if (!htp.didBat) {
                                    if (homeTeamPlayer.length !== index + 1) {
                                        return <Col key={htp.id} lg='auto' md='auto' sm='auto' xs='auto'><span className='text-1 player-name text-capitalize'>{htp.name},</span></Col>
                                    }
                                    else if (homeTeamPlayer.length === index + 1) {
                                        return <Col key={htp.id} lg='auto' md='auto' sm='auto' xs='auto'><span className='text-1 player-name text-capitalize'>{htp.name}</span></Col>
                                    }
                                    else {
                                        return null;
                                    }

                                }
                                else {
                                    return null;
                                }
                            })}
                        </Row>
                    </Card.Header>
                </Fragment>
            )
        }
        else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
            return (
                <Fragment>
                    <Table responsive hover size="sm">
                        <thead className='text-1'>
                            <tr style={{ color: '#2B2C2D' }}>
                                <th>Batsmen</th>
                                <th>R</th>
                                <th>B</th>
                                <th>4s</th>
                                <th>6s</th>
                                <th>S/R</th>
                            </tr>
                        </thead>
                        <tbody className='text-1'>
                            {awayTeamBatScorecardArray.map((atbsc) => {
                                return <BatsmenDetails key={atbsc.id}
                                    name={atbsc.name}
                                    dismissalInfo={atbsc.dismissalInfo}
                                    runScored={atbsc.runScored}
                                    balls={atbsc.balls}
                                    fours={atbsc.fours}
                                    sixes={atbsc.sixes}
                                    strikeRate={atbsc.strikeRate}
                                    isOut={atbsc.isOut}

                                />
                            })}

                        </tbody>
                    </Table>
                    <Card.Header>
                        <Row>
                            <Col lg='auto' md='auto' sm='auto' xs='auto'><span className='text-1'>TOTAL</span></Col>
                            {secondInning ? <Col lg='auto' md='auto' sm='auto' xs='auto' ><strong className='text-1'>{`${firstInningInfo.totalRunScored}/${firstInningInfo.wicketsLost}`}</strong></Col>
                                : <Col lg='auto' md='auto' sm='auto' xs='auto'><strong className='text-1'>{`${teamTotal}/${teamWicket}`}</strong></Col>}
                            {secondInning ? <Col lg='auto' md='auto' sm='auto' xs='auto'><span className='text-1'>{`(${firstInningInfo.oversPlayed} Overs,
                                 CRR: ${(((firstInningInfo.totalRunScored / (firstInningInfo.ballsPlayed)) * 6).toFixed(2)) > 36 ? '36.00+'
                                    : isNaN(((firstInningInfo.totalRunScored / (firstInningInfo.ballsPlayed)) * 6).toFixed(2)) ? '0.00'
                                        : ((firstInningInfo.totalRunScored / (firstInningInfo.ballsPlayed)) * 6).toFixed(2)}
                                )`}</span></Col> :
                                <Col lg='auto' md='auto' sm='auto' xs='auto'><span className='text-1'>{`(${oversBowled} Overs,
                                 CRR: ${(((teamTotal / (ballCount)) * 6).toFixed(2)) > 36 ? '36.00+'
                                        : isNaN(((teamTotal / (ballCount)) * 6).toFixed(2)) ? '0.00'
                                            : ((teamTotal / (ballCount)) * 6).toFixed(2)}
                                )`}</span></Col>
                            }
                        </Row>
                    </Card.Header>

                    <Card.Header>
                        <Row>
                            <Col lg='auto' md='auto' sm='auto' xs='auto'>
                                <strong className='text-1'>Did not bat: </strong>
                            </Col>
                            {awayTeamPlayer.map((atp, index) => {
                                if (!atp.didBat) {
                                    if (awayTeamPlayer.length !== index + 1) {
                                        return <Col key={atp.id} lg='auto' md='auto' sm='auto' xs='auto'><span className='text-1 player-name text-capitalize'>{atp.name},</span></Col>
                                    }
                                    else if (awayTeamPlayer.length === index + 1) {
                                        return <Col key={atp.id} lg='auto' md='auto' sm='auto' xs='auto'><span className='text-1 player-name text-capitalize'>{atp.name}</span></Col>
                                    }
                                    else {
                                        return null;
                                    }

                                }
                                else {
                                    return null;
                                }
                            })}
                        </Row>
                    </Card.Header>
                </Fragment>
            )
        }
    }


}

export default BatsmenTable2
