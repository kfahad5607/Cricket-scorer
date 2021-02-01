import React, { useContext } from 'react';
import CricketContext from '../../context/cricket/cricketContext';
import { Modal } from 'react-bootstrap';
import BatsmanDropdown from './BatsmanChangeDropdown'

const BatsmanChangeModal = () => {
    const cricketContext = useContext(CricketContext);
    const { setShowBatsmanChangeModal, showBatsmanChangeModal } = cricketContext;

    const handleClose = () => setShowBatsmanChangeModal(false);

    return (
        <>
            <Modal
                size="lg"
                show={showBatsmanChangeModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton className='heading'>
                    <Modal.Title><strong>Next Batsman</strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BatsmanDropdown />
                </Modal.Body>
            </Modal>
        </>

    )
}

export default BatsmanChangeModal
