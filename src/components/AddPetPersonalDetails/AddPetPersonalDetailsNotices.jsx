import { Field, Form, Formik, ErrorMessage} from "formik";

const AddPetPersonalDetailsNotices = (props) => {

  const handleSubmit = (values) => {
    props.next(values);
    console.log(values);
  }

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
    {({values}) => (
      <Form>
        <label>
          Title of Ad
          <Field type="text" name="title" placeholder="Type name pet"/>
          <ErrorMessage name="title" />
        </label>  
        <label>
          Pet’s name
          <Field type="text" name="name" placeholder="Type name pet"/>
          <ErrorMessage name="name" />
        </label>
        <label>
          Date of Birth
          <Field type="date" name="date" placeholder="Type date of birth"/>
          <ErrorMessage name="date" />
        </label>
        <label>
          Type
          <Field type="text" name="type" placeholder="Type of pet"/>
          <ErrorMessage name="type" />
        </label>
        <button type="button" onClick={()=> props.prev(values)}>Back</button>
        <button type="submit">Next</button>
      </Form>
    )}
    </Formik>
  )
}

export default AddPetPersonalDetailsNotices