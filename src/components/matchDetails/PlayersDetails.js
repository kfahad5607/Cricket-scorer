import React, { Fragment, useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomePlayerInput from './HomePlayerInput';
import AwayPlayerInput from './AwayPlayerInput';
import CricketContext from '../../context/cricket/cricketContext';
import AlertContext from '../../context/alert/alertContext';
import OpenersModal from './OpenersModal';
import ThemeModal from './ThemeModal';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';

const PlayersDetails = (props) => {

    // const [isValid, setIsValid] = useState(false);
    const [homePlayerObj, setHomePlayerObj] = useState({});
    const [awayPlayerObj, setAwayPlayerObj] = useState({});

    const cricketContext = useContext(CricketContext);
    const { playerPerTeam, setTeamsPlayer, setShowOpenersModal, awayTeam, homeTeam, setTheme, setShowThemeModal } = cricketContext;

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;


    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

         // eslint-disable-next-line
    }, [])

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


    const onValid = (e) => {
        e.preventDefault();
        if ((Object.keys(homePlayerObj).length === 0 || Object.keys(awayPlayerObj).length === 0) || (Object.keys(homePlayerObj).length !== playerPerTeam || Object.keys(awayPlayerObj).length !== playerPerTeam)) {
            setAlert('Please Enter All Fields', 'danger')
        } else {
            return null
        }
    }

    const onHomeChange = (e) => {
        setHomePlayerObj({
            ...homePlayerObj,
            [e.target.name]: {
                id: e.target.name,
                name: e.target.value,
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: 'not out',
                isOut: false,
                didBat: false
            }
        });
    }

    const onAwayChange = (e) => {
        setAwayPlayerObj({
            ...awayPlayerObj,
            [e.target.name]: {
                id: e.target.name,
                name: e.target.value,
                runScored: 0,
                balls: 0,
                fours: 0,
                sixes: 0,
                strikeRate: 0,
                runConceded: 0,
                overs: 0,
                ballsBowled: 0,
                maidens: 0,
                maidenCount: 0,
                wickets: 0,
                economyRate: 0,
                battingNo: null,
                bowlingNo: null,
                dismissalInfo: 'not out',
                isOut: false,
                didBat: false
            }
        });

    }

    const onClick = (e) => {
        e.preventDefault();
        setShowOpenersModal(true);
        let homePlayerArray = [];
        let awayPlayerArray = [];
        Object.keys(homePlayerObj).map(function (key) {
            return homePlayerArray.push(homePlayerObj[key])
        });

        Object.keys(awayPlayerObj).map(function (key) {
            return awayPlayerArray.push(awayPlayerObj[key])
        });
        setTeamsPlayer(homePlayerArray, awayPlayerArray);
    }

    const nOfP = playerPerTeam;
    return (
        <Fragment>
            <OpenersModal />
            <ThemeModal />
            <div className='heading border-rounded mt-3'>
                <Row>
                    <Col lg={11} md={10} sm={10} xs={10} className='mx-auto d-flex justify-content-center'><h1 className=''>Cricket Scorer</h1></Col>
                    <Col lg={1} md={2} sm={2} xs={2} className='pt-2'> <span><Link to={'#'} onClick={() => setShowThemeModal(true)} className='fa fa-adjust' style={{ fontSize: '30px', color: 'white' }}></Link></span></Col>
                </Row>
            </div>

            <Form>
                <Row>
                    <Col xs={12} md={6} lg={6} sm={12}>
                        <div className=' border-rounded box-shadow mt-4'>
                            <Card.Header>
                                <h5 className='d-flex justify-content-center player-name' style={{ fontSize: '1.5rem' }}>{homeTeam}</h5>
                                {
                                    Array.from(Array(nOfP)).map((i, index) => (
                                        <div key={index}>
                                            <Row key={index}>
                                                <HomePlayerInput index={index} id={index + 1} onChange={onHomeChange} value={homePlayerObj} />
                                            </Row>
                                        </div>
                                    ))
                                }
                            </Card.Header>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6} sm={12}>
                        <div className=' border-rounded box-shadow mt-4'>
                            <Card.Header>
                                <h5 className='d-flex justify-content-center player-name' style={{ fontSize: '1.5rem' }}>{awayTeam}</h5>
                                {Array.from(Array(nOfP)).map((i, index) => (
                                    <div key={index}>
                                        <Row key={index}>
                                            <AwayPlayerInput index={index} id={index + 1} onChange={onAwayChange} value={awayPlayerObj} />
                                        </Row>
                                    </div>
                                ))
                                }
                            </Card.Header>
                        </div>
                    </Col>
                </Row>
                <br />
                {/* </Col> */}
                {
                    !((Object.keys(homePlayerObj).length === 0 || Object.keys(awayPlayerObj).length === 0) || (Object.keys(homePlayerObj).length !== playerPerTeam || Object.keys(awayPlayerObj).length !== playerPerTeam)) ? <Button className="btn-default btn modal-btn" variant='' block size='lg' onClick={onClick} style={{ fontSize: '25px', fontWeight: '550' }}>Start Match</Button> :
                        <Button className="btn-default btn modal-btn" variant='' block size='lg' onClick={onValid} style={{ fontSize: '25px', fontWeight: '550' }}>
                            Start Match
                        </Button>
                }
            </Form >
            <br />
            <br />
        </Fragment >
    )
}
export default PlayersDetails
