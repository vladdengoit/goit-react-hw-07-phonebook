import { Link } from 'react-router-dom';

import styles from './mainmanu.module.css';

const MainMenu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.link}>
        <Link to="/">Home page</Link>
      </li>
      <li className={styles.link}>
        <Link to="/my-form">My Form</Link>
      </li>
      <li className={styles.link}>
        <Link to="/my-contacts">My contacts</Link>
      </li>
    </ul>
  );
};

export default MainMenu;
