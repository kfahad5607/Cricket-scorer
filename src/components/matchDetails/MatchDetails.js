import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CricketContext from '../../context/cricket/cricketContext';
import AlertContext from '../../context/alert/alertContext';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { Radio } from 'custom-input-aslam';
import ThemeModal from './ThemeModal';

const MatchDetails = (props) => {
    const [teamName, setTeamName] = useState({
        hostTeam: '',
        visitorTeam: ''
    });

    const [noOfOvers, setNoOfOvers] = useState('');
    const [noOfPlayers, setNoOfPlayers] = useState('');

    const cricketContext = useContext(CricketContext);
    const { toss, setToss, setOptedTo, optedTo, setHasMatchSetUp, setShowOpenersModal,
        setPlayerPerTeam, setOvers, setTeams, setTerminateMatch, setTheme, setShowThemeModal } = cricketContext;

    useEffect(() => {
        setHasMatchSetUp(false);
        setShowOpenersModal(false);
        setTerminateMatch(false);
        // eslint-disable-next-line
    }, []);

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

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const handlelOnChange = (e) => {
        // usestate
        setTeamName({
            ...teamName,
            [e.target.name]: e.target.value
        });
        // context api
        setTeams({
            ...teamName,
            [e.target.name]: e.target.value
        })
    }

    const onChangeToss = (e) => {
        // context api
        setToss(e.target.value);
    }

    const onChangeOpted = (e) => {
        // context api
        setOptedTo(e.target.value)
    }

    const onChangeOvers = (e) => {
        // usestate
        setNoOfOvers(e.target.value);
        // context api
        setOvers(parseInt(e.target.value))

    }

    const onChangePlayer = (e) => {
        // usestate
        setNoOfPlayers(e.target.value);
        // context api
        setPlayerPerTeam(parseInt(e.target.value))
    }

    const onClick = () => {
        if (teamName.hostTeam === '' || teamName.visitorTeam === '' || noOfPlayers === '' || noOfOvers === '') {
            setAlert('Please Enter All Fields', 'danger')
        } else {
            setHasMatchSetUp(true);
            props.history.push('/playerDetails')
        }

    }


    return (
        <Fragment>
            <ThemeModal />
            <div className='heading border-rounded mt-3'>
                <Row>
                    <Col lg={11} md={10} sm={10} xs={10} className='mx-auto d-flex justify-content-center'><h1 className=''>Cricket Scorer</h1></Col>
                    <Col lg={1} md={2} sm={2} xs={2} className='pt-2'> <span><Link to={'#'} onClick={() => setShowThemeModal(true)} className='fa fa-adjust' style={{ fontSize: '30px', color: 'white' }}></Link></span></Col>
                </Row>
            </div>
            <br />

            <Form>
                <div className=' border-rounded box-shadow'>
                    <Card.Header>
                        <Form.Group >
                            <Form.Label><h3 className='player-name'>Teams</h3></Form.Label>
                            <Row>
                                <Col lg={6} sm={12} xs={12} md={6} className='mb-1 mt-1'>
                                    <Form.Control type="text" id="hostTeam" name="hostTeam" placeholder="Host Team" onChange={handlelOnChange} value={teamName.hostTeam} />
                                </Col>
                                <Col lg={6} sm={12} xs={12} md={6} className='mb-1 mt-1'>
                                    <Form.Control type="text" name="visitorTeam" placeholder="Visitor Team" onChange={handlelOnChange} value={teamName.visitorTeam} />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Card.Header>
                </div>
                <br />

                <div className=' border-rounded box-shadow'>
                    <Card.Header>
                        <Row>
                            <Col lg={6} md={6} xs={12} sm={12}>
                                <Form.Group >
                                    <Form.Label><h3 className='player-name'>Toss Won By?</h3></Form.Label>
                                    <Row className='mr'>
                                        <Radio label={teamName.hostTeam === '' ? 'Home Team' : teamName.hostTeam} value="home" onChange={onChangeToss} checked={toss === 'home'} color="var(--purple)" />
                                        <Radio label={teamName.visitorTeam === '' ? 'Away Team' : teamName.visitorTeam} value="away" onChange={onChangeToss} checked={toss === 'away'} color="var(--purple)" />
                                    </Row>
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={6} xs={12} sm={12}>
                                <Form.Group >
                                    <Form.Label><h3 className='player-name'>Opted To?</h3></Form.Label>
                                    <Row className='mr'>
                                        <Radio label='Bat' value='bat' checked={optedTo === 'bat'} onChange={onChangeOpted} color="var(--purple)" />
                                        <Radio label='Bowl' value='bowl' checked={optedTo === 'bowl'} onChange={onChangeOpted} color="var(--purple)" />
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Header>
                </div>
                <br />


                <div className=' border-rounded box-shadow'>
                    <Card.Header>
                        <Row>
                            <Col lg={6} sm={12} xs={12} md={6}>
                                <Form.Group >
                                    <Form.Label htmlFor='overs'><h3 className='player-name'>Overs?</h3></Form.Label>
                                    <Form.Control type="text" id="overs" name="overs" placeholder="Overs" value={noOfOvers} onChange={onChangeOvers} />
                                </Form.Group>
                            </Col>
                            <Col lg={6} sm={12} xs={12} md={6}>
                                <Form.Group >
                                    <Form.Label htmlFor='playerPerteam'><h3 className='player-name'>Players Per Team?</h3></Form.Label>
                                    <Form.Control type="text" id="playerPerteam" name="playerPerteam" placeholder="11" value={noOfPlayers} onChange={onChangePlayer} />

                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Header>
                </div>

                <br />
                <Row>
                    <Col lg={12} sm={12} xs={12} md={12} >
                        <Button variant="" className='btn btn-default modal-btn' size="sm" block onClick={onClick} >Next</Button>
                    </Col>
                </Row>
            </Form>
            <br />
            <br />
        </Fragment>
    )
}

export default MatchDetails
