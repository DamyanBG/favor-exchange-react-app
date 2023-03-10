import { useContext, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { HOST_URL } from "../common/urls";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import FormGroupRow from "../common/FormGroupRow";

const loginFields = [
    {
        controlId: "formBasicEmail",
        labelText: "Email address",
        inputPlaceholder: "Enter email",
        inputType: "email",
        inputName: "email"
    },
    {
        controlId: "formBasicPassword",
        labelText: "Password",
        inputPlaceholder: "Enter password",
        inputType: "password",
        inputName: "password"
    },
]

const Login = () => {
  const [credentials, setCredentials] = useState({});

  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const login = () => {
    fetch(`${HOST_URL}/login`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(resp => {
            console.log(resp)
            return resp.json()
        })
        .then(json => {
            console.log(json)
            if (json.token) {
                localStorage.setItem('user', JSON.stringify(json));
                setUser(json);
                navigate('/');
            }
        })
  }

  const handleOnChange = (e) => {
    console.log(e)
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    login()
  }

  return (
    <Container className="mt-4 mb-4 pt-4 pb-4 bg-secondary">
      <Row className="justify-content-center text-center">
        <Col md={6}>
          <Form onSubmit={handleOnSubmit}>
            <h3 className="text-center text-black mb-4">Login</h3>

            {loginFields.map((lf) => (
                <FormGroupRow
                    key={`key-${lf.controlId}`}
                    controlId={lf.controlId}
                    labelText={lf.labelText}
                    inputType={lf.inputType}
                    inputPlaceholder={lf.inputPlaceholder}
                    inputValue={credentials[lf.inputName]}
                    inputName={lf.inputName}
                    handleOnChange={handleOnChange}
                />
            ))}

            <Button className="w-100 mt-4" variant="dark" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
