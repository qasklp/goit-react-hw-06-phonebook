import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactList } from '../ContactList/ContactList';
import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { addContact, deleteContact} from 'Redux/Contacts/contacts-slice';
import { setFilter } from 'Redux/Filter/filter-slice';
import { getFilter } from 'Redux/Filter/filter-selectors';
import { getFilteredContacts } from 'Redux/Contacts/contacts-selectors';

import styles from "./Phonebook.module.css"

export const Phonebook = () => {
    const filter = useSelector(getFilter);
    const contacts = useSelector(getFilteredContacts);

    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const handleChange = ({ target }) => {
        dispatch(setFilter(target.value));
    }

    const isDublicate = name => {
        const normalizedName = name.toLowerCase();
        const result = contacts.find(({ name }) => {
            return name.toLowerCase() === normalizedName;
        })
        return Boolean(result);
    }

    const handleAddContact = ({ name, number }) => {
        if (isDublicate(name)) {
            return alert(`${name} is already in contacts`);
        }
        const action = addContact({ name, number });
        dispatch(action);
      
    }

    const removeContact = id => {
        const action = deleteContact(id);
        dispatch(action);
    }

    return <div className={styles.phonebook}>
        <h1>Phonebook</h1>
        <Form
            onSubmit={handleAddContact}
        />
        <h2>Contacts:</h2>
        <Filter handleInput={handleChange} value={filter} />
        <ContactList
            contacts={contacts}
            removeContact={removeContact}
        />
    </div>;
}