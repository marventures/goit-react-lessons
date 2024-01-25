import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact, deleteContact }) => {
  // handleDelete method
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <li className={css.contactListItem}>
      <p>{contact.name}:</p>
      <p>{contact.number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
