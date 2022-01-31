/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  Form,
  Input,
  SubmitBtn,
  ErrorMsg,
} from "./styles/styledComponents/FormInputStyle";

export let phoneBook = [{ first: "coder", last: "byte", number: "3335559999" }];

const FormInput = (props) => {
  const [phoneEntry, setPhoneEntry] = useState({
    first: "",
    last: "",
    number: "",
  });
  const [errorMsg, setErrorMsg] = useState(false);

  const handleChange = (e) => {
    setPhoneEntry({ ...phoneEntry, [e.target.name]: e.target.value });
  };

  let temp = phoneBook;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      phoneEntry.first.length ||
      phoneEntry.last.length ||
      phoneEntry.number.length
    ) {
      return setErrorMsg(true);
    }
    temp.push(phoneEntry);
    phoneBook = [...temp];
    props.func();

    setPhoneEntry({
      first: "",
      last: "",
      number: "",
    });
    setErrorMsg(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="first"
        type="text"
        placeholder="code"
        onChange={handleChange}
        value={phoneEntry.first}
      ></Input>
      <Input
        name="last"
        type="text"
        placeholder="byte"
        onChange={handleChange}
        value={phoneEntry.last}
      ></Input>
      <Input
        name="number"
        type="text"
        placeholder="3335559999"
        onChange={handleChange}
        value={phoneEntry.number}
      ></Input>
      <SubmitBtn type="submit">Submit</SubmitBtn>
      {errorMsg && <ErrorMsg>All fields are required</ErrorMsg>}
    </Form>
  );
};

export default FormInput;
