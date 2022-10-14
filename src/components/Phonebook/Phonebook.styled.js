import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
    padding:${ p => p.theme.space[3]}px;
    display: inline-flex;
    flex-direction: column;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
    margin-top: ${ p => p.theme.space[3]}px;
`

export const FormButton = styled.button`
  margin-top: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
  }
`