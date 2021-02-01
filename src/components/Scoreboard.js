import React, { Fragment, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import CricketContext from '../context/cricket/cricketContext';
import AlertContext from '../context/alert/alertContext';
import Buttons from './actionInputs/Buttons';
import BatsmanModal from './batsmanBowlerChange/BatsmanChangeModal';
import BowlerModal from './batsmanBowlerChange/BowlerChangeModal';
import WicketTypeModal from './batsmanBowlerChange/WicketTypeModal';
import OpenersModal from './matchDetails/OpenersModal';
import TerminateModal from './matchDetails/TerminateModal';
import { Table, Row, Col, Card, Button } from 'react-bootstrap';

const Scoreboard = () => {
  const cricketContext = useContext(CricketContext);
  const { striker, nonStriker, bowler, teamTotal, teamWicket,
    swap, oversBowled, ballCount, setFirstInning, homeTeam, awayTeam,
    bowlerChangedStatus, wicketChecked, alertType, alertMsg, setShowTerminateMatchModal,
    showNextBatsmanButton, showSecondInningButton, freehit, partnership, partnershipBalls,
    firstInning, setFirstInningInfo, isMatchFinished, winner, setShowOpenersModal, setPartnership,
    setShowNextBatsmanButton, setShowNextBowlerButton, setBowlerChangedStatus, setWicketType, playerPerTeam,
    toss, optedTo, overs, firstInningInfo, secondInning, setShowWicketTypeModal, setTheme,
    setShowBatsmanChangeModal, setShowBowlerChangeModal, setSwap, setFreehit } = cricketContext;


  const alertContext = useContext(AlertContext);
  const { setAlert, setIndicator, clearIndicator } = alertContext

  useEffect(() => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

     // eslint-disable-next-line
}, [])

  useEffect(() => {
    if (freehit) {
      setIndicator(`It's a Free-Hit!`, 'success');
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
    }
    else if (!freehit) {
      clearIndicator();
    }

    if (alertMsg !== null) {
      setAlert(alertMsg, alertType);
    }

    // eslint-disable-next-line
  }, [alertMsg, freehit]);

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




  // starting second innings
  const onClick = () => {
    setFirstInningInfo();
    setPartnership();
    setShowNextBatsmanButton(false);
    setShowNextBowlerButton(false);
    setBowlerChangedStatus(true);
    setSwap(true);
    setFreehit(false)
    setWicketType(false);
    setFirstInning(false);
    setShowOpenersModal(true);
  }

  return (
    <Fragment>
      <Fragment>
        <BatsmanModal />
        <BowlerModal />
        <WicketTypeModal />
        <OpenersModal />
        <TerminateModal />
        <div className='heading border-rounded mt-3'>
          <Row>
            <Col lg={10} md={8} sm={8} xs={8}><h1 className='ml-4'>Scoreboard</h1></Col>
            <Col lg={1} md={2} sm={2} xs={2} className='pt-2'>
              <span>  <Link to='/scorecard' className='fa fa-list-alt' style={{ fontSize: '30px', color: 'white' }} ></Link></span></Col>
            <Col lg={1} md={2} sm={2} xs={2} className='pt-2'> <span><Link to={'#'} onClick={() => setShowTerminateMatchModal(true)} className='fa fa-trash' style={{ fontSize: '30px', color: 'white' }}></Link></span></Col>
          </Row>
        </div>
        <br />


        {/* test */}
        <Row>
          <Col md={12}>
            <div className=' border-rounded box-shadow'>
              <Card.Header>
                <Row>
                  <Col lg={8} md={8} sm={8} xs={8}>
                    <span className='font-weight-bolder'>{!secondInning ? (((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')) ? homeTeam : awayTeam) :
                      (((toss === 'away' && optedTo === 'bat') || (toss === 'home' && optedTo === 'bowl')) ? homeTeam : awayTeam)
                    }</span>{', '}<span className='text-secondary'>{!secondInning ? '1st Innings' : '2nd Innings'}</span>
                    <br></br>

                    <big className='font-weight-bolder'>{teamTotal}-{teamWicket}</big> <span className='text-muted'>{`(${oversBowled})/(${overs}.0)`}</span>

                  </Col>

                  <Col lg={2} md={2} sm={2} xs={2}>
                    <span className='text-secondary '>CRR</span>
                    <p>{(((teamTotal / ballCount) * 6).toFixed(2)) > 36 ? '36.00+' : isNaN(((teamTotal / ballCount) * 6).toFixed(2)) ? '0.00' : ((teamTotal / ballCount) * 6).toFixed(2)}</p>
                  </Col>

                  <Col style={secondInning ? { display: 'block' } : { display: 'none' }} lg={2} md={2} sm={2} xs={2}>
                    <span className='text-secondary'>RRR</span>
                    <p>{isMatchFinished ? '0.00' : (((((firstInningInfo.totalRunScored + 1 - teamTotal) / ((overs * 6) - ballCount)) * 6) > 36) ? '36.00+' : (isNaN((((firstInningInfo.totalRunScored + 1 - teamTotal) / ((overs * 6) - ballCount)) * 6).toFixed(2))
                      ? '0.00' : (((firstInningInfo.totalRunScored + 1 - teamTotal) / ((overs * 6) - ballCount)) * 6).toFixed(2)))}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <strong>Partnership: </strong><span className='text-muted'>{partnership}({partnershipBalls})</span>
                  </Col>
                </Row>

                {/* Toss won */}
                <Row>
                  <Col>
                    {((!secondInning) && ((toss === 'home' && optedTo === 'bowl')))
                      && <div className='text-danger'>{`${homeTeam} won the toss and opted to ${optedTo} first.`}</div>}

                    {((!secondInning) && ((toss === 'home' && optedTo === 'bat')))
                      && <div className='text-danger'>{`${homeTeam} won the toss and opted to ${optedTo} first.`}</div>}

                    {((!secondInning) && ((toss === 'away' && optedTo === 'bowl')))
                      && <div className='text-danger'>{`${awayTeam} won the toss and opted to ${optedTo} first.`}</div>}

                    {((!secondInning) && ((toss === 'away' && optedTo === 'bat')))
                      && <div className='text-danger'>{`${awayTeam} won the toss and opted to ${optedTo} first.`}</div>}

                  </Col>
                </Row>

                {/* Required Runs div  */}
                <Row>
                  <Col>
                    {((isMatchFinished && winner === 'home') && ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')))
                      && <div className='text-danger'>{`${homeTeam} won the match by ${playerPerTeam - 1 - teamWicket} wickets.`}</div>}

                    {((isMatchFinished && winner === 'home') && ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')))
                      && <div className='text-danger'>{`${homeTeam} won the match by ${firstInningInfo.totalRunScored - teamTotal} runs.`}</div>}

                    {((isMatchFinished && winner === 'away') && ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')))
                      && <div className='text-danger'>{`${awayTeam} won the match by ${firstInningInfo.totalRunScored - teamTotal} runs.`}</div>}

                    {((isMatchFinished && winner === 'away') && ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')))
                      && <div className='text-danger'>{`${awayTeam} won the match by ${playerPerTeam - 1 - teamWicket} wickets.`}</div>}

                    {((isMatchFinished && winner === 'draw'))
                      && <div className='text-danger'>{`Match was drawn.`}</div>}

                    {((secondInning && !isMatchFinished) && ((toss === 'home' && optedTo === 'bat') || (toss === 'away' && optedTo === 'bowl')))
                      && <div className='text-danger'>{`${awayTeam} need ${firstInningInfo.totalRunScored + 1 - teamTotal} runs in ${(overs * 6) - ballCount} balls to win.`}</div>}

                    {((secondInning && !isMatchFinished) && ((toss === 'home' && optedTo === 'bowl') || (toss === 'away' && optedTo === 'bat')))
                      && <div className='text-danger'>{`${homeTeam} need ${firstInningInfo.totalRunScored + 1 - teamTotal} runs in ${(overs * 6) - ballCount} balls to win.`}</div>}

                  </Col>
                </Row>

              </Card.Header>
            </div>
          </Col>
        </Row>


        <br />



        {/* Batsmen table  */}
        <div className=' border-rounded box-shadow' >
          <Table responsive hover borderless size="sm" className=' border-rounded'>
            <thead className=''>
              <tr>
                <th >Batsmen</th>
                <th >R</th>
                <th >B</th>
                <th >4s</th>
                <th >6s</th>
                <th >S/R</th>
              </tr>
            </thead>

            <tbody>
              {swap ?
                (<Fragment>
                  <tr className='text-capitalize'>
                    <td className={(nonStriker.isOut) ? 'text-muted font-weight-bold' : 'player-name font-weight-bold'} >{nonStriker.name}*</td>
                    <td className={(nonStriker.isOut) ? 'text-muted font-weight-bold' : 'font-weight-bold'} >{nonStriker.runScored}</td>
                    <td className={(nonStriker.isOut) ? 'text-muted ' : ' '} >{nonStriker.balls}</td>
                    <td className={(nonStriker.isOut) ? 'text-muted ' : ' '} >{nonStriker.fours}</td>
                    <td className={(nonStriker.isOut) ? 'text-muted ' : ' '} >{nonStriker.sixes}</td>
                    <td className={(nonStriker.isOut) ? 'text-muted ' : ' '} >{nonStriker.strikeRate}</td>
                  </tr>
                  <tr className='text-capitalize'>
                    <td className={(striker.isOut) ? ('text-muted font-weight-bold') : "font-weight-bold"}>{striker.name}</td>
                    <td className={(striker.isOut) ? ('text-muted font-weight-bold') : "font-weight-bold"}>{striker.runScored}</td>
                    <td className={(striker.isOut) ? ('text-muted ') : ""}>{striker.balls}</td>
                    <td className={(striker.isOut) ? ('text-muted ') : ""}>{striker.fours}</td>
                    <td className={(striker.isOut) ? ('text-muted ') : ""}>{striker.sixes}</td>
                    <td className={(striker.isOut) ? ('text-muted ') : ""}>{striker.strikeRate}</td>

                  </tr>
                </Fragment>
                ) :
                (<Fragment>
                  <tr className='text-capitalize'>
                    <td className={(striker.isOut) ? 'text-muted font-weight-bold' : 'player-name font-weight-bold'} >{striker.name}*</td>
                    <td className={(striker.isOut) ? 'text-muted font-weight-bold' : 'font-weight-bold'} >{striker.runScored}</td>
                    <td className={(striker.isOut) ? 'text-muted ' : ''} >{striker.balls}</td>
                    <td className={(striker.isOut) ? 'text-muted ' : ''} >{striker.fours}</td>
                    <td className={(striker.isOut) ? 'text-muted ' : ''} >{striker.sixes}</td>
                    <td className={(striker.isOut) ? 'text-muted ' : ''} >{striker.strikeRate}</td>

                  </tr>
                  <tr className='text-capitalize'>
                    <td className={(nonStriker.isOut) ? ('text-muted font-weight-bold') : "font-weight-bold"}>{nonStriker.name}</td>
                    <td className={(nonStriker.isOut) ? ('text-muted font-weight-bold') : "font-weight-bold"}>{nonStriker.runScored}</td>
                    <td className={(nonStriker.isOut) ? ('text-muted ') : ""}>{nonStriker.balls}</td>
                    <td className={(nonStriker.isOut) ? ('text-muted ') : ""}>{nonStriker.fours}</td>
                    <td className={(nonStriker.isOut) ? ('text-muted ') : ""}>{nonStriker.sixes}</td>
                    <td className={(nonStriker.isOut) ? ('text-muted ') : ""}>{nonStriker.strikeRate}</td>
                  </tr>
                </Fragment>)

              }
            </tbody>
          </Table>

          {/* Bowler table  */}
          <Table responsive hover borderless size="sm">
            <thead>
              <tr>
                <th>Bowler</th>
                <th>O</th>
                <th>M</th>
                <th>R</th>
                <th>W</th>
                <th>E/R</th>
              </tr>
            </thead>

            <tbody>
              <tr className='text-capitalize'>
                <td className={((!bowlerChangedStatus && oversBowled.toString().endsWith('.0'))) ? 'text-muted font-weight-bold' : "player-name font-weight-bold"}>{bowler.name}</td>
                <td className={((!bowlerChangedStatus && oversBowled.toString().endsWith('.0'))) ? 'text-muted ' : ""}>{bowler.overs}</td>
                <td className={((!bowlerChangedStatus && oversBowled.toString().endsWith('.0'))) ? 'text-muted ' : ""}>{bowler.maidens}</td>
                <td className={((!bowlerChangedStatus && oversBowled.toString().endsWith('.0'))) ? 'text-muted ' : ""}>{bowler.runConceded}</td>
                <td className={((!bowlerChangedStatus && oversBowled.toString().endsWith('.0'))) ? 'text-muted ' : ""}>{bowler.wickets}</td>
                <td className={((!bowlerChangedStatus && oversBowled.toString().endsWith('.0'))) ? 'text-muted ' : ""}>{(isNaN(bowler.economyRate) || bowler.economyRate === 'Infinity') ? '0.00' : bowler.economyRate}</td>
              </tr>
            </tbody>
          </Table>

        </div>

      </Fragment>
      <br />

      {/* next batsman and bolwer modal button */}
      {/* <TransitionGroup> */}
      <div className={(showSecondInningButton || showNextBatsmanButton || wicketChecked || (oversBowled.toString().endsWith('.0') && !bowlerChangedStatus)) ? 'border-rounded box-shadow' : ''}>
        <Card.Header className={(showSecondInningButton || showNextBatsmanButton || wicketChecked || (oversBowled.toString().endsWith('.0') && !bowlerChangedStatus)) && 'd-flex justify-content-center'} style={(showSecondInningButton || showNextBatsmanButton || wicketChecked || (oversBowled.toString().endsWith('.0') && !bowlerChangedStatus)) ? { display: 'block' } : { display: 'none' }}   >
          <Row className='d-flex justify-content-center'>
           
              <Button style={showNextBatsmanButton && !showSecondInningButton ? { display: 'inline-block' } : { display: 'none' }} className="btn btn-default modal-btn mt-1 mb-1" onClick={() => { setShowBatsmanChangeModal(true) }} >Select Next Batsman
            </Button>
            
              <Button style={((!bowlerChangedStatus && oversBowled.toString().endsWith('.0')) ? { display: 'inline-block' } : { display: 'none' })}
                className="btn btn-default modal-btn mt-1 mb-1" onClick={() => { setShowBowlerChangeModal(true) }} >Select Next Bowler
            </Button>
            
              <Button style={wicketChecked && !showSecondInningButton ? { display: 'inline-block' } : { display: 'none' }} onClick={() => { setShowWicketTypeModal(true) }} className="btn btn-default modal-btn mt-1 mb-1">
              Select Wicket Type
            </Button>
            
              <Button style={showSecondInningButton ? { display: 'inline-block' } : { display: 'none' }} className="btn btn-default modal-btn" onClick={onClick}>
                Start Second innings
            </Button>
            {/* </Col> */}
          </Row>
        </Card.Header>
        </div>
      <br />
      {(!isMatchFinished && (firstInning || secondInning)) && <Buttons />}

      <br />
      <br />
    </Fragment>
  );
};

export default Scoreboard;
