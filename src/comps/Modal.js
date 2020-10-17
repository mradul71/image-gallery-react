import React from 'react';
import Fade from "react-reveal/Fade"

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) =>{
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}>
        <Fade top cascade>
            <img src={selectedImg} alt="enlarged pic"/>
        </Fade>
        </div>
    )
}

export default Modal;
