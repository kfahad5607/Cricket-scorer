import React, { useContext, Fragment, useState } from 'react';
import OptionItem from '../matchDetails/SelectOptionItem';
import CricketContext from '../../context/cricket/cricketContext';
import { Button, Form, Col, Row } from 'react-bootstrap';

const BowlerChangeDropdown = () => {
    const cricketContext = useContext(CricketContext);
    const { homeTeamPlayer, awayTeamPlayer, toss, optedTo, setBowler,
        setNextBowlerArray, nextBowlerArray,
        setBowlerChangedStatus, setShowBowlerChangeModal,
        setShowNextBowlerButton, setBowlerNo, setSwap, swap,
        bowlerNo, setHomeBowlSCArray, setAwayBowlSCArray, firstInning } = cricketContext;
    const [resArray, setResArray] = useState();
    const [awayBowlSCRes, setAwayBowlSCRes] = useState();
    const [homeBowlSCRes, setHomeBowlSCRes] = useState();
    const [showDoneButton, setShowDoneButton] = useState(false);

    const onClick = () => {
        document.getElementById('nextBowlerSelect').selectedIndex = '0';
        setNextBowlerArray(resArray);
        setBowlerChangedStatus(true);
        setShowNextBowlerButton(false);
        setShowBowlerChangeModal(false);
        setShowDoneButton(false);
        if (firstInning) {
            if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                if (awayBowlSCRes.bowlingNo == null && awayBowlSCRes !== '') {
                    awayBowlSCRes.bowlingNo = bowlerNo;
                    setBowlerNo();
                }
                if (awayBowlSCRes.overs === 0 && awayBowlSCRes !== '') {
                    setAwayBowlSCArray(awayBowlSCRes);
                    setAwayBowlSCRes('');
                }
            }
            else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                if (homeBowlSCRes.bowlingNo == null && homeBowlSCRes !== '') {
                    homeBowlSCRes.bowlingNo = bowlerNo;
                    setBowlerNo();
                }
                if (homeBowlSCRes.overs === 0 && homeBowlSCRes !== '') {
                    setHomeBowlSCArray(homeBowlSCRes);
                    setHomeBowlSCRes('');
                }
            }
        }
        else if (!firstInning) {
            if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                if (awayBowlSCRes.bowlingNo == null && awayBowlSCRes !== '') {
                    awayBowlSCRes.bowlingNo = bowlerNo;
                    setBowlerNo();
                }
                if (awayBowlSCRes.overs === 0 && awayBowlSCRes !== '') {
                    setAwayBowlSCArray(awayBowlSCRes);
                }
            }
            else if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                if (homeBowlSCRes.bowlingNo == null && homeBowlSCRes !== '') {
                    homeBowlSCRes.bowlingNo = bowlerNo;
                    setBowlerNo();
                }
                if (homeBowlSCRes.overs === 0 && homeBowlSCRes !== '') {
                    setHomeBowlSCArray(homeBowlSCRes);
                }
            }
        }
    }

    const onBowlerChange = (e) => {
        if (document.getElementById('nextBowlerSelect').selectedIndex === 0) {
            setShowDoneButton(false);
        }
        if (document.getElementById('nextBowlerSelect').selectedIndex !== 0) {
            setShowDoneButton(true);
        }
        setSwap(swap)
        if (firstInning && document.getElementById('nextBowlerSelect').selectedIndex !== 0) {
            // setShowNextBowlerButton(false)
            if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                let nextBowlerRes = nextBowlerArray.filter((nba) => {
                    return nba.id === e.target.value;
                });
                let res = awayTeamPlayer.filter((atp) => {
                    return atp.id !== e.target.value
                });
                setResArray(res);
                if (nextBowlerRes[0].overs === 0) {
                    setAwayBowlSCRes(nextBowlerRes[0]);
                }
                if (nextBowlerRes[0].overs !== 0 && awayBowlSCRes !== '') {
                    setAwayBowlSCRes('')
                }
                setBowler(nextBowlerRes[0]);
            }
            else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                let nextBowlerRes = nextBowlerArray.filter((nba) => {
                    return nba.id === e.target.value;
                });
                let res = homeTeamPlayer.filter((htp) => {
                    return htp.id !== e.target.value
                })
                setResArray(res);
                if (nextBowlerRes[0].overs === 0) {
                    setHomeBowlSCRes(nextBowlerRes[0])
                }
                if (nextBowlerRes[0].overs !== 0 && awayBowlSCRes !== '') {
                    setHomeBowlSCRes('')
                }
                setBowler(nextBowlerRes[0]);
            }
        }
        else if (!firstInning && document.getElementById('nextBowlerSelect').selectedIndex !== 0) {
            // setShowNextBowlerButton(false)
            if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                let nextBowlerRes = nextBowlerArray.filter((nba) => {
                    return nba.id === e.target.value;
                });
                let res = awayTeamPlayer.filter((atp) => {
                    return atp.id !== e.target.value
                });
                setResArray(res);
                if (nextBowlerRes[0].overs === 0) {
                    setAwayBowlSCRes(nextBowlerRes[0])
                }
                if (nextBowlerRes[0].overs !== 0 && awayBowlSCRes !== '') {
                    setAwayBowlSCRes('')
                }
                setBowler(nextBowlerRes[0]);
            }
            else if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                let nextBowlerRes = nextBowlerArray.filter((nba) => {
                    return nba.id === e.target.value;
                });
                let res = homeTeamPlayer.filter((htp) => {
                    return htp.id !== e.target.value
                })
                setResArray(res);
                if (nextBowlerRes[0].overs === 0) {
                    setHomeBowlSCRes(nextBowlerRes[0]);
                }
                if (nextBowlerRes[0].overs !== 0 && homeBowlSCRes !== '') {
                    setHomeBowlSCRes('')
                }
                setBowler(nextBowlerRes[0]);
            }
        }
        // else if (document.getElementById('nextBowlerSelect').selectedIndex === 0) {
        //     setShowNextBowlerButton(true)
        // }
    }

    return (
        <Fragment>
            <Row>
                <Col lg={6} md={6} sm={6} xs={12} >
                    <span>Select Next Bowler</span>
                    <Form.Control as='select' className='browser-default' id='nextBowlerSelect' name='nextBowlerSelect' defaultValue={'nextBowlerDefault'} onChange={onBowlerChange}   >
                        <option value="nextBowlerDefault" >Choose Next Bowler</option>
                        {nextBowlerArray.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />)
                        }
                    </Form.Control>
                </Col>
            </Row>
            <Row className='mt-3 mb-2 border-top d-flex justify-content-center'>
                <Col lg='auto' md='auto' sm='auto' xs='auto' className='mt-3'>
                    <Button variant='' className="btn btn-default modal-btn-light" onClick={() => { setShowBowlerChangeModal(false) }} >Close</Button>
                </Col>
                <Col lg='auto' md='auto' sm='auto' xs='auto' className='mt-3' >
                    {showDoneButton && <Button variant='' className="btn btn-default modal-btn" onClick={onClick} >Done</Button>}
                </Col>
            </Row>
        </Fragment>
    )
}

export default BowlerChangeDropdown
