/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { SubmitBtn } from "./styles/styledComponents/AppStyle";

export let phoneBook = [{ first: "coder", last: "byte", number: "3335559999" }];

const FormInput = (props) => {
  const [phoneEntry, setPhoneEntry] = useState();

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="first"
        type="text"
        placeholder="code"
        onChange={handleChange}
      ></input>
      <input
        name="last"
        type="text"
        placeholder="byte"
        onChange={handleChange}
      ></input>
      <input
        name="number"
        type="text"
        placeholder="3335559999"
        onChange={handleChange}
      ></input>
      <SubmitBtn type="submit">Submit</SubmitBtn>
    </form>
  );
};

export default FormInput;
