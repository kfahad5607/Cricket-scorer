import React,{useContext} from 'react';
import { Form,Col } from 'react-bootstrap';
import CricketContext from '../../context/cricket/cricketContext';

const AwayPlayerInput = (props) => {
    const cricketContext = useContext(CricketContext)
    const {awayTeam} = cricketContext
    const { index } = props;
    return (
        <Col xs={12} md={12}>
            <Form.Control type="text" name={`awayPlayer${props.id}`} placeholder={`${awayTeam} ${index + 1}`} value={props.value.name} onChange={props.onChange} />
        </Col>
    )
}
// const colStyle = {
//     background: 'rgba(191, 191, 191, 0.22)'
// }
export default AwayPlayerInput
