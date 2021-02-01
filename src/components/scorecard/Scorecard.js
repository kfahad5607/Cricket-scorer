import React, { useContext, Fragment, useEffect } from 'react';
import CricketContext from '../../context/cricket/cricketContext';
import { Link } from 'react-router-dom';
import BatsmenTable from './BatsmenTable';
import BatsmenTable2 from './BatsmenTable2';
import BowlerTable from './BowlerTable';
import BowlerTable2 from './BowlerTable2';
import TerminateModal from '../matchDetails/TerminateModal'
import { Row, Col, Card, Accordion } from 'react-bootstrap';

const Scorecard = () => {

    const cricketContext = useContext(CricketContext);
    const { toss, optedTo, homeTeam, awayTeam, secondInning, isMatchFinished, winner, playerPerTeam, setTheme,
        firstInning, firstInningInfo, teamTotal, teamWicket, oversBowled, overs, ballCount, setShowTerminateMatchModal } = cricketContext;

    useEffect(() => {
        let retrievedColor = localStorage.getItem('theme')
        if (retrievedColor) {
            let color = JSON.parse(retrievedColor)
            setTheme(color)
        }
        else {
            setTheme('purple')
        }

        // eslint-disable-next-line
    }, [localStorage.getItem('theme')]);

    if (firstInning || !secondInning) {
        if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
            return (
                <Fragment>
                    <TerminateModal />
                    <div className='heading border-rounded mt-3'>
                        <Row>
                            <Col lg={10} md={8} sm={8} xs={8}><h1 className='ml-4'>Scorecard</h1></Col>
                            <Col lg={1} md={2} sm={2} xs={2} className='pt-2'>
                                <span>  <Link to='/scoreboard' className='fa fa-mail-reply' style={{ fontSize: '30px', color: 'white' }} ></Link></span></Col>
                            <Col lg={1} md={2} sm={2} xs={2} className='pt-2'> <span><Link to={'#'} onClick={() => setShowTerminateMatchModal(true)} className='fa fa-trash' style={{ fontSize: '30px', color: 'white' }}></Link></span></Col>
                        </Row>
                    </div>
                    <br />
                    {/* part */}
                    <div className=' border-rounded box-shadow' >
                        <Card.Header className='border-rounded'>
                            <Row>
                                <Col lg={10} md={10} sm={10} xs={10}>
                                    <strong className='font-weight-bolder text-1'>{homeTeam}</strong>
                                </Col>
                                <Col lg='auto' md='auto' sm='auto' xs='auto'>
                                    <strong className='font-weight-bolder float-right text-1'>{`${teamTotal}/${teamWicket}`}</strong>
                                </Col>
                            </Row>
                            <Row className='mt-2 mb-1'>
                                <Col>
                                    {((!secondInning) && ((toss === 'home' && optedTo === 'bowl')))
                                        && <div className='text-danger text-1'>{`${homeTeam} won the toss and opted to ${optedTo} first.`}</div>}

                                    {((!secondInning) && ((toss === 'home' && optedTo === 'bat')))
                                        && <div className='text-danger text-1'>{`${homeTeam} won the toss and opted to ${optedTo} first.`}</div>}

                                    {((!secondInning) && ((toss === 'away' && optedTo === 'bowl')))
                                        && <div className='text-danger text-1'>{`${awayTeam} won the toss and opted to ${optedTo} first.`}</div>}

                                    {((!secondInning) && ((toss === 'away' && optedTo === 'bat')))
                                        && <div className='text-danger text-1'>{`${awayTeam} won the toss and opted to ${optedTo} first.`}</div>}

                                </Col>
                            </Row>
                        </Card.Header>
                    </div>

                    <br />
                    <div className=' border-rounded box-shadow' >
                        <Accordion defaultActiveKey="0">
                            <Card className='border-rounded'>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className='cursor-pointer'>
                                    <Row>
                                        <Col lg={10} md={10} sm={10} xs={8}><strong className='accordion-bar'><big>{homeTeam}</big></strong></Col>
                                        <Col lg='auto' md='auto' sm='auto' xs={4}><strong className='accordion-bar'><big>{`${teamTotal}/${teamWicket}`}</big></strong></Col>
                                    </Row>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div>
                                        <BatsmenTable />
                                        <BowlerTable />
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                    <br />
                    <br />
                </Fragment>
            )
        }

        else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
            return (
                <Fragment>
                    <TerminateModal />
                    <div className='heading border-rounded mt-3'>
                        <Row>
                            <Col lg={10} md={8} sm={8} xs={8}><h1 className='ml-4'>Scorecard</h1></Col>
                            <Col lg={1} md={2} sm={2} xs={2} className='pt-2'>
                                <span>  <Link to='/scoreboard' className='fa fa-mail-reply' style={{ fontSize: '30px', color: 'white' }} ></Link></span></Col>
                            <Col lg={1} md={2} sm={2} xs={2} className='pt-2'> <span><Link to={'#'} onClick={() => setShowTerminateMatchModal(true)} className='fa fa-trash' style={{ fontSize: '30px', color: 'white' }}></Link></span></Col>
                        </Row>
                    </div>
                    <br />
                    {/* part */}
                    <div className=' border-rounded box-shadow' >
                        <Card.Header className='border-rounded'>
                            <Row>
                                <Col lg={10} md={10} sm={10} xs={10}>
                                    <strong className='font-weight-bolder text-1'>{awayTeam}</strong>
                                </Col>
                                <Col lg='auto' md='auto' sm='auto' xs='auto'>
                                    <strong className='font-weight-bolder float-right text-1'>{`${teamTotal === undefined ? 0 : teamTotal}/${teamWicket}`}</strong>
                                </Col>
                            </Row>
                            <Row className='mt-2 mb-1'>
                                <Col>
                                    {((!secondInning) && ((toss === 'home' && optedTo === 'bowl')))
                                        && <div className='text-danger text-1'>{`${homeTeam} won the toss and opted to ${optedTo} first.`}</div>}

                                    {((!secondInning) && ((toss === 'home' && optedTo === 'bat')))
                                        && <div className='text-danger text-1'>{`${homeTeam} won the toss and opted to ${optedTo} first.`}</div>}

                                    {((!secondInning) && ((toss === 'away' && optedTo === 'bowl')))
                                        && <div className='text-danger text-1'>{`${awayTeam} won the toss and opted to ${optedTo} first.`}</div>}

                                    {((!secondInning) && ((toss === 'away' && optedTo === 'bat')))
                                        && <div className='text-danger text-1'>{`${awayTeam} won the toss and opted to ${optedTo} first.`}</div>}

                                </Col>
                            </Row>
                        </Card.Header>
                    </div>
                    <br />
                    {/* Partition */}
                    <div className=' border-rounded box-shadow' >
                        <Accordion defaultActiveKey="0" >
                            <Card className='border-rounded'>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className='cursor-pointer'>
                                    <Row>
                                        <Col lg={10} md={10} sm={10} xs={8}><strong className='accordion-bar'><big>{awayTeam}</big></strong></Col>
                                        <Col lg='auto' md='auto' sm='auto' xs={4}><strong className='accordion-bar'><big>{`${teamTotal}/${teamWicket}`}</big></strong></Col>
                                    </Row>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div>
                                        <BatsmenTable />
                                        <BowlerTable />
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                    <br />
                    <br />
                </Fragment>
            )
        }
    }
    else if (!firstInning && secondInning) {
        if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
            return (
                <Fragment>
                    <TerminateModal />
                    <div className='heading border-rounded mt-3'>
                        <Row>
                            <Col lg={10} md={8} sm={8} xs={8}><h1 className='ml-4'>Scorecard</h1></Col>
                            <Col lg={1} md={2} sm={2} xs={2} className='pt-2'>
                                <span>  <Link to='/scoreboard' className='fa fa-mail-reply' style={{ fontSize: '30px', color: 'white' }} ></Link></span></Col>
                            <Col lg={1} md={2} sm={2} xs={2} className='pt-2'> <span><Link to={'#'} onClick={() => setShowTerminateMatchModal(true)} className='fa fa-trash' style={{ fontSize: '30px', color: 'white' }}></Link></span></Col>
                        </Row>
                    </div>
                    <br />
                    {/* part */}
                    <div className=' border-rounded box-shadow' >
                        <Card.Header className='border-rounded'>
                            <Row>
                                <Col lg={9} md={8} sm={7} xs={3}>
                                    <strong className='font-weight-bolder text-1'>{homeTeam}</strong>
                                </Col>
                                {secondInning ? <Col lg={2} md={3} sm={4} xs={7} ><strong className='font-weight-bolder text-black-50 float-right text-1'>{`(${firstInningInfo.oversPlayed}/${overs}.0)`}</strong></Col>
                                    :
                                    <Col lg={2} md={3} sm={4} xs={7} ><strong className='float-right font-weight-bolder text-black-50 text-1'>{`(${oversBowled}/${overs}.0)`}</strong></Col>
                                }
                                <Col lg={1} md={1} sm={1} xs={2}>
                                    <strong className='font-weight-bolder float-right text-1'>{`${firstInningInfo.totalRunScored === undefined ? teamTotal : firstInningInfo.totalRunScored}/${firstInningInfo.wicketsLost === undefined ? teamWicket : firstInningInfo.wicketsLost}`}</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={9} md={7} sm={7} xs={3}>
                                    <strong className='font-weight-bolder text-1'>{awayTeam}</strong>
                                </Col>
                                <Col lg={2} md={4} sm={4} xs={7}>
                                    <strong className='float-right text-black-50 text-1'>{`${oversBowled}/${overs}.0,`} tar. {firstInningInfo.totalRunScored + 1}</strong>
                                </Col>
                                <Col lg={1} md={1} sm={1} xs={2}>
                                    <strong className='font-weight-bolder float-right text-1'>{`${secondInning ? teamTotal : '0'}/${secondInning ? teamWicket : '0'}`}</strong>
                                </Col>
                            </Row>
                            <Row className='mt-2 mb-1'>
                                <Col lg='auto' md='auto' sm='auto' xs='auto' >
                                    {((isMatchFinished && winner === 'home') && ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')))
                                        && <div className='text-danger text-1'>{`${homeTeam} won the match by ${playerPerTeam - 1 - teamWicket} wickets.`}</div>}

                                    {((isMatchFinished && winner === 'home') && ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')))
                                        && <div className='text-danger text-1'>{`${homeTeam} won the match by ${firstInningInfo.totalRunScored - teamTotal} runs.`}</div>}

                                    {((isMatchFinished && winner === 'away') && ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')))
                                        && <div className='text-danger text-1'>{`${awayTeam} won the match by ${firstInningInfo.totalRunScored - teamTotal} runs.`}</div>}

                                    {((isMatchFinished && winner === 'away') && ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')))
                                        && <div className='text-danger text-1'>{`${awayTeam} won the match by ${playerPerTeam - 1 - teamWicket} wickets.`}</div>}

                                    {((isMatchFinished && winner === 'draw'))
                                        && <div className='text-danger text-1'>{`Match was drawn.`}</div>}

                                    {((secondInning && !isMatchFinished) && ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')))
                                        && <div className='text-danger text-1'>{`${awayTeam} need ${firstInningInfo.totalRunScored + 1 - teamTotal} runs in ${(overs * 6) - ballCount} balls to win.`}</div>}

                                    {((secondInning && !isMatchFinished) && ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')))
                                        && <div className='text-danger text-1'>{`${homeTeam} need ${firstInningInfo.totalRunScored + 1 - teamTotal} runs in ${(overs * 6) - ballCount} balls to win.`}</div>}

                                </Col>
                            </Row>
                        </Card.Header>
                    </div>
                    {/* Partition */}
                    <br />
                    <Accordion defaultActiveKey="1">
                        <div className=' border-rounded box-shadow' >
                            <Card className='border-rounded'>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className='cursor-pointer'>
                                    <Row>
                                        <Col lg={10} md={10} sm={10} xs={8}><strong><big>{homeTeam}</big></strong></Col>
                                        <Col lg='auto' md='auto' sm='auto' xs={4}><strong><big>{`${firstInningInfo.totalRunScored === undefined ? teamTotal : firstInningInfo.totalRunScored}/${firstInningInfo.wicketsLost === undefined ? teamWicket : firstInningInfo.wicketsLost}`}</big></strong></Col>
                                    </Row>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div>
                                        <BatsmenTable2 />
                                        <BowlerTable2 />
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </div>
                        <br />

                        <div className=' border-rounded box-shadow' >
                            <Card className='border-rounded'>
                                <Accordion.Toggle as={Card.Header} eventKey="1" className='cursor-pointer'>
                                    <Row>
                                        <Col lg={10} md={10} sm={10} xs={8}><strong className='accordion-bar'><big>{awayTeam}</big></strong></Col>
                                        <Col lg='auto' md='auto' sm='auto' xs={4}><strong className='accordion-bar'><big>{`${secondInning ? teamTotal : '0'}/${secondInning ? teamWicket : '0'}`}</big></strong></Col>
                                    </Row>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <div>
                                        <BatsmenTable />
                                        <BowlerTable />
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </div>
                    </Accordion>
                    <br />
                    <br />
                </Fragment>
            )
        }

        else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
            return (
                <Fragment>
                    <TerminateModal />
                    <div className='heading border-rounded mt-3'>
                        <Row>
                            <Col lg={10} md={8} sm={8} xs={8}><h1 className='ml-4'>Scorecard</h1></Col>
                            <Col lg={1} md={2} sm={2} xs={2} className='pt-2'>
                                <span>  <Link to='/scoreboard' className='fa fa-mail-reply' style={{ fontSize: '30px', color: 'white' }} ></Link></span></Col>
                            <Col lg={1} md={2} sm={2} xs={2} className='pt-2'> <span><Link to={'#'} onClick={() => setShowTerminateMatchModal(true)} className='fa fa-trash' style={{ fontSize: '30px', color: 'white' }}></Link></span></Col>
                        </Row>
                    </div>
                    <br />
                    {/* part */}

                    <div className=' border-rounded box-shadow' >
                        <Card.Header className='border-rounded'>
                            <Row>
                                <Col lg={9} md={8} sm={7} xs={3}>
                                    <strong className='font-weight-bolder text-1'>{awayTeam}</strong>
                                </Col>
                                {secondInning ? <Col lg={2} md={3} sm={4} xs={7} ><strong className='font-weight-bolder text-black-50  float-right text-1'>{`(${firstInningInfo.oversPlayed}/${overs}.0)`}</strong></Col>
                                    :
                                    <Col lg={2} md={3} sm={4} xs={7} ><strong className='font-weight-bolder text-black-50  float-right text-1'>{`(${oversBowled}/${overs}.0)`}</strong></Col>
                                }
                                <Col lg={1} md={1} sm={1} xs={2}>
                                    <strong className='font-weight-bolder float-right text-1'>{`${firstInningInfo.totalRunScored === undefined ? teamTotal : firstInningInfo.totalRunScored}/${firstInningInfo.wicketsLost === undefined ? teamWicket : firstInningInfo.wicketsLost}`}</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={9} md={7} sm={7} xs={3}>
                                    <strong className='font-weight-bolder text-1'>{homeTeam}</strong>
                                </Col>
                                <Col lg={2} md={4} sm={4} xs={7}>
                                    <strong className='float-right text-black-50 text-1'>{`${oversBowled}/${overs}.0,`} tar. {firstInningInfo.totalRunScored + 1}</strong>
                                </Col>
                                <Col lg={1} md={1} sm={1} xs={2}>
                                    <strong className='font-weight-bolder float-right text-1'>{`${secondInning ? teamTotal : '0'}/${secondInning ? teamWicket : '0'}`}</strong>
                                </Col>
                            </Row>
                            <Row className='mt-2 mb-1'>
                                <Col>
                                    {((isMatchFinished && winner === 'home') && ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')))
                                        && <div className='text-danger text-1'>{`${homeTeam} won the match by ${playerPerTeam - 1 - teamWicket} wickets.`}</div>}

                                    {((isMatchFinished && winner === 'home') && ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')))
                                        && <div className='text-danger text-1'>{`${homeTeam} won the match by ${firstInningInfo.totalRunScored - teamTotal} runs.`}</div>}

                                    {((isMatchFinished && winner === 'away') && ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')))
                                        && <div className='text-danger text-1'>{`${awayTeam} won the match by ${firstInningInfo.totalRunScored - teamTotal} runs.`}</div>}

                                    {((isMatchFinished && winner === 'away') && ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')))
                                        && <div className='text-danger text-1'>{`${awayTeam} won the match by ${playerPerTeam - 1 - teamWicket} wickets.`}</div>}

                                    {((isMatchFinished && winner === 'draw'))
                                        && <div className='text-danger text-1'>{`Match was drawn.`}</div>}

                                    {((secondInning && !isMatchFinished) && ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')))
                                        && <div className='text-danger text-1'>{`${awayTeam} need ${firstInningInfo.totalRunScored + 1 - teamTotal} runs in ${(overs * 6) - ballCount} balls to win.`}</div>}

                                    {((secondInning && !isMatchFinished) && ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')))
                                        && <div className='text-danger text-1'>{`${homeTeam} need ${firstInningInfo.totalRunScored + 1 - teamTotal} runs in ${(overs * 6) - ballCount} balls to win.`}</div>}
                                </Col>
                            </Row>
                        </Card.Header>
                    </div>
                    <br />
                    {/* Partition */}
                    <Accordion defaultActiveKey="1">
                        <div className=' border-rounded box-shadow' >
                            <Card className='border-rounded'>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className='cursor-pointer'>
                                    <Row>
                                        <Col lg={10} md={10} sm={10} xs={8}><strong><big>{awayTeam}</big></strong></Col>
                                        <Col lg='auto' md='auto' sm='auto' xs={4}><strong><big>{`${firstInningInfo.totalRunScored === undefined ? teamTotal : firstInningInfo.totalRunScored}/${firstInningInfo.wicketsLost === undefined ? teamWicket : firstInningInfo.wicketsLost}`}</big></strong></Col>
                                    </Row>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div>
                                        <BatsmenTable2 />
                                        <BowlerTable2 />
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </div>
                        <br />

                        <div className=' border-rounded box-shadow' >
                            <Card className='border-rounded'>
                                <Accordion.Toggle as={Card.Header} eventKey="1" className='cursor-pointer'>
                                    <Row>
                                        <Col lg={10} md={10} sm={10} xs={8}><strong className='accordion-bar'><big>{homeTeam}</big></strong></Col>
                                        <Col lg='auto' md='auto' sm='auto' xs={4}><strong className='accordion-bar'><big>{`${teamTotal}/${teamWicket}`}</big></strong></Col>
                                    </Row>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <div>
                                        <BatsmenTable />
                                        <BowlerTable />
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </div>
                    </Accordion>
                    <br />
                    <br />
                </Fragment>
            )
        }
    }
    else {
        return null;
    }
}

export default Scorecard
