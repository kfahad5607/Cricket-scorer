import React, { useContext, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import OptionItem from './SelectOptionItem';
import { Button, Form, Col, Row } from 'react-bootstrap';
import CricketContext from '../../context/cricket/cricketContext';

const OpenersDropdown = (props) => {
    const cricketContext = useContext(CricketContext);
    const { homeTeamPlayer, awayTeamPlayer, toss, optedTo, setBowler, setStriker, setNonStriker,
        setNextBatsmanArray, setNextBowlerArray,
        setSecondInning, setThingsForSI, setOldMatchExists,
        batsmanNo, setBatsmanNo, setBowlerNo, setShowSecondInningButton,
        bowlerNo, setHomeBatSCArray, setAwayBatSCArray, setShowOpenersModal,
        setHomeBowlSCArray, setAwayBowlSCArray, firstInning } = cricketContext;
    const [newHomeTeamPlayer, setNewHomeTeamPlayer] = useState(homeTeamPlayer);
    const [newAwayTeamPlayer, setNewAwayTeamPlayer] = useState(awayTeamPlayer);
    const [homeBatStrSCRes, setHomeStrBatSCRes] = useState();
    const [homeBatNStrSCRes, setHomeNStrBatSCRes] = useState();
    const [awayBowlSCRes, setAwayBowlSCRes] = useState();
    const [awayBatStrSCRes, setAwayStrBatSCRes] = useState();
    const [awayBatNStrSCRes, setAwayNStrBatSCRes] = useState();
    const [homeBowlSCRes, setHomeBowlSCRes] = useState();
    const [status, setStatus] = useState(false);
    const [showScoreboardButton, setScoreboardButton] = useState(false);

    const onClick = () => {
        if (document.getElementById('strikerSelect').selectedIndex !== 0 && document.getElementById('nonStrikerSelect').selectedIndex !== 0 && document.getElementById('bowlerSelect').selectedIndex !== 0) {
            setShowOpenersModal(false);
            setOldMatchExists(true);
            if (!firstInning) {
                setThingsForSI();
                setShowSecondInningButton(false);
                setSecondInning(true);
            }
            if (firstInning) {
                if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                    homeBatStrSCRes.didBat = true;
                    homeBatNStrSCRes.didBat = true;
                    homeBatStrSCRes.battingNo = batsmanNo;
                    setBatsmanNo();
                    homeBatNStrSCRes.battingNo = batsmanNo;
                    setBatsmanNo();
                    awayBowlSCRes.bowlingNo = bowlerNo;
                    setBowlerNo();
                    setHomeBatSCArray(homeBatStrSCRes);
                    setHomeBatSCArray(homeBatNStrSCRes);
                    setAwayBowlSCArray(awayBowlSCRes);
                }
                else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                    awayBatStrSCRes.didBat = true;
                    awayBatNStrSCRes.didBat = true;
                    awayBatStrSCRes.battingNo = batsmanNo;
                    setBatsmanNo();
                    awayBatNStrSCRes.battingNo = batsmanNo;
                    setBatsmanNo();
                    homeBowlSCRes.bowlingNo = bowlerNo;
                    setBowlerNo();
                    setAwayBatSCArray(awayBatStrSCRes);
                    setAwayBatSCArray(awayBatNStrSCRes);
                    setHomeBowlSCArray(homeBowlSCRes);
                }

            }
            else if (!firstInning) {
                if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                    homeBatStrSCRes.didBat = true;
                    homeBatNStrSCRes.didBat = true;
                    homeBatStrSCRes.battingNo = batsmanNo;
                    setBatsmanNo();
                    homeBatNStrSCRes.battingNo = batsmanNo;
                    setBatsmanNo();
                    awayBowlSCRes.bowlingNo = bowlerNo;
                    setBowlerNo();
                    setHomeBatSCArray(homeBatStrSCRes);
                    setHomeBatSCArray(homeBatNStrSCRes);
                    setAwayBowlSCArray(awayBowlSCRes);
                }
                else if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                    awayBatStrSCRes.didBat = true;
                    awayBatNStrSCRes.didBat = true;
                    awayBatStrSCRes.battingNo = batsmanNo;
                    setBatsmanNo();
                    awayBatNStrSCRes.battingNo = batsmanNo;
                    setBatsmanNo();
                    homeBowlSCRes.bowlingNo = bowlerNo;
                    setBowlerNo();
                    setAwayBatSCArray(awayBatStrSCRes);
                    setAwayBatSCArray(awayBatNStrSCRes);
                    setHomeBowlSCArray(homeBowlSCRes);
                }
            }
        }
        else {
            setScoreboardButton(false);
            alert('Please select batsmen and bowler.')
            setScoreboardButton(false);
        }
        // setScoreboardButton(false)
    }

    const onChangeFirst = (e) => {
        if (document.getElementById('strikerSelect').selectedIndex === 0 || document.getElementById('nonStrikerSelect').selectedIndex === 0 || document.getElementById('bowlerSelect').selectedIndex === 0) {
            setScoreboardButton(false);
        }
        else if (document.getElementById('strikerSelect').selectedIndex !== 0 && document.getElementById('nonStrikerSelect').selectedIndex !== 0 && document.getElementById('bowlerSelect').selectedIndex !== 0) {
            setScoreboardButton(true);
        }
        // resetting the nonStriker dropdown
        if (firstInning) {
            if (e.target.name === 'strikerSelect') {
                document.getElementById('nonStrikerSelect').selectedIndex = '0';
            }
            if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                if (e.target.name === 'strikerSelect') {
                    let nHTP = homeTeamPlayer.filter((nhtp) => {
                        return nhtp.id !== e.target.value
                    });
                    let strikerRes = homeTeamPlayer.filter((nhtp) => {
                        return nhtp.id === e.target.value
                    });
                    setHomeStrBatSCRes(strikerRes[0]);
                    setStriker(strikerRes[0])
                    setNewHomeTeamPlayer(nHTP);
                    setStatus(true);
                }
                else if (e.target.name === 'nonStrikerSelect') {
                    let nonStrikerRes = newHomeTeamPlayer.filter((nhtp) => {
                        return nhtp.id === e.target.value
                    });
                    let nextBatsmanArray = newHomeTeamPlayer.filter((nhtp) => {
                        return nhtp.id !== e.target.value
                    });
                    setHomeNStrBatSCRes(nonStrikerRes[0]);
                    setNextBatsmanArray(nextBatsmanArray)
                    setNonStriker(nonStrikerRes[0])
                }
                else if (e.target.name === 'bowlerSelect') {
                    let bowlerRes = awayTeamPlayer.filter((atp) => {
                        return atp.id === e.target.value
                    });
                    let nextBowlerArray = awayTeamPlayer.filter((atp) => {
                        return atp.id !== e.target.value
                    });
                    setNextBowlerArray(nextBowlerArray);
                    setAwayBowlSCRes(bowlerRes[0]);
                    setBowler(bowlerRes[0]);
                }

            }
            else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                if (e.target.name === 'strikerSelect') {
                    let nATP = awayTeamPlayer.filter((natp) => {
                        return natp.id !== e.target.value
                    });

                    let strikerRes = awayTeamPlayer.filter((natp) => {
                        return natp.id === e.target.value
                    });
                    setAwayStrBatSCRes(strikerRes[0]);
                    setStriker(strikerRes[0])
                    setNewAwayTeamPlayer(nATP);
                    setStatus(true);
                }
                else if (e.target.name === 'nonStrikerSelect') {
                    let nonStrikerRes = newAwayTeamPlayer.filter((natp) => {
                        return natp.id === e.target.value
                    });
                    let nextBatsmanArray = newAwayTeamPlayer.filter((natp) => {
                        return natp.id !== e.target.value
                    });
                    setNextBatsmanArray(nextBatsmanArray);
                    setAwayNStrBatSCRes(nonStrikerRes[0]);
                    setNonStriker(nonStrikerRes[0])
                }
                else if (e.target.name === 'bowlerSelect') {
                    let bowlerRes = homeTeamPlayer.filter((htp) => {
                        return htp.id === e.target.value
                    });
                    let nextBowlerArray = homeTeamPlayer.filter((htp) => {
                        return htp.id !== e.target.value
                    });
                    setNextBowlerArray(nextBowlerArray);
                    setHomeBowlSCRes(bowlerRes[0]);
                    setBowler(bowlerRes[0])
                }


            }
        }
        else if (!firstInning) {
            if (e.target.name === 'strikerSelect') {
                document.getElementById('nonStrikerSelect').selectedIndex = '0';
            }
            if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                if (e.target.name === 'strikerSelect') {
                    let nHTP = homeTeamPlayer.filter((nhtp) => {
                        return nhtp.id !== e.target.value
                    });
                    let strikerRes = homeTeamPlayer.filter((nhtp) => {
                        return nhtp.id === e.target.value
                    });
                    setHomeStrBatSCRes(strikerRes[0])
                    setStriker(strikerRes[0]);
                    setNewHomeTeamPlayer(nHTP);
                    setStatus(true);
                }
                else if (e.target.name === 'nonStrikerSelect') {
                    let nonStrikerRes = newHomeTeamPlayer.filter((nhtp) => {
                        return nhtp.id === e.target.value
                    });
                    let nextBatsmanArray = newHomeTeamPlayer.filter((nhtp) => {
                        return nhtp.id !== e.target.value
                    });
                    setNextBatsmanArray(nextBatsmanArray);
                    setHomeNStrBatSCRes(nonStrikerRes[0]);
                    setNonStriker(nonStrikerRes[0])
                }
                else if (e.target.name === 'bowlerSelect') {
                    let bowlerRes = awayTeamPlayer.filter((atp) => {
                        return atp.id === e.target.value
                    });
                    let nextBowlerArray = awayTeamPlayer.filter((atp) => {
                        return atp.id !== e.target.value
                    });
                    setNextBowlerArray(nextBowlerArray);
                    setAwayBowlSCRes(bowlerRes[0]);
                    setBowler(bowlerRes[0]);
                }

            }
            else if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                if (e.target.name === 'strikerSelect') {
                    let nATP = awayTeamPlayer.filter((natp) => {
                        return natp.id !== e.target.value
                    });

                    let strikerRes = awayTeamPlayer.filter((natp) => {
                        return natp.id === e.target.value
                    });
                    setAwayStrBatSCRes(strikerRes[0]);
                    setStriker(strikerRes[0])
                    setNewAwayTeamPlayer(nATP);
                    setStatus(true);
                }
                else if (e.target.name === 'nonStrikerSelect') {
                    let nonStrikerRes = newAwayTeamPlayer.filter((natp) => {
                        return natp.id === e.target.value
                    });
                    let nextBatsmanArray = newAwayTeamPlayer.filter((natp) => {
                        return natp.id !== e.target.value
                    });
                    setNextBatsmanArray(nextBatsmanArray);
                    setAwayNStrBatSCRes(nonStrikerRes[0]);
                    setNonStriker(nonStrikerRes[0])
                }
                else if (e.target.name === 'bowlerSelect') {
                    let bowlerRes = homeTeamPlayer.filter((htp) => {
                        return htp.id === e.target.value
                    });
                    let nextBowlerArray = homeTeamPlayer.filter((htp) => {
                        return htp.id !== e.target.value
                    });
                    setNextBowlerArray(nextBowlerArray);
                    setHomeBowlSCRes(bowlerRes[0]);
                    setBowler(bowlerRes[0])
                }


            }
        }
    }

    // Based on firstInning 
    if (firstInning) {
        if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
            return (<Fragment>
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12} className='mt-2 mb-2' >
                        <span>Striker</span>
                        <Form.Control as='select' className='browser-default' id='strikerSelect' name='strikerSelect' defaultValue={'default'} onChange={onChangeFirst}  >
                            <option value=""  >Choose Striker</option>
                            {homeTeamPlayer.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />)
                            }
                        </Form.Control>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12} className='mt-2 mb-2'>
                        <span>Non-Striker</span>
                        <Form.Control as='select' className='browser-default' id='nonStrikerSelect' name='nonStrikerSelect' defaultValue={'default'} onChange={onChangeFirst} >
                            <option value=""  >Choose Non-Striker</option>
                            {(status) ? (newHomeTeamPlayer.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />)) :
                                (homeTeamPlayer.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />))
                            }
                        </Form.Control>
                    </Col>
                    {/* Bowler dropdwon */}
                    <Col lg={4} md={4} sm={12} xs={12} className='mt-2 mb-2'>
                        <span>Bowler</span>
                        <Form.Control as='select' className='browser-default' id='bowlerSelect' name='bowlerSelect' onChange={onChangeFirst} >
                            <option value=""  >Choose Bowler</option>
                            {(awayTeamPlayer.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />))
                            }
                        </Form.Control>
                    </Col>
                </Row>
                {/* Button */}
                <Row className='mt-3 mb-2 border-top d-flex justify-content-center'>
                    <Col lg='auto' md='auto' sm='auto' xs='auto' className='mt-3' >
                        <Button variant='' className="btn btn-default modal-btn-light" onClick={() => { setShowOpenersModal(false) }} >Close</Button>
                    </Col>
                    <Col lg='auto' md='auto' sm='auto' xs='auto' className='mt-3'>
                        {showScoreboardButton ? <Link to='/scoreboard' className="btn btn-default modal-btn" onClick={onClick}>Enter</Link>
                            : <Link to='#' className="btn btn-default modal-btn" onClick={onClick}>Enter</Link>}
                    </Col>
                </Row>
            </Fragment>
            )
        }
        else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
            return (<Fragment>
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12} className='mt-2 mb-2'>
                        <span>Striker</span>
                        <Form.Control as='select' className='browser-default' id='strikerSelect' name='strikerSelect' onChange={onChangeFirst} >
                            <option value=""  >Choose your option</option>
                            {awayTeamPlayer.map((atp, index) => <OptionItem key={index} id={atp.id} name={atp.name} />)
                            }
                        </Form.Control>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12} className='mt-2 mb-2'>
                        <span>Non-Striker</span>
                        <Form.Control as='select' className='browser-default' id='nonStrikerSelect' name='nonStrikerSelect' onChange={onChangeFirst} >
                            <option value=""  >Choose your option</option>
                            {(status) ? (newAwayTeamPlayer.map((atp, index) => <OptionItem key={index} id={atp.id} name={atp.name} />)) :
                                (awayTeamPlayer.map((atp, index) => <OptionItem key={index} id={atp.id} name={atp.name} />))
                            }
                        </Form.Control>
                    </Col>
                    {/* Bowler dropdwon */}
                    <Col lg={4} md={4} sm={12} xs={12} className='mt-2 mb-2'>
                        <span>Bowler</span>
                        <Form.Control as='select' className='browser-default' id='bowlerSelect' name='bowlerSelect' onChange={onChangeFirst} >
                            <option value=""  >Choose your option</option>
                            {(homeTeamPlayer.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />))
                            }
                        </Form.Control>
                    </Col>
                </Row>
                {/* Button */}
                <Row className='mt-3 mb-2 border-top d-flex justify-content-center'>
                    <Col lg='auto' md='auto' sm='auto' xs='auto' className='mt-3' >
                        <Button variant='' className="btn btn-default modal-btn-light" onClick={() => { setShowOpenersModal(false) }} >Close</Button>
                    </Col>
                    <Col lg='auto' md='auto' sm='auto' xs='auto' className='mt-3'>
                        {showScoreboardButton ? <Link to='/scoreboard' className="btn btn-default modal-btn" onClick={onClick}>Enter</Link>
                            : <Link to='#' className="btn btn-default modal-btn" onClick={onClick}>Enter</Link>}
                    </Col>
                </Row>
            </Fragment>
            )
        }
    }
    else if (!firstInning) {
        if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
            return (<Fragment>
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12} className='mt-2 mb-2'>
                        <span>Striker</span>
                        <Form.Control as='select' className='browser-default' id='strikerSelect' name='strikerSelect' defaultValue={'default'} onChange={onChangeFirst}  >
                            <option value=""  >Choose Striker</option>
                            {homeTeamPlayer.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />)
                            }
                        </Form.Control>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12} className='mt-2 mb-2'>
                        <span>Non-Striker</span>
                        <Form.Control as='select' className='browser-default' id='nonStrikerSelect' name='nonStrikerSelect' defaultValue={'default'} onChange={onChangeFirst} >
                            <option value=""  >Choose Non-Striker</option>
                            {(status) ? (newHomeTeamPlayer.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />)) :
                                (homeTeamPlayer.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />))
                            }
                        </Form.Control>
                    </Col>
                    {/* Bowler dropdwon */}
                    <Col lg={4} md={4} sm={12} xs={12} className='mt-2 mb-2'>
                        <span>Bowler</span>
                        <Form.Control as='select' className='browser-default' id='bowlerSelect' name='bowlerSelect' onChange={onChangeFirst} >
                            <option value=""  >Choose Bowler</option>
                            {(awayTeamPlayer.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />))
                            }
                        </Form.Control>
                    </Col>
                </Row>
                {/* Button */}
                <Row className='mt-3 mb-2 border-top d-flex justify-content-center'>
                    <Col lg='auto' md='auto' sm='auto' xs='auto' className='mt-3' >
                        <Button variant='' className="btn btn-default modal-btn-light" onClick={() => { setShowOpenersModal(false) }} >Close</Button>
                    </Col>
                    <Col lg='auto' md='auto' sm='auto' xs='auto' className='mt-3'>
                        {showScoreboardButton ? <Link to='/scoreboard' className="btn btn-default modal-btn" onClick={onClick}>Enter</Link>
                            : <Link to='#' className="btn btn-default modal-btn" onClick={onClick}>Enter</Link>}
                    </Col>
                </Row>
            </Fragment>
            )
        }
        else if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
            return (<Fragment>
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12} className='mt-2 mb-2'>
                        <span>Striker</span>
                        <Form.Control as='select' className='browser-default' id='strikerSelect' name='strikerSelect' onChange={onChangeFirst} >
                            <option value=""  >Choose your option</option>
                            {awayTeamPlayer.map((atp, index) => <OptionItem key={index} id={atp.id} name={atp.name} />)
                            }
                        </Form.Control>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12} className='mt-2 mb-2'>
                        <span>Non-Striker</span>
                        <Form.Control as='select' className='browser-default' id='nonStrikerSelect' name='nonStrikerSelect' onChange={onChangeFirst} >
                            <option value=""  >Choose your option</option>
                            {(status) ? (newAwayTeamPlayer.map((atp, index) => <OptionItem key={index} id={atp.id} name={atp.name} />)) :
                                (awayTeamPlayer.map((atp, index) => <OptionItem key={index} id={atp.id} name={atp.name} />))
                            }
                        </Form.Control>
                    </Col>
                    {/* Bowler dropdwon */}
                    <Col lg={4} md={4} sm={12} xs={12} className='mt-2 mb-2'>
                        <span>Bowler</span>
                        <Form.Control as='select' className='browser-default' id='bowlerSelect' name='bowlerSelect' onChange={onChangeFirst} >
                            <option value=""  >Choose your option</option>
                            {(homeTeamPlayer.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />))
                            }
                        </Form.Control>
                    </Col>
                </Row>
                {/* Button */}
                <Row className='mt-3 mb-2 border-top d-flex justify-content-center'>
                    <Col lg='auto' md='auto' sm='auto' xs='auto' className='mt-3' >
                        <Button variant='' className="btn btn-default modal-btn-light" onClick={() => { setShowOpenersModal(false) }} >Close</Button>
                    </Col>
                    <Col lg='auto' md='auto' sm='auto' xs='auto' className='mt-3'>
                        {showScoreboardButton ? <Link to='/scoreboard' className="btn btn-default modal-btn" onClick={onClick}>Enter</Link>
                            : <Link to='#' className="btn btn-default modal-btn" onClick={onClick}>Enter</Link>}
                    </Col>
                </Row>

                {/* {showScoreboardButton ? <Link to='/scoreboard' className="btn-default" onClick={onClick}>Enter</Link>
                    : <Link to='/#' className="btn-default" onClick={onClick}>Enter</Link> } */}
            </Fragment>
            )
        }
    }


}
export default OpenersDropdown
