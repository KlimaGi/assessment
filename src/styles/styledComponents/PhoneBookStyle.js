import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { lightblue } from "../theme/colors";

export const Table = styled.table`
  border-collapse: collapse;
  padding: 1rem 0;
  margin: 0 1rem;
  width: 25rem;
`;

export const TableBase = css`
  padding: 0.5rem;
  text-align: center;
  cursor: default;
  :hover {
    border-bottom: 1px solid ${lightblue};
  }
`;

export const Tr = styled.tr`
  ${TableBase}
`;
export const Th = styled.th`
  ${TableBase};
  border-bottom: 1px solid ${lightblue};
`;
export const Td = styled.td`
  ${TableBase}
`;
