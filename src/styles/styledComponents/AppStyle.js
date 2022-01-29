import styled from "@emotion/styled";
import { css } from "@emotion/react";
export const Div = styled.div`
  text-align: center;
  padding: 2rem;
  margin: 0 auto;
  font-family: "Segoe UI", "Roboto", "Oxygen";
  border: 1px solid grey;
  color: #6a8a8f;
  width: 80%;
  display: flex;

  flex-direction: column;
`;

export const SubmitBtn = styled.button`
  margin: 1rem;
  font-family: "Segoe UI", "Roboto", "Oxygen";
`;

export const ToggleDiv = styled.div`
  border: 3px solid grey;
  width: 2rem;
  height: 1rem;
  border-radius: 10px;
  background-color: grey;
`;

export const Circle = css`
  width: 1rem;
  height: 1rem;
  border-radius: 10px;
`;

export const CircleLight = styled.div`
  ${Circle};
  background-color: gainsboro;
`;

export const CircleBlue = styled.div`
  ${Circle};
  margin-left: 1rem;
  background-color: powderblue;
`;
