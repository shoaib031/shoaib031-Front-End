import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedValues, setSubmittedValues] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubmittedValue = { name, userName, email };
    setSubmittedValues([...submittedValues, newSubmittedValue]);
    setName("");
    setUserName("");
    setEmail("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const stateUpdate = {
      name: setName,
      userName: setUserName,
      email: setEmail,
    };

    stateUpdate[name](value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={name} onChange={handleChange} placeholder='Enter Your Name' />
        <input type='email' name='userName' value={userName} onChange={handleChange} placeholder='Enter Your Email' />
        <input type='number' name='email' value={email} onChange={handleChange} placeholder='Enter Your Number' />
        <button type="submit">Submit</button>
      </form>

      <table border="1">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
          </tr>
          {submittedValues.map((value, i) => (
            <tr key={i}>
              <td>{value.name}</td>
              <td>{value.userName}</td>
              <td>{value.email}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default App;
