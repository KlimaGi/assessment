import React, { useState } from "react";
import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm({ addEntry }) {
  const [formEntry, setFormEntry] = useState({
    userFirstname: "Coder",
    userLastname: "Byte",
    userPhone: "8885559999",
  });

  const handleChange = (e) => {
    setFormEntry({ ...formEntry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(formEntry);

    setFormEntry({
      userFirstname: "",
      userLastname: "",
      userPhone: "",
    });
  };
  const readySubmit = () => {
    return (
      formEntry.userFirstname.length > 0 &&
      formEntry.userLastname.length > 0 &&
      formEntry.userPhone.length > 0
    );
  };

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        value={formEntry.userFirstname}
        onChange={handleChange}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        value={formEntry.userLastname}
        onChange={handleChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        value={formEntry.userPhone}
        onChange={handleChange}
      />
      <br />
      <input
        disabled={!readySubmit}
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

function InformationTable(props) {
  const { entries } = props;
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {entries.length > 0 &&
          entries.map((item, i) => (
            <tr key={i}>
              <td>{item.userFirstname}</td>
              <td>{item.userLastname}</td>
              <td>{item.userPhone}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

function Application() {
  const [entries, setEntires] = useState([]);

  const addEntry = (newEntry) => {
    let newEntries = [...entries, newEntry].sort((a, b) =>
      a.userLastname.toLowerCase() > b.userLastname.toLowerCase() ? 1 : -1
    );
    setEntires(newEntries);
  };
  return (
    <section>
      <PhoneBookForm addEntry={addEntry} />
      <InformationTable entries={entries} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
