import styled from "@emotion/styled";
import { lightblue } from "../theme/colors";

export const Table = styled.table`
  border-collapse: collapse;
  padding: 1rem 0;
  margin: 0 1rem;
  width: 25rem;
`;

export const Tr = styled.tr`
  padding: 1rem;
  height: 2rem;
  text-align: center;
  :hover {
    border-bottom: 1px solid ${lightblue};
  }
`;
