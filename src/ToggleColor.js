/** @jsxImportSource @emotion/react */
import { ToggleDiv } from "./styles/styledComponents/AppStyle";
import { CircleLight, CircleBlue } from "./styles/styledComponents/AppStyle";
import React, { useState } from "react";

const ToggleColor = () => {
  const [isLight, setIsLight] = useState(true);

  return (
    <>
      <ToggleDiv onClick={() => setIsLight(!isLight)}>
        {isLight && <CircleLight></CircleLight>}
        {!isLight && <CircleBlue></CircleBlue>}
      </ToggleDiv>
    </>
  );
};

export default ToggleColor;
