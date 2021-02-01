import React, { useContext } from 'react';
import OptionItem from '../matchDetails/SelectOptionItem';
import CricketContext from '../../context/cricket/cricketContext';
import { Form, Col } from 'react-bootstrap';

const WicketTypeDropdown = () => {
    const cricketContext = useContext(CricketContext);
    const { homeTeamPlayer, awayTeamPlayer, toss, optedTo
        , showWhoHelpedButton, wicketType, setHelpedBy, bowler, firstInning, } = cricketContext;


    const onChange = (e) => {
        if (firstInning) {
            if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                if (wicketType === 'runOutNonStriker' || wicketType === 'runOutStriker') {
                    let helperRes = awayTeamPlayer.filter((natp) => {
                        return natp.id === e.target.value
                    });
                    setHelpedBy(`run out ${helperRes[0].name} b ${bowler.name}`)
                }
                else if (wicketType === 'stumping') {
                    let helperRes = awayTeamPlayer.filter((natp) => {
                        return natp.id === e.target.value
                    });
                    setHelpedBy(`st ${helperRes[0].name} b ${bowler.name}`)
                }
                else if (wicketType === 'catchOut') {
                    let helperRes = awayTeamPlayer.filter((natp) => {
                        return natp.id === e.target.value
                    });
                    if (helperRes[0].name === bowler.name) {
                        setHelpedBy(`c & b ${bowler.name}`);
                    }
                    else {
                        setHelpedBy(`c ${helperRes[0].name} b ${bowler.name}`);

                    }
                }

            }

            else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                if (wicketType === 'runOutNonStriker' || wicketType === 'runOutStriker') {
                    let helperRes = homeTeamPlayer.filter((nhtp) => {
                        return nhtp.id === e.target.value
                    });
                    setHelpedBy(`run out ${helperRes[0].name} b ${bowler.name}`)
                }
                else if (wicketType === 'stumping') {
                    let helperRes = homeTeamPlayer.filter((nhtp) => {
                        return nhtp.id === e.target.value
                    });
                    setHelpedBy(`st ${helperRes[0].name} b ${bowler.name}`)
                }
                else if (wicketType === 'catchOut') {
                    let helperRes = homeTeamPlayer.filter((nhtp) => {
                        return nhtp.id === e.target.value
                    });
                    if (helperRes[0].name === bowler.name) {
                        setHelpedBy(`c & b ${bowler.name}`);
                    }
                    else {
                        setHelpedBy(`c ${helperRes[0].name} b ${bowler.name}`);

                    }
                }

            }
        }
        else if (!firstInning) {
            if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
                if (wicketType === 'runOutNonStriker' || wicketType === 'runOutStriker') {
                    let helperRes = awayTeamPlayer.filter((natp) => {
                        return natp.id === e.target.value
                    });
                    setHelpedBy(`run out ${helperRes[0].name} b ${bowler.name}`)
                }
                else if (wicketType === 'stumping') {
                    let helperRes = awayTeamPlayer.filter((natp) => {
                        return natp.id === e.target.value
                    });
                    setHelpedBy(`st ${helperRes[0].name} b ${bowler.name}`)
                }
                else if (wicketType === 'catchOut') {
                    let helperRes = awayTeamPlayer.filter((natp) => {
                        return natp.id === e.target.value
                    });
                    if (helperRes[0].name === bowler.name) {
                        setHelpedBy(`c & b ${bowler.name}`);
                    }
                    else {
                        setHelpedBy(`c ${helperRes[0].name} b ${bowler.name}`);

                    }
                }

            }

            else if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
                if (wicketType === 'runOutNonStriker' || wicketType === 'runOutStriker') {
                    let helperRes = homeTeamPlayer.filter((nhtp) => {
                        return nhtp.id === e.target.value
                    });
                    setHelpedBy(`run out ${helperRes[0].name} b ${bowler.name}`)
                }
                else if (wicketType === 'stumping') {
                    let helperRes = homeTeamPlayer.filter((nhtp) => {
                        return nhtp.id === e.target.value
                    });
                    setHelpedBy(`st ${helperRes[0].name} b ${bowler.name}`)
                }
                else if (wicketType === 'catchOut') {
                    let helperRes = homeTeamPlayer.filter((nhtp) => {
                        return nhtp.id === e.target.value
                    });
                    if (helperRes[0].name === bowler.name) {
                        setHelpedBy(`c & b ${bowler.name}`);
                    }
                    else {
                        setHelpedBy(`c ${helperRes[0].name} b ${bowler.name}`);

                    }
                }

            }
        }
    }

    // return (
    if (firstInning) {
        if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
            return (<Col lg={6} md={6} sm={6} xs={12} style={showWhoHelpedButton ? { display: 'block' } : { display: 'none' }} >
                {(wicketType === 'catchOut') && <span>Caught By</span>}
                {(wicketType === 'stumping') && <span>Stumped By</span>}
                {(wicketType === 'runOutStriker' || wicketType === 'runOutNonStriker') && <span>Run Out By</span>}
                <Form.Control as='select' className='browser-default' id='whoHelpedSelect' name='whoHelpedSelect' onChange={onChange} >
                    <option value="" >Choose Player</option>
                    {(awayTeamPlayer.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />))
                    }
                </Form.Control>
            </Col>

            )
        }
        else if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
            return (<Col lg={6} md={6} sm={6} xs={12} style={showWhoHelpedButton ? { display: 'block' } : { display: 'none' }} >
                {(wicketType === 'catchOut') && <span>Caught By</span>}
                {(wicketType === 'stumping') && <span>Stumped By</span>}
                {(wicketType === 'runOutStriker' || wicketType === 'runOutNonStriker') && <span>Run Out By</span>}
                <Form.Control as='select' className='browser-default' id='whoHelpedSelect' name='whoHelpedSelect' onChange={onChange} >
                    <option value="" >Choose Player</option>
                    {(homeTeamPlayer.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />))
                    }
                </Form.Control>
            </Col>
            )
        }
    }
    else if (!firstInning) {
        if ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')) {
            return (<Col lg={6} md={6} sm={6} xs={12} style={showWhoHelpedButton ? { display: 'block' } : { display: 'none' }} >
                {(wicketType === 'catchOut') && <span>Caught By</span>}
                {(wicketType === 'stumping') && <span>Stumped By</span>}
                {(wicketType === 'runOutStriker' || wicketType === 'runOutNonStriker') && <span>Run Out By</span>}
                <Form.Control as='select' className='browser-default' id='whoHelpedSelect' name='whoHelpedSelect' onChange={onChange} >
                    <option value="" >Choose Player</option>
                    {(awayTeamPlayer.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />))
                    }
                </Form.Control>
            </Col>

            )
        }
        else if ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) {
            return (<Col lg={6} md={6} sm={6} xs={12} style={showWhoHelpedButton ? { display: 'block' } : { display: 'none' }} >
                {(wicketType === 'catchOut') && <span>Caught By</span>}
                {(wicketType === 'stumping') && <span>Stumped By</span>}
                {(wicketType === 'runOutStriker' || wicketType === 'runOutNonStriker') && <span>Run Out By</span>}
                <Form.Control as='select' className='browser-default' id='whoHelpedSelect' name='whoHelpedSelect' onChange={onChange} >
                    <option value="" >Choose Player</option>
                    {(homeTeamPlayer.map((htp, index) => <OptionItem key={index} id={htp.id} name={htp.name} />))
                    }
                </Form.Control>
                {/* </Col> */}
            </Col>
            )
        }
    }
    // )
}

export default WicketTypeDropdown
