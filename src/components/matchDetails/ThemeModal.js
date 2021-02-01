import React, { useContext, useEffect } from 'react';
import CricketContext from '../../context/cricket/cricketContext';
import { Modal, Button,Row } from 'react-bootstrap';

const ThemeModal = () => {
    const cricketContext = useContext(CricketContext);
    const { setShowThemeModal, showThemeModal, setTheme } = cricketContext;

    var themeColor = 'purple';

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
    }, [localStorage.getItem('theme')])

   
    const handleClose = () => setShowThemeModal(false);
    const onClick = (e) => {
        themeColor = e.target.value;
        localStorage.setItem('theme', JSON.stringify(themeColor));
        setTheme(themeColor)
    }

    return (
        <>
            <Modal
                size="lg"
                show={showThemeModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton className='heading'>
                    <Modal.Title><strong>Choose Theme</strong></Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Row className=' d-flex justify-content-center'>
                    <Button style={{ backgroundColor: '#5252a5' }} className='mt-3 mb-3 btn  btn-theme-md btn-theme text-1' size='sm' value={'purple'} onClick={onClick} ></Button>
                    <Button style={{ backgroundColor: '#009270' }} className='mt-3 mb-3 btn  btn-theme-md btn-theme text-1' size='sm' value={'green'} onClick={onClick} ></Button>
                    <Button style={{ backgroundColor: '#03a9f4' }} className='mt-3 mb-3 btn  btn-theme-md btn-theme text-1' size='sm' value={'blue'} onClick={onClick} ></Button>
                    <Button style={{ backgroundColor: '#dc3545' }} className='mt-3 mb-3 btn  btn-theme-md btn-theme text-1' size='sm' value={'red'} onClick={onClick} ></Button>

                    </Row>
                </Modal.Body>
                <Modal.Footer  className=' d-flex justify-content-center'>
                    <Button className="btn btn-default modal-btn-light" onClick={() => setShowThemeModal(false)}>Close</Button>
                    <Button className="btn btn-default modal-btn" onClick={handleClose}>Done</Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ThemeModal
