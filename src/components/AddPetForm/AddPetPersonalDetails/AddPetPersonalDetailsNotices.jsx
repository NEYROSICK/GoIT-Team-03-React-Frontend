import { Field, Form, Formik, ErrorMessage } from "formik";
import { object, string, date} from 'yup';

const schema = object({
    title: string().required("Enter a title for add"),
    name: string().required("Enter a name pet"),
    date: date().required("Enter a date of birth"),
    type: string().required("Enter a type of pet"),
 });

const AddPetPersonalDetailsNotices = (props) => {

  const handleSubmit = (values) => {
    props.next(values);
    console.log(values);
  }

  return (
    <Formik initialValues={props.data} validationSchema={schema} onSubmit={handleSubmit}>
    {({values}) => (
      <Form>
        <label>
          Title of Ad
          <Field type="text" name="title" placeholder="Type name pet"/>
          <ErrorMessage name="title" component={"div"}/>
        </label>  
        <label>
          Pet’s name
          <Field type="text" name="name" placeholder="Type name pet"/>
          <ErrorMessage name="name" component={"div"}/>
        </label>
        <label>
          Date of Birth
          <Field type="date" name="date" placeholder="Type date of birth"/>
          <ErrorMessage name="date" component={"div"}/>
        </label>
        <label>
          Type
          <Field type="text" name="type" placeholder="Type of pet"/>
          <ErrorMessage name="type" component={"div"}/>
        </label>
        <button type="button" onClick={()=> props.prev(values)}>Back</button>
        <button type="submit">Next</button>
      </Form>
    )}
    </Formik>
  )
}

export default AddPetPersonalDetailsNotices