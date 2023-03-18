import PropTypes from 'prop-types';
import styles from "./Filter.module.css"

export const Filter = ({ handleInput, value }) => {
    return <div className={styles.filter} >
        <label className={styles.label} >Find contacts by name</label>
        <input type="text" name="filter" value={value} onChange={handleInput}/>
    </div>
}

Filter.propTypes = {
    handleInput: PropTypes.func.isRequired,
}