import { Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react'

const MovieAdd = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelchange=(e)=>{ setAdd({...Add,[e.target.name]:e.target.value})}
  const handelsave=()=>{
    props.handelAdd(Add);
    setAdd({Title:"",
    PosterURL:"",
    Rating:"",
    Description:""})
    handleClose()
  }

  const [Add, setAdd] = useState(
        {Title:"",
        PosterURL:"",
        Rating:"",
        Description:""}
    )
    
    return (
        <div>
      <Button variant="primary" onClick={handleShow}> Ajouter un nouveau film </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un nouveau film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input type='text' name="Title" placeholder='Titre du film' onChange={handelchange}/>
        <input type='url' name='PosterURL' placeholder='Affiche (lien)' onChange={handelchange}/>
        <input type='number' name='Rating' placeholder='Rating' onChange={handelchange}/>
        <input type='text' name='Description' placeholder='Description' onChange={handelchange}/>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Close </Button>
          <Button variant="primary" onClick={handelsave}> Save Changes </Button>
        </Modal.Footer>
      </Modal>
</div>)
}

export default MovieAdd
