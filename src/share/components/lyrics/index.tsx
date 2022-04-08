import React,{useState} from 'react';
import ReactTooltip from 'react-tooltip';

import {Button,Modal } from 'react-bootstrap';
import {BsFileTextFill} from 'react-icons/bs';
type P = {
  value: number;
 
}
function Lyrics(props: P) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div onClick={handleShow}>
        <span className='d-flex align-items-center rounded-circle border p-2 cursor-pointer lyrics-icon-background ' data-tip='Tononkira'>
          <BsFileTextFill size={20} color='#fff'/>
          <ReactTooltip />
        </span>
        
    </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingiah diakona</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>{props.value}</h1>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Lyrics;