import React, { useContext, Fragment, useState } from 'react';
import CricketContext from '../../context/cricket/cricketContext';
import WhoHelpedDropdown from './WhoHelpedDropdown';
import { Button, Form, Col, Row } from 'react-bootstrap';

const WicketTypeDropdown = () => {
    const cricketContext = useContext(CricketContext);
    const { setIsStrikerOut, setWicketTypeStatus, setWicketType, setShowWicketTypeModal,
        wideChecked, swap, setShowWhoHelpedButton, setHelpedBy, bowler } = cricketContext;
    const [wicketTypeRes, setWicketTypeRes] = useState();
    const [showDoneButton, setShowDoneButton] = useState(false);


    const onClick = () => {
        // resetting the dropdwons
        document.getElementById('wicketTypeDefault').selectedIndex = '0';
        document.getElementById('whoHelpedSelect').selectedIndex = '0';
        setWicketTypeStatus(true);
        setWicketType(wicketTypeRes);
        setShowWhoHelpedButton(false);
        setShowWicketTypeModal(false);
        setShowDoneButton(false);
    }

    const onWicketTypeChange = (e) => {
        if (document.getElementById('wicketTypeDefault').selectedIndex === 0) {
            setShowDoneButton(false);
            setShowWhoHelpedButton(false);
            // setWicketTypeStatus(false)

        }
        if (document.getElementById('wicketTypeDefault').selectedIndex !== 0) {
            setShowDoneButton(true);
        }
        if (!swap) {
            if (e.target.value === 'catchOut' || e.target.value === 'stumping' || e.target.value === 'runOutStriker' || e.target.value === 'runOutNonStriker') {
                setShowWhoHelpedButton(true);
            }
            if (e.target.value === 'bowled' || e.target.value === 'lbw' || e.target.value === 'hitWicket') {
                setShowWhoHelpedButton(false);
                if (e.target.value === 'bowled') {
                    setHelpedBy(`b ${bowler.name}`)
                }
                else if (e.target.value === 'lbw') {
                    setHelpedBy(`lbw ${bowler.name}`)
                }
                else if (e.target.value === 'hitWicket') {
                    setHelpedBy(`hw ${bowler.name}`)
                }
            }
            if (e.target.value === 'runOutNonStriker') {
                setIsStrikerOut(false);
                setWicketTypeStatus(true);
                setWicketTypeRes(e.target.value);
                setWicketType(e.target.value);
            }
            else if (e.target.value === 'runOutStriker') {
                setIsStrikerOut(true);
                setWicketTypeStatus(true);
                setWicketTypeRes(e.target.value);
                setWicketType(e.target.value);
            }
            else {
                setIsStrikerOut(true);
                setWicketTypeStatus(true);
                setWicketTypeRes(e.target.value);
                setWicketType(e.target.value);
            }
        }
        else if (swap) {
            if (e.target.value === 'catchOut' || e.target.value === 'stumping' || e.target.value === 'runOutStriker' || e.target.value === 'runOutNonStriker') {
                setShowWhoHelpedButton(true);
            }
            if (e.target.value === 'bowled' || e.target.value === 'lbw' || e.target.value === 'hitWicket') {
                setShowWhoHelpedButton(false);
                if (e.target.value === 'bowled') {
                    setHelpedBy(`b ${bowler.name}`)
                }
                else if (e.target.value === 'lbw') {
                    setHelpedBy(`lbw ${bowler.name}`)
                }
                else if (e.target.value === 'hitWicket') {
                    setHelpedBy(`hw ${bowler.name}`)
                }
            }
            if (e.target.value === 'runOutNonStriker') {
                setIsStrikerOut(true);
                setWicketTypeStatus(true);
                setWicketTypeRes(e.target.value);
                setWicketType(e.target.value);
            }
            else if (e.target.value === 'runOutStriker') {
                setIsStrikerOut(false);
                setWicketTypeStatus(true);
                setWicketTypeRes(e.target.value);
                setWicketType(e.target.value);
            }
            else {
                setIsStrikerOut(false);
                setWicketTypeStatus(true);
                setWicketTypeRes(e.target.value);
                setWicketType(e.target.value);
            }
        }

    }

    return (
        <Fragment>
            <Row>
                <Col lg={6} md={6} sm={6} xs={12} className='mb-2'>
                    <span>Select Wicket Type</span>
                    {wideChecked ? (<Form.Control as='select' className='browser-default' id='wicketTypeDefault' name='wicketTypeDefault' defaultValue={'nextBowlerDefault'} onChange={onWicketTypeChange}   >
                        <option value="wicketTypeDefault" >Choose Wicket Type</option>
                        <option value="runOutStriker" >Run Out Striker</option>
                        <option value="runOutNonStriker" >Run Out Non-Striker</option>
                        <option value="stumping" >Stumping</option>
                        <option value="hitWicket" >Hit Wicket</option>
                    </Form.Control>) :
                        (<Form.Control as='select' className='browser-default' id='wicketTypeDefault' name='wicketTypeDefault' defaultValue={'nextBowlerDefault'} onChange={onWicketTypeChange}   >
                            <option value="wicketTypeDefault" >Choose Wicket Type</option>
                            <option value="bowled" >Bowled</option>
                            <option value="lbw" >LBW</option>
                            <option value="catchOut" >Catch Out</option>
                            <option value="runOutStriker" >Run Out Striker</option>
                            <option value="runOutNonStriker" >Run Out Non-Striker</option>
                            <option value="stumping" >Stumping</option>
                            <option value="hitWicket" >Hit Wicket</option>
                        </Form.Control>)
                    }
                </Col>
                <WhoHelpedDropdown />
            </Row>
            <Row className='mt-3 mb-2 border-top d-flex justify-content-center'>
                <Col lg='auto' md='auto' sm='auto' xs='auto' className='mt-3' >
                    <Button variant='' className="btn btn-default modal-btn-light" onClick={() => {
                        setShowWicketTypeModal(false);
                        setShowWhoHelpedButton(false);
                    }} >Close</Button>
                </Col>
                <Col lg='auto' md='auto' sm='auto' xs='auto' className='mt-3'>
                    {showDoneButton && <Button variant='' className="btn btn-default modal-btn" onClick={onClick} >Done</Button>}
                </Col>
            </Row>
        </Fragment>
    )
}

export default WicketTypeDropdown
