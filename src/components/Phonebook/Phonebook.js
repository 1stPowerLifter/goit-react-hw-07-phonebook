import { Box } from 'components/Box';
import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts} from 'redux/selectors'
import PropTypes from 'prop-types';
import { StyledForm, FormButton } from './Phonebook.styled';

const INITIAL_VALUES = { name: "", number: "" }

export const Phonebook = ({ title }) => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = ({name, number}, { resetForm }) => {
        if (contacts.some(contact => contact.name === name)) {
            alert(`${name} is alredy in contarts`)
        } else {
            dispatch(addContact(name, number))
            resetForm()
        }
    }

    return (
        <Box py={5} px={4}>
            <h2>{title}</h2>

            <Formik initialValues={INITIAL_VALUES}
                onSubmit={handleSubmit}>
                <StyledForm autoComplete='off'>
                    <Box display="inline-flex"
                        flexDirection="column"
                        gridGap={3} pb={3}>
                        <label htmlFor="name">Name</label>
                        <Field
                            placeholder="Enter name"
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required />
                    </Box>

                    <Box display="inline-flex"
                        flexDirection="column"
                        gridGap={3} pb={3}>
                        <label htmlFor="number">Number</label>
                        <Field
                            placeholder="Enter number"
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </Box>
                            
                    <FormButton type="submit">
                        Add contact
                    </FormButton>
                    
                </StyledForm>
            </Formik>
        </Box>
    )   
}

Phonebook.propTypes = {
    title: PropTypes.string.isRequired,
}