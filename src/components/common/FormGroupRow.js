import { Form } from "react-bootstrap";

const FormGroupRow = ({
  controlId,
  labelText,
  inputType,
  inputPlaceholder,
  inputValue,
  inputName,
  handleOnChange,
}) => (
  <Form.Group controlId={controlId}>
    <Form.Label className="text-black">{labelText}</Form.Label>
    <Form.Control
      type={inputType}
      placeholder={inputPlaceholder}
      value={inputValue || ""}
      name={inputName}
      onChange={handleOnChange}
      as="input"
    />
  </Form.Group>
);

export default FormGroupRow;
