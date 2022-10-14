import { GlobalStyle } from './GlobalStyle';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';



export const App = () => {
  
  return (
    <>
      <Phonebook title="Phonebook" />
      <Contacts title="Contacts"/>
      <GlobalStyle />
    </>
  );
};
