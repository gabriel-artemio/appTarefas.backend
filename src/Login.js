import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '123') {
      navigate('/pages/home');
    } else {
      alert('Credenciais incorretas');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h2>Área de Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="username">
              <Form.Label>Usuário</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite a senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Entrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;