import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Rating } from '@mui/material';
function Addmovie({setMovie,movie}) {

    const [image , setImage] = useState("");
    const [name , setName] = useState("");
    const [value, setValue] = useState(0);
    const [date , setDate] = useState("");
    const [type , setType] = useState("");
    const [description , setDescription] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSavechange = (e) => {
      e.preventDefault()
    setMovie([...movie ,{id: Math.random() ,image ,name ,rating: value ,date ,type ,description }])
      handleClose()
    }
   
    return (

        <div>
    
        <Button variant="success" onClick={handleShow}>
        Addmovie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ADD MOVIE </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label ><b>Image</b></Form.Label>
          <Form.Control type="url" placeholder="url of image "  onChange={(e) => { setImage(e.target.value); }}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label > <b>Name </b></Form.Label>
            <Form.Control type="text" placeholder="name of movie " onChange={(e) => { setName(e.target.value); }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Rating name="simple-controlled"
           value={value} 
           onChange={(e,newValue) => {
           setValue(newValue);
           }} />
         </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label ><b>Date</b></Form.Label>
          <Form.Control type="date"   placeholder="year of movie " onChange={(e) => { setDate(e.target.value); }}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label><b>Type</b></Form.Label>
          <Form.Control type="text" placeholder="type of movie "  onChange={(e) => { setType(e.target.value); }}/>
        </Form.Group>
        
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label  ><b>Description</b></Form.Label>
            <Form.Control as="textarea" rows={3} type="text" placeholder="description of movie " onChange={(e) => { setDescription(e.target.value); }} />
          </Form.Group>
 
        </Form>
        
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSavechange}>
              Save change
            </Button>
          </Modal.Footer>
        </Modal>
    
        </div>
    );
}

export default Addmovie;