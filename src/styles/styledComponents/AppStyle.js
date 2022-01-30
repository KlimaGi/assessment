import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { grey, lightgrey, lightblue } from "../theme/colors";

export const Div = styled.div`
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
  font-family: "Segoe UI", "Roboto", "Oxygen";
  border: 1px solid ${lightblue};
  display: flex;
  flex-direction: column;
`;

export const ToggleDiv = styled.div`
  border: 3px solid ${grey};
  width: 2rem;
  height: 1rem;
  border-radius: 10px;
  background-color: ${grey};
  margin: 0 1.1rem;
`;

export const Circle = css`
  width: 1rem;
  height: 1rem;
  border-radius: 10px;
`;

export const CircleLight = styled.div`
  ${Circle};
  background-color: ${lightgrey};
`;

export const CircleBlue = styled.div`
  ${Circle};
  margin-left: 1rem;
  background-color: ${lightblue};
`;
