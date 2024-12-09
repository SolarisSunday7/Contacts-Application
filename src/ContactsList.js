import React, { useState, useEffect } from 'react';

const ContactsList = () => {
  const [contacts, setContacts] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setContacts(data); 
        setLoading(false);  
      })
      .catch((error) => {
        console.error('Error fetching contacts:', error);
        setLoading(false); 
      });
  }, []); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="contacts-list">
      <h1>Contacts</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <h2>{contact.name}</h2>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Website: <a href={`https://${contact.website}`}>{contact.website}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;