import React from 'react'
import  {ReactComponent as CloseIcon}  from "../../../Assets/Icons/Close_Icon.svg";
import "./style.scss"
const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup fade show">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>
                   <CloseIcon stroke={"#2163f3"}/>
                </button>
                {props.children}
            </div>

        </div>
    ) : null;
}

export default Popup