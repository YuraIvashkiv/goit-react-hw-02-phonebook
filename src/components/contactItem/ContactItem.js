export const ContactItem = ({ contact, onClick }) => {
  return (
    <div>
      {contact.name}: {contact.number}
      <button onClick={() => onClick (contact.id)}>delete</button>
    </div>
  );
};