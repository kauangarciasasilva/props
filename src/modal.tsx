import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
interface Props{
    handleOpenModal:any;
    showModal:boolean;
    }
function ButtonB(props:Props) {
  

  return (
    <>
     <Button variant="primary" onClick={props.handleOpenModal}>
        Launch demo modal
      </Button>
      <Modal show={props.showModal} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ButtonB;