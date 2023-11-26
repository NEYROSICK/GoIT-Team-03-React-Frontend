import { Field, Form, Formik, ErrorMessage } from 'formik';
import { object, string, date } from 'yup';
import { ButtonNextBack, IconArrow, IconPaw } from '../AddPetForm.styled';
import sprite from '../../../ui/Icons/sprite.svg';
import {
  ErrorPersonalInfoText,
  InputList,
} from './AddPetPersonalDetails.styled';
import { useState } from 'react';

const schema = object({
  name: string().matches(/^[a-zA-Z\s]+$/, 'Enter only English letters').min(2).max(16).required('Enter a name pet'),
  date: date()
    .required('Enter a date of birth')
    .max(new Date(), 'Date cannot be in the future'),
  type: string().matches(/^[a-zA-Z\s]+$/, 'Enter only English letters').max(16).required('Enter a type of pet'),
});

const AddPetPersonalDetailsYourPet = (props) => {
  const [validationPerformed, setValidationPerformed] = useState({
    name: false,
    date: false,
    type: false,
  });

  const handleBlur = (field) => {
    setValidationPerformed((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (values) => {
    props.next(values);
    console.log(values);
  };

  return (
    <Formik
      initialValues={props.data}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, touched, errors, setFieldTouched }) => (
        <Form>
          <InputList>
            <label>
              Pet’s name
              <Field
                type="text"
                name="name"
                placeholder="Type name pet"
                className={`${((touched.name || validationPerformed.name) && errors.name) ? 'is-invalid' : ''}`}
                onBlur={() => handleBlur('name')}
                onFocus={() => setFieldTouched('name')}
              />
              <ErrorMessage name="name" component={ErrorPersonalInfoText} />
            </label>
            <label>
              Date of Birth
              <Field
                type="date"
                name="date"
                placeholder="Type date of birth"
                className={`${((touched.date || validationPerformed.date) && errors.date) ? 'is-invalid' : ''}`}
                onBlur={() => handleBlur('date')}
                onFocus={() => setFieldTouched('date')}
              />
              <ErrorMessage name="date" component={ErrorPersonalInfoText} />
            </label>
            <label>
              Type
              <Field
                type="text"
                name="type"
                placeholder="Type of pet"
                className={`${((touched.type || validationPerformed.type) && errors.type) ? 'is-invalid' : ''}`}
                onBlur={() => handleBlur('type')}
                onFocus={() => setFieldTouched('type')}
              />
              <ErrorMessage name="type" component={ErrorPersonalInfoText} />
            </label>
          </InputList>
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
        </Form>
      )}
    </Formik>
  );
};

export default AddPetPersonalDetailsYourPet;
