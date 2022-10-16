import { Box } from 'components/Box';
import { Formik, Field } from 'formik';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { StyledForm, FormButton } from './Phonebook.styled';

const INITIAL_VALUES = { name: "", number: "" }

export const Phonebook = ({ title }) => {
    const [addContact, {isLoading}] = useAddContactMutation()
    const { data = [] } = useGetContactsQuery()

    const handleAddContact = async value => {
        if (data.some(contact => contact.name === value.name)) {
            alert(`${value.name} is alredy in contarts`)
        } else {
            try {
                await addContact(value);
                alert(`${value.name} added to phonebook`)
            } catch (error) {
                alert("Error. Something wrong")
            }
        }
    }
    return (
        <Box py={5} px={4}>
            <h2>{title}</h2>

            <Formik initialValues={INITIAL_VALUES}
                onSubmit={handleAddContact}>
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
                            
                    <FormButton type="submit" disabled={isLoading}>
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