const PhoneBookList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>first</th>
          <th>last</th>
          <th>number</th>
        </tr>
      </thead>
      <tbody>
        {props.data
          .sort((a, b) =>
            a.last.toUpperCase() > b.last.toUpperCase() ? 1 : -1
          )
          .map((item, i) => (
            <tr key={i}>
              <td>{item.first}</td>
              <td>{item.last}</td>
              <td>{item.number}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default PhoneBookList;
