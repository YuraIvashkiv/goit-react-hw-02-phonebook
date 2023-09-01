import styled from 'styled-components'
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
padding: 10px;
display: flex;
flex-direction: column;
gap:10px
`;

export const LabelName = styled.label`
  display: flex;
  flex-direction: column;
  `;

export const FieldName = styled(Field)`
width: 200px 
`;
