/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  Form,
  Input,
  SubmitBtn,
} from "./styles/styledComponents/FormInputStyle";

export let phoneBook = [{ first: "coder", last: "byte", number: "3335559999" }];

const FormInput = (props) => {
  const [phoneEntry, setPhoneEntry] = useState({
    first: "",
    last: "",
    number: "",
  });

  const handleChange = (e) => {
    setPhoneEntry({ ...phoneEntry, [e.target.name]: e.target.value });
  };

  let temp = phoneBook;

  const handleSubmit = (e) => {
    e.preventDefault();
    temp.push(phoneEntry);

    phoneBook = [...temp];
    props.func();
    console.log(phoneBook);
    setPhoneEntry({
      first: "",
      last: "",
      number: "",
    });
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
    </Form>
  );
};

export default FormInput;
