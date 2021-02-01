import React,{useContext} from 'react';
import { Form,Col } from 'react-bootstrap';
import CricketContext from '../../context/cricket/cricketContext';

const HomePlayerInput = (props) => {
    const cricketContext = useContext(CricketContext)
    const {homeTeam} = cricketContext
    const { index } = props;

    return (
        <Col xs={12} md={12} >
            <Form.Control type="text" name={`homePlayer${props.id}`} placeholder={`${homeTeam} ${index + 1}`} value={props.value.name} onChange={props.onChange} />
        </Col>
    )
}

export default HomePlayerInput
