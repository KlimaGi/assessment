/** @jsxImportSource @emotion/react */
import { Table, Tr } from "./styles/styledComponents/PhoneBookStyle";

const PhoneBookList = (props) => {
  return (
    <Table>
      <thead>
        <Tr>
          <th>first</th>
          <th>last</th>
          <th>number</th>
        </Tr>
      </thead>
      <tbody>
        {props.data
          .sort((a, b) =>
            a.last.toUpperCase() > b.last.toUpperCase() ? 1 : -1
          )
          .map((item, i) => (
            <Tr key={i}>
              <td>{item.first}</td>
              <td>{item.last}</td>
              <td>{item.number}</td>
            </Tr>
          ))}
      </tbody>
    </Table>
  );
};
export default PhoneBookList;
