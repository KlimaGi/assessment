import styled from "@emotion/styled";
import { lightblue, grey, lightgrey, darktext } from "../theme/colors";
export const Form = styled.form`
  margin: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input`
  border-style: none;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  color: ${darktext};
  background: ${lightgrey};
  :focus {
    outline: none;
    color: ${darktext};
  }
  :: placeholder {
    color: ${lightblue};
  }
`;

export const SubmitBtn = styled.button`
  padding: 0.6rem;
  margin: 0.5rem 0;
  font-family: "Segoe UI", "Roboto", "Oxygen";
  font-size: 1.2rem;
  color: ${lightblue};
  border-style: none;
  background-color: ${grey};
  cursor: pointer;
  :hover {
    background-color: ${lightblue};
    color: ${darktext};
  }
`;

export const ErrorMsg = styled.div`
  color: #cf7272;
  position: absolute;
  padding: 0.1rem 1rem;
  position: absolute;
  bottom: 0;
  index-z: 1;
`;
