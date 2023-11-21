import { Field, ErrorMessage, Form, Formik } from "formik";

const AddPetMoreInfoNotices = (props) => {

  const handleSubmit = (values) => {
    props.next(values, true);
  }

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
    {({values}) => (
      <Form>
        <div>
          The Sex
          <label>
            Female
            <Field
                type="radio"
                name="sex"
                value="female"
            />
          </label>
          <label>
            Male
            <Field
                type="radio"
                name="sex"
                value="male"
            />
          </label>
        </div>
        <label>
          Location
          <Field type="text" name="location" placeholder="Type of location"/>
          <ErrorMessage name="location" />
        </label>
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

export default AddPetMoreInfoNotices