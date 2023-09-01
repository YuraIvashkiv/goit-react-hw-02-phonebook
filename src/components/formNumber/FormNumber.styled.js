import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const StyledNumber = styled(Field)`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const StyledButton=styled.button`
width:100px;
`
export const Error = styled(ErrorMessage)`
color:red;
`;