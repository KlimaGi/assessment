/** @jsxImportSource @emotion/react */
import { ToggleDiv } from "./styles/styledComponents/AppStyle";
import { CircleLight, CircleBlue } from "./styles/styledComponents/AppStyle";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ToggleColor = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <ToggleDiv onClick={toggleTheme}>
        {theme && <CircleLight></CircleLight>}
        {!theme && <CircleBlue></CircleBlue>}
      </ToggleDiv>
    </>
  );
};

export default ToggleColor;
