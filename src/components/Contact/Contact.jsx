import styles from './Contact.module.css';
// import { nanoid } from 'nanoid';ASK IVAN
const Contact = ({ contacts, deleteContact }) => {
  const listContacts = contacts?.map(({ number, name, id }) => (
    // <li key={nanoid()}>ASK IVAN
    <li key={id}>
      {name} : {number}{' '}
      <button
        type="button"
        className={styles.button}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div className={styles.block}>
      <h1>Contacts</h1>

      <ul>{listContacts}</ul>
    </div>
  );
};
export default Contact;
