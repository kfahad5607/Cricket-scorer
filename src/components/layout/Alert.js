import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import CricketContext from '../../context/cricket/cricketContext'

function Alert() {
    const alertContext = useContext(AlertContext);
    const cricketContext = useContext(CricketContext);
    const { freehit } = cricketContext;
    const { alert } = alertContext
    // if ((alert != null) ) {
    if (alert !== null) {
        if (alert.msg !== null) {
        }
      
        return (
            alert != null && <div className={`alert alert-${alert.type}`}>
                <i className="fa fa-info-circle" ></i>{' '} {alert.msg}
            </div>
        )
    }
    if (alert !== null) {
        if ((alert.msg === `It's a Free-Hit!`) && freehit) {
            return (
                alert != null && <div className={`alert alert-${alert.type}`}>
                    <i className="fa fa-info-circle" ></i> {alert.msg}
                </div>
            )
        }

    }
    else {
        return null
    }
    // }
    // else {
    //     return null
    // }

}

export default Alert;