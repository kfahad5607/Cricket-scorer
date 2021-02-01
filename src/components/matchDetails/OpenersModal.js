import React, { useContext } from 'react';
import OpenersDropdown from './OpenersDropdown';
import CricketContext from '../../context/cricket/cricketContext';
import { Modal } from 'react-bootstrap';

const OpenersModal = (props) => {
    const cricketContext = useContext(CricketContext);
    const { setShowOpenersModal, showOpenersModal } = cricketContext;

    // const [show, setShow] = useState(false);

    const handleClose = () => setShowOpenersModal(false);
    // const handleShow = () => setShowOpenersModal(true);

    return (
        <>
            <Modal
                size="lg"
                show={showOpenersModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton className='heading'>
                    <Modal.Title><strong>Openers & Bowler</strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <OpenersDropdown />
                </Modal.Body>
            </Modal>
        </>



    )
}


export default OpenersModal
