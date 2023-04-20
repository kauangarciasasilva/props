import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
interface Props{
    handleOpenModalConfirm:any;
    handleOpenModal:any;
    showModal:boolean;
    }
function ModalOpem(props:Props) {
  

  return (
    <>
   
      <Modal show={props.showModal} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
           
        <Button variant="primary" onClick={props.handleOpenModalConfirm}> confirme</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalOpem;