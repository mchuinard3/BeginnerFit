import React from 'react';
import { useDispatch } from 'react-redux';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button, Container, Row, Col } from 'react-bootstrap';

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
  
    
    <ButtonGroup aria-label="Basic example"> <Button
          variant="danger" className="rounded-pill" size="md" style={{ padding: 5, margin: 5, width: 80, height: 40 }}
          onClick={() => dispatch({ type: 'LOGOUT' })}
        >
          Log Out
          </Button></ButtonGroup>
          
  );
}

export default LogOutButton;
