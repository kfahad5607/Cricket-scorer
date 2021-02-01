import React, { useContext } from 'react';
import BowlerDropdown from './BowlerChangeDropdown';
import CricketContext from '../../context/cricket/cricketContext';
import { Modal } from 'react-bootstrap';


const BowlerChangeModal = () => {
    const cricketContext = useContext(CricketContext);
    const { setShowBowlerChangeModal, showBowlerChangeModal } = cricketContext;

    const handleClose = () => setShowBowlerChangeModal(false);

    return (
        <>
            <Modal
                size="lg"
                show={showBowlerChangeModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton className='heading'>
                    <Modal.Title><strong>Next Bowler</strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BowlerDropdown />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default BowlerChangeModal
