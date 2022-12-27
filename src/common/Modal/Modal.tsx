import React, { useState } from 'react';
import "./Modal.css";

const Modal = () => {
  const [show, setShow] = useState(false)
  const handleModal = () => {
    console.log(show)
    setShow(!show)
  }
  return (
    <div>
        {show ? <ModalPopUp /> : <button onClick={() => handleModal()} className='modal-btn'>Open</button> }
    </div>
  )
}

const ModalPopUp = () => {
  return(
    <div className='modal-popup'>Hello</div>
  )
}

export default Modal