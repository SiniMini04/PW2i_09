import React from 'react';
import './popup1.css';

const Popup1 = (props) => {
    return (<div>
        <div className="popup-box">
            <div className="box">
                <span className="close-icon"
                    onClick={
                        props.handleClose
                }>x</span>
                {
                props.content
            } </div>
        </div>
    </div>);
}

export default Popup1;
