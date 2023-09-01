import { Formik} from 'formik';
import * as Yup from 'yup';
import { StyledForm, LabelName, FieldName } from '../ContactForm/ContactForm.styled';
import { StyledNumber, StyledButton, Error } from '../formNumber/FormNumber.styled';

const schema = Yup.object().shape({
  name: Yup.string().min(1, 'Too Short!').required('Required'),
  number: Yup.number()
    .positive("Don't be nagative")
    .min(9, 'The number is not correct')
    .required('Required'),
});

export const Form = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        console.log(values);
        onAdd(values);
        // console.log(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <LabelName>
          Name
          <FieldName
            placeholder="Enter name..."
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Error name="name" component="div" />
        </LabelName>
        <label>
          Number
          <StyledNumber
            placeholder="Enter number..."
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Error name="number" component="div" />
        </label>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </Formik>
  );
};
