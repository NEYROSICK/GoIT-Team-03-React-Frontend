import { Field, ErrorMessage, Form, Formik } from "formik";

const AddPetMoreInfoYourPet = (props) => {

  const handleSubmit = (values) => {
    props.next(values, true);
    console.log(values);
  }

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
    {({values}) => (
      <Form>
        <label>
          Load the pet’s image:
          <Field type="file" name="image" />
          <ErrorMessage name="image" />
        </label>
        <label>
          Comments
          <Field type="text" name="comments" placeholder="Type of pet"/>
          <ErrorMessage name="comments" />
        </label>
        <button type="button" onClick={()=> props.prev(values)}>Back</button>
        <button type="submit">Done</button>
      </Form>
    )}
    </Formik>
  )
}

export default AddPetMoreInfoYourPet