import { useContext, useState } from "react";
import { HOST_URL } from "../common/urls";
import { UserContext } from "../context/UserContext";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import FormGroupRow from "../common/FormGroupRow";

const createFavorFields = [
  {
    controlId: "formBasicText1",
    labelText: "Title",
    inputPlaceholder: "Enter favor title",
    inputType: "text",
    inputName: "title",
  },
  {
    controlId: "formBasicText",
    labelText: "Text",
    inputPlaceholder: "Enter favor text",
    inputType: "text",
    inputName: "text",
  },
];

const CreateFavor = () => {
  const [favorInfo, setFavorInfo] = useState({});

  const { user } = useContext(UserContext);

  const postFavor = () => {
    fetch(`${HOST_URL}/user_favors`, {
      method: "POST",
      body: JSON.stringify(favorInfo),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((resp) => {
        if (resp.status !== 201) {
          console.log(resp);
          alert("error!");
          return resp.json();
        }
        setFavorInfo({});
      })
      .then((json) => {
        if (json) console.log(json);
      });
  };

  const handleOnChange = (e) => {
    setFavorInfo({
      ...favorInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    postFavor();
  };

  return (
    <Container className="mt-4 mb-4 pt-4 pb-4 bg-secondary">
      <Row className="justify-content-center text-center">
        <Col md={6}>
          <Form onSubmit={handleOnSubmit}>
            <h3 className="text-center text-black mb-4">Create Favor</h3>

            {createFavorFields.map((cff) => (
              <FormGroupRow
                key={`key-${cff.controlId}`}
                controlId={cff.controlId}
                labelText={cff.labelText}
                inputType={cff.inputType}
                inputPlaceholder={cff.inputPlaceholder}
                inputValue={favorInfo[cff.inputName]}
                inputName={cff.inputName}
                handleOnChange={handleOnChange}
              />
            ))}

            <Button className="w-100 mt-4" variant="dark" type="submit">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateFavor;
