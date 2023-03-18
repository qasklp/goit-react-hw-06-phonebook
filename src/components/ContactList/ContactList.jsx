import { Contact } from 'components/Contact/Contact';
import PropTypes from 'prop-types';

export const ContactList = ({contacts, removeContact}) => {
    return <ul>
        {contacts.map(contact => (<Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            removeContact={removeContact}
        />))}
    </ul>;
}

Contact.propTypes = {
    contacts: PropTypes.array,
    removeContact: PropTypes.func.isRequired
}