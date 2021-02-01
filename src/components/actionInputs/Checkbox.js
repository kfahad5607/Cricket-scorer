import React, { useContext } from 'react';
import CricketContext from '../../context/cricket/cricketContext';
import { Row, Col, Card, Button } from 'react-bootstrap'
import { Checkbox } from 'custom-input-aslam';

const Checkbox1 = () => {

    const cricketContext = useContext(CricketContext);
    const { wideChecked,
        noChecked,
        byeChecked,
        legByeChecked,
        wicketChecked,
        setWideChecked,
        setNoChecked,
        setLegByeChecked,
        setByeChecked,
        setWicketChecked, swap, setSwap } = cricketContext;

    const onclick = () => {
        setSwap(swap);
    }


    const onChange = (e) => {
        if (e.target.name === 'wide') {
            setWideChecked(!wideChecked)
            if (noChecked) {
                setNoChecked(false)
            }
            if (legByeChecked) {
                setLegByeChecked(false)
            }
            if (byeChecked) {
                setByeChecked(false)
            }
        }
        else if (e.target.name === 'no') {
            setNoChecked(!noChecked)
            if (wideChecked) {
                setWideChecked(false)
            }
        }
        else if (e.target.name === 'bye') {
            setByeChecked(!byeChecked)
            if (wideChecked) {
                setWideChecked(false)
            }
            if (legByeChecked) {
                setLegByeChecked(false)
            }
        }
        else if (e.target.name === 'legBye') {
            setLegByeChecked(!legByeChecked)
            if (wideChecked) {
                setWideChecked(false)
            }
            if (byeChecked) {
                setByeChecked(false)
            }
        }
        else if (e.target.name === 'wicket') {
            setWicketChecked(!wicketChecked)
        }

    }

    return (
        <div className=' border-rounded box-shadow'>
            <Card.Header className=''>
                <Row className='mx-auto'>
                    <Col lg={2} md={2} sm={4} xs={6} className='pt-3'>
                        <Row>
                            <Checkbox label="Wide" name='wide' size={1.5} color="var(--purple)" checked={wideChecked} onChange={onChange} />
                        </Row>
                    </Col>

                    <Col lg={2} md={2} sm={4} xs={6} className='pt-3'>
                        <Row>
                            <Checkbox label="No Ball" name='no' size={1.5} color="var(--purple)" checked={noChecked} onChange={onChange} />
                        </Row>
                    </Col>

                    <Col lg={2} md={2} sm={4} xs={6} className='pt-3'>
                        <Row>
                            <Checkbox label="Bye" name='bye' size={1.5} color="var(--purple)" checked={byeChecked} onChange={onChange} />
                        </Row>
                    </Col>

                    <Col lg={2} md={2} sm={4} xs={6} className='pt-3'>
                        <Row>
                            <Checkbox label="Leg Bye" name='legBye' size={1.5} color="var(--purple)" checked={legByeChecked} onChange={onChange} />
                        </Row>
                    </Col>

                    <Col lg={2} md={2} sm={4} xs={6} className='pt-3'>
                        <Row>
                            <Checkbox label="Wicket" name='wicket' size={1.5} color="var(--purple)" checked={wicketChecked} onChange={onChange} />
                        </Row>
                    </Col>


                    <Col lg={2} md={2} sm={4} xs={6} className='pt-2'>
                        <Row>
                            <Button className='btn btn-default modal-btn' style={{ borderRadius: '5px' }} size='sm' onClick={onclick}>Swap</Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Header>
        </div>
    )
}

export default Checkbox1
