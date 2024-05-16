import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Card({ info, onDelete, onRevive }) {
  return (
    <Container className='card'>
      <img className='card-img' style={{ marginBottom: '10px' }} src={info.profile} alt="profile picture" />
      <h2 className='card-title'>{info.name}</h2>
      <h3>{info.role}</h3>
      <p>{info.age}</p>
      <p className='card-text'>{info.desc}</p>
      <Button className='btn-action' variant="danger" onClick={onDelete}>Delete</Button>
      <Button className='btn-action' style={{ marginLeft: '15px' }} variant="success" onClick={onRevive}>Revive</Button>
    </Container>
  )
}

export default Card;