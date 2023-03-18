export const getContacts = store => store.contacts;
export const getFilter = store => store.filter;
export const getFilteredContacts = ({ contacts, filter }) => {
    const normalizedFilter = filter.toLowerCase();
    if (!filter) {
        return contacts;
    }
    const result = contacts.filter(({ name }) => {
        return (name.toLowerCase().includes(normalizedFilter))
    })
    return result;
}