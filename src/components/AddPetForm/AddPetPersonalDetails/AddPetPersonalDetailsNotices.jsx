import { Field, Form, Formik, ErrorMessage } from 'formik';
import { object, string, date } from 'yup';
import {
  ButtonContainer,
  ButtonNextBack,
  IconArrow,
  IconPaw,
} from '../AddPetForm.styled';
import sprite from '../../../ui/Icons/sprite.svg';
import {
  ErrorPersonalInfoText,
  InputList,
} from './AddPetPersonalDetails.styled';

const schema = object({
  title: string()
    .matches(/^[a-zA-Z\s]+$/, 'Enter only English letters')
    .min(2, 'Title must be at least 2 characters')
    .max(50, 'Title must be at most 50 characters')
    .required('Enter a title for add'),
  name: string()
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be at most 16 characters')
    .required('Enter a name pet'),
  date: date()
    .required('Enter a date of birth')
    .max(new Date(), 'Date cannot be in the future'),
  type: string()
    .matches(/^[a-zA-Z\s]+$/, 'Enter only English letters')
    .min(2, 'Type must be at least 2 characters')
    .max(16, 'Type must be at most 16 characters')
    .required('Enter a type of pet'),
});

const AddPetPersonalDetailsNotices = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      initialValues={props.data}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, touched, errors }) => (
        <Form>
          <InputList>
            <label>
              Title of Ad
              <Field
                type="text"
                name="title"
                placeholder="Title of ad"
                className={`${
                  touched.title && errors.title ? 'is-invalid' : ''
                }`}
              />
              <ErrorMessage name="title" component={ErrorPersonalInfoText} />
            </label>
            <label>
              Pet’s name
              <Field
                type="text"
                name="name"
                placeholder="Type name pet"
                className={`${touched.name && errors.name ? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="name" component={ErrorPersonalInfoText} />
            </label>
            <label>
              Date of birth
              <Field
                name="date"
                type="date"
                placeholder="Type date of birth"
                className={`${touched.date && errors.date ? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="date" component={ErrorPersonalInfoText} />
            </label>
            <label>
              Type
              <Field
                type="text"
                name="type"
                placeholder="Type of pet"
                className={`${touched.type && errors.type ? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="type" component={ErrorPersonalInfoText} />
            </label>
          </InputList>

          <ButtonContainer>
            <ButtonNextBack className="buttonNext" type="submit">
              Next
              <IconPaw>
                <use href={sprite + '#iconPaw'}></use>
              </IconPaw>
            </ButtonNextBack>
            <ButtonNextBack
              className="buttonBack"
              type="button"
              onClick={() => props.prev(values)}
            >
              <IconArrow>
                <use href={sprite + '#iconArrowLeft'}></use>
              </IconArrow>
              Back
            </ButtonNextBack>
          </ButtonContainer>
        </Form>
      )}
    </Formik>
  );
};

export default AddPetPersonalDetailsNotices;
