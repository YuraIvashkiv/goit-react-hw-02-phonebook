import { ContactItem } from "components/contactItem/ContactItem";

export const Contacts = ({ contacts, onClick }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactItem contact={contact} onClick={onClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};
