import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button, Container, Row, Col } from 'react-bootstrap';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />

      <center>
      <ButtonGroup aria-label="Basic example"> <Button
          variant="light" className="rounded-pill" size="md" style={{ padding: 5, margin: 0, width: 120, height: 40 }}
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
          </Button></ButtonGroup>
      </center>
    </div>
  );
}

export default RegisterPage;
