import { useSelector } from "react-redux";

import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contacts/selectors.js";

import Contact from "../Contact/Contact.jsx";
import Notification from "../Notification/Notification.jsx";

import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filteredContacts = useSelector(selectFilteredContacts);

  if (!contacts.length) return <Notification title={"No contacts yet"} />;

  if (!filteredContacts.length)
    return <Notification title={"Contacts are not found"} />;

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
