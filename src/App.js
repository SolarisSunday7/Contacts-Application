import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div className="App">
      <h1>Contacts List</h1>
      <div className="container">
        {contacts.map((contact) => (
          <div key={contact.id} className="card">
            <div className="card-header">
              {contact.name}
            </div>
            <div className="card-body">
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <p><strong>Website:</strong> <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer">{contact.website}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;