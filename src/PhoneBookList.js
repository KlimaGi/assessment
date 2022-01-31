/** @jsxImportSource @emotion/react */
import { Table, Tr, Th, Td } from "./styles/styledComponents/PhoneBookStyle";

const PhoneBookList = (props) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>first</Th>
          <Th>last</Th>
          <Th>number</Th>
        </Tr>
      </thead>
      <tbody>
        {props.data
          .sort((a, b) =>
            a.last.toUpperCase() > b.last.toUpperCase() ? 1 : -1
          )
          .map((item, i) => (
            <Tr key={i}>
              <Td>{item.first}</Td>
              <Td>{item.last}</Td>
              <Td>{item.number}</Td>
            </Tr>
          ))}
      </tbody>
    </Table>
  );
};
export default PhoneBookList;
