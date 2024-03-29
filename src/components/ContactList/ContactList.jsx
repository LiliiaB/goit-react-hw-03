import css from "./ContactList.module.css";
import { Contact } from "../Contact/Contact";

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
