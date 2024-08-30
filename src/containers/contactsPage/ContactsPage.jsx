import { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addNewContact}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    if (contacts.some(element => element.name === name)) {
      console.log('Duplicate!');
      if (duplicate === false) setDuplicate(true);
    } else {
      if (duplicate === true) setDuplicate(false);
    }
  }, [name])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (duplicate == true) {
      alert('You have entered a duplicate contact!');
    } else {
      addNewContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} phone={phone} email={email} setName={setName} setPhone={setPhone} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={contacts} />
      </section>
    </div>
  );
};