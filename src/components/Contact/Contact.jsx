import PropTypes from 'prop-types';
import styles from "./Contact.module.css";

export const Contact = ({id, name, number, removeContact}) => {
    return <li className={styles.contact}>
        <p className={styles.text}>{name}: {number}</p>
        <button className={styles.button} type='button' onClick={()=>removeContact(id)}>Delete</button>
    </li>;
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    removeContact: PropTypes.func.isRequired
}