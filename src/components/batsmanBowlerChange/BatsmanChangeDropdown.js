import React, { useContext, Fragment, useState } from 'react';
import OptionItem from '../matchDetails/SelectOptionItem';
import CricketContext from '../../context/cricket/cricketContext';
import { Button, Form, Col, Row } from 'react-bootstrap';

const BatsmanChangeDropdown = () => {
    const cricketContext = useContext(CricketContext);
    const { toss, optedTo, setStriker, setNonStriker,
        setNextBatsmanArray, nextBatsmanArray,
        isStrikerOut, setShowNextBatsmanButton, striker, nonStriker, setShowBatsmanChangeModal,
        setBatsmanNo, batsmanNo, setHomeBatSCArray, setAwayBatSCArray, helpedBy, firstInning } = cricketContext;
    const [resArray, setResArray] = useState();
    const [homeBatSCRes, setHomeBatSCRes] = useState();
    const [awayBatSCRes, setAwayBatSCRes] = useState();
    const [showDoneButton, setShowDoneButton] = useState(false);

    const onClick = () => {
        document.getElementById('nextBatsmanSelect').selectedIndex = '0';
        setNextBatsmanArray(resArray);
        setShowNextBatsmanButton(false);
        setShowBatsmanChangeModal(false);
        setShowDoneButton(false);
        if (firstInning) {
            if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                homeBatSCRes.didBat = true;
                homeBatSCRes.battingNo = batsmanNo;
                setBatsmanNo();
                setHomeBatSCArray(homeBatSCRes);
            }
            else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                awayBatSCRes.didBat = true;
                awayBatSCRes.battingNo = batsmanNo;
                setBatsmanNo();
                setAwayBatSCArray(awayBatSCRes);
            }
        }
        else if (!firstInning) {
            if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                homeBatSCRes.didBat = true;
                homeBatSCRes.battingNo = batsmanNo;
                setBatsmanNo();
                setHomeBatSCArray(homeBatSCRes);
            }
            else if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                awayBatSCRes.didBat = true;
                awayBatSCRes.battingNo = batsmanNo;
                setBatsmanNo();
                setAwayBatSCArray(awayBatSCRes);
            }
        }
    }

    const onBatsmanChange = (e) => {
        if (document.getElementById('nextBatsmanSelect').selectedIndex === 0) {
            setShowDoneButton(false);
        }
        if (document.getElementById('nextBatsmanSelect').selectedIndex !== 0) {
            setShowDoneButton(true);
        }
        if (firstInning && document.getElementById('nextBatsmanSelect').selectedIndex !== 0) {
            // setShowNextBatsmanButton(false)
            if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                let nextBatsmanRes = nextBatsmanArray.filter((nba) => {
                    return nba.id === e.target.value;
                });
                let res = nextBatsmanArray.filter((nba) => {
                    return nba.id !== e.target.value
                })
                setResArray(res);
                if (isStrikerOut) {
                    striker.isOut = true;
                    striker.dismissalInfo = helpedBy;
                    setHomeBatSCRes(nextBatsmanRes[0]);
                    setStriker(nextBatsmanRes[0]);

                }
                else if (!isStrikerOut) {
                    nonStriker.isOut = true;
                    nonStriker.dismissalInfo = helpedBy;
                    setHomeBatSCRes(nextBatsmanRes[0]);
                    setNonStriker(nextBatsmanRes[0])
                }
            }
            else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                let nextBatsmanRes = nextBatsmanArray.filter((nba) => {
                    return nba.id === e.target.value;
                });
                let res = nextBatsmanArray.filter((nba) => {
                    return nba.id !== e.target.value
                });
                setResArray(res);
                if (isStrikerOut) {
                    striker.isOut = true;
                    striker.dismissalInfo = helpedBy;
                    setAwayBatSCRes(nextBatsmanRes[0])
                    setStriker(nextBatsmanRes[0]);
                }
                else if (!isStrikerOut) {
                    nonStriker.isOut = true;
                    nonStriker.dismissalInfo = helpedBy;
                    setAwayBatSCRes(nextBatsmanRes[0])
                    setNonStriker(nextBatsmanRes[0])
                }
            }
        }
        else if (!firstInning && document.getElementById('nextBatsmanSelect').selectedIndex !== 0) {
            // setShowNextBatsmanButton(false)
            if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                let nextBatsmanRes = nextBatsmanArray.filter((nba) => {
                    return nba.id === e.target.value;
                });
                let res = nextBatsmanArray.filter((nba) => {
                    return nba.id !== e.target.value
                })
                setResArray(res);
                if (isStrikerOut) {
                    striker.isOut = true;
                    striker.dismissalInfo = helpedBy;
                    setHomeBatSCRes(nextBatsmanRes[0]);
                    setStriker(nextBatsmanRes[0]);

                }
                else if (!isStrikerOut) {
                    nonStriker.isOut = true;
                    nonStriker.dismissalInfo = helpedBy;
                    setHomeBatSCRes(nextBatsmanRes[0]);
                    setNonStriker(nextBatsmanRes[0])
                }
            }
            else if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                let nextBatsmanRes = nextBatsmanArray.filter((nba) => {
                    return nba.id === e.target.value;
                });
                let res = nextBatsmanArray.filter((nba) => {
                    return nba.id !== e.target.value
                });
                setResArray(res);
                if (isStrikerOut) {
                    striker.isOut = true;
                    striker.dismissalInfo = helpedBy;
                    setAwayBatSCRes(nextBatsmanRes[0])
                    setStriker(nextBatsmanRes[0]);
                }
                else if (!isStrikerOut) {
                    nonStriker.isOut = true;
                    nonStriker.dismissalInfo = helpedBy;
                    setAwayBatSCRes(nextBatsmanRes[0])
                    setNonStriker(nextBatsmanRes[0])
                }
            }
        }
        // else if (document.getElementById('nextBatsmanSelect').selectedIndex === 0) {
        //     setShowNextBatsmanButton(true)
        // }
    }
    return (
        <Fragment>
            <Row>
                <Col lg={6} md={6} sm={6} xs={12} >
                    <span>Select Next Batsman</span>
                    <Form.Control as='select' className='browser-default' id='nextBatsmanSelect' name='nextBatsmanSelect' defaultValue={'nextBatsmanDefault'} onChange={onBatsmanChange}  >
                        <option value="nextBatsmanDefault"  >Choose Next Batsman</option>
                        {nextBatsmanArray.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />)
                        }
                    </Form.Control>
                </Col>
            </Row>
            <Row className='mt-3 mb-2 border-top d-flex justify-content-center'>
                <Col lg='auto' md='auto' sm='auto' xs='auto' className='mt-3' >
                    <Button variant='light' className="btn btn-default modal-btn-light" onClick={() => { setShowBatsmanChangeModal(false) }} >Close</Button>
                </Col>
                <Col lg='auto' md='auto' sm='auto' xs='auto' className='mt-3' >
                    {showDoneButton && <Button variant='primary' className="btn btn-default modal-btn" onClick={onClick} >Done</Button>}
                </Col>
            </Row>
        </Fragment>
    )
}

export default BatsmanChangeDropdown
