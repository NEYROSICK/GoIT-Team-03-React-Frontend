import { Field, Form, Formik, ErrorMessage } from 'formik';
import { object, string, date } from 'yup';
import { ButtonNextBack, IconArrow, IconPaw } from '../AddPetForm.styled';
import sprite from '../../../ui/Icons/sprite.svg';
import { InputList } from './AddPetPersonalDetails.styled';

const schema = object({
  title: string().required('Enter a title for add'),
  name: string().min(2).max(16).required('Enter a name pet'),
  date: date()
    .required('Enter a date of birth')
    .max(new Date(), 'Date cannot be in the future'),
  type: string().min(2).max(16).required('Enter a type of pet'),
});

const AddPetPersonalDetailsNotices = (props) => {
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
      {({ values, touched, errors }) => (
        <Form>
          <InputList>
            <label>
              Title of Ad
              <Field type="text" name="title" placeholder="Type name pet" className={`${touched.title && errors.title ? 'is-invalid' : ''}`}/>
              <ErrorMessage name="title" component={'div'} />
            </label>
            <label>
              Pet’s name
              <Field type="text" name="name" placeholder="Type name pet" className={`${touched.name && errors.name ? 'is-invalid' : ''}`}/>
              <ErrorMessage name="name" component={'div'} />
            </label>
            <label>
              Date of Birth
              <Field name="date" type="date" placeholder="Type date of birth" className={`${touched.date && errors.date ? 'is-invalid' : ''}`}/>
              <ErrorMessage name="date" component={'div'} />
            </label>
            <label>
              Type
              <Field type="text" name="type" placeholder="Type of pet" className={`${touched.type && errors.type ? 'is-invalid' : ''}`}/>
              <ErrorMessage name="type" component={'div'} />
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

export default AddPetPersonalDetailsNotices;
