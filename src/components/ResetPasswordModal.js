import React from "react";
import { Button ,Modal} from 'react-bootstrap';

//Reset password component show as Modal
const ResetPasswordModal = (props)=> {
  return(
  <Modal
      {...props}
      size="md"
      className="modal"
      aria-labelledby="Reset Password "
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="h5">
          Reset password E-mail
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-5">
       <input type="email" placeholder="Email *" id="emailInput" className="form-control custome-input" aria-describedby="reset Email" required/>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-primary" onClick={()=>alert('Email Has been sent')}>Send reset password</Button>
      </Modal.Footer>
    </Modal>
    )}
export default ResetPasswordModal;