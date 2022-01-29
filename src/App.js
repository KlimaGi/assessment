/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { GlobalStyle } from "./styles/base";
import { Div } from "./styles/styledComponents/AppStyle";
import React, { useState } from "react";
import FormInput from "./FormInput";
import PhoneBookList from "./PhoneBookList";
import ToggleColor from "./ToggleColor";
import { phoneBook } from "./FormInput";

const App = () => {
  const [objBook, setObjBook] = useState(phoneBook);
  const func = () => {
    setObjBook(phoneBook);
  };

  return (
    <Div>
      <ToggleColor />
      <FormInput func={func} />
      <PhoneBookList data={objBook} />
    </Div>
  );
};

export default App;
