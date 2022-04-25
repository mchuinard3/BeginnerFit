import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button, Container, Row, Col } from 'react-bootstrap';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
      <ButtonGroup aria-label="Basic example"> <Button
          variant="light" className="rounded-pill" size="md" style={{ padding: 5, margin: 0, width: 120, height: 40 }}
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
          </Button></ButtonGroup>
      </center>
    </div>
  );
}

export default LoginPage;
