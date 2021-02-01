import React, { useContext } from 'react';
import CricketContext from '../../context/cricket/cricketContext';
import { Modal, Button } from 'react-bootstrap';

const TerminateModal = () => {
    const cricketContext = useContext(CricketContext);
    const { setShowTerminateMatchModal, showTerminateMatchModal, setTerminateMatch, terminateMatchFunc } = cricketContext;

    // const [show, setShow] = useState(false);

    const handleClose = () => setShowTerminateMatchModal(false);
    const onClick = () => {
        setShowTerminateMatchModal(false)
        setTerminateMatch(true);
        terminateMatchFunc()
    }

    return (
        <>
            <Modal
                size="lg"
                show={showTerminateMatchModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton className='heading'>
                    <Modal.Title><strong>Delete Match</strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Are you sure you want to delete the match?</h3>
                </Modal.Body>
                <Modal.Footer className=' d-flex justify-content-center'>
                    <Button className="btn btn-default modal-btn-light" onClick={ ()=> setShowTerminateMatchModal(false)}>No</Button>
                    <Button className="btn btn-default modal-btn" onClick={onClick}>Yes, Delete</Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default TerminateModal
