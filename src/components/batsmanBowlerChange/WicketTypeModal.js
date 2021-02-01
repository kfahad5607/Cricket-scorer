import React, { useContext } from 'react';
import WicketTypeDropdown from './WicketTypeDropdown';
import CricketContext from '../../context/cricket/cricketContext';
import { Modal } from 'react-bootstrap';

const WicketTypeModal = () => {
    const cricketContext = useContext(CricketContext);
    const { setShowWicketTypeModal, showWicketTypeModal } = cricketContext;

    const handleClose = () => setShowWicketTypeModal(false);
    // const handleShow = () => setShowWicketTypeModal(true);

    return (
        <>
            <Modal
                size="lg"
                show={showWicketTypeModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header className='heading' closeButton>
                    <Modal.Title><strong >Wicket</strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <WicketTypeDropdown />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default WicketTypeModal
