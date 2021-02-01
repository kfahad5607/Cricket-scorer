import React, { useContext } from 'react';
import ButtonItem from './ButtonItem';
import Checkbox from './Checkbox';
import CricketContext from '../../context/cricket/cricketContext';
import { Row, Col, Card } from 'react-bootstrap'

const Buttons = () => {
    const cricketContext = useContext(CricketContext);
    const { runButton } = cricketContext;

    const onClickRunButton = (e) => {
        runButton(e.target.value);

    }

    return (
        <div>
            <Checkbox />
            <br />
            {/* <Card> */}
            <div className=' border-rounded box-shadow'>
            <Card.Header className='mx-auto d-flex justify-content-center '>
                <Row className='mx-auto d-flex justify-content-center'>
                    <Col lg={1} md={1} sm={3} xs={4}>
                        <ButtonItem key={0} value={0} onClick={onClickRunButton} />
                    </Col>
                    <Col lg={1} md={1} sm={3} xs={4}>
                        <ButtonItem key={1} value={1} onClick={onClickRunButton} />
                    </Col>
                    <Col lg={1} md={1} sm={3} xs={4}>
                        <ButtonItem key={2} value={2} onClick={onClickRunButton} />
                    </Col>
                    <Col lg={1} md={1} sm={3} xs={4}>
                        <ButtonItem key={3} value={3} onClick={onClickRunButton} />
                    </Col>
                    <Col lg={1} md={1} sm={3} xs={4}>
                        <ButtonItem key={4} value={4} onClick={onClickRunButton} />
                    </Col>
                    <Col lg={1} md={1} sm={3} xs={4}>
                        <ButtonItem key={5} value={5} onClick={onClickRunButton} />
                    </Col>
                    <Col lg={1} md={1} sm={3} xs={4}>
                        <ButtonItem key={6} value={6} onClick={onClickRunButton} />
                    </Col>

                </Row>
                </Card.Header>
                </div>
            {/* </Card> */}
        </div>

    )
}

export default Buttons;
