import { Field, ErrorMessage, Form, Formik } from "formik";
import { object, string } from 'yup';
import AddPetImage from "../AddPetImage/AddPetImage";

const schema = object({
    comments: string().required("Enter a comment"),
 });

const AddPetMoreInfoYourPet = (props) => {

  const handleSubmit = (values) => {
    props.next(values, true);
    console.log(values);
  }

  return (
    <Formik initialValues={props.data} validationSchema={schema} onSubmit={handleSubmit}>
    {({values}) => (
      <Form>
        <label>
          Load the pet’s image:
          <Field type="file" name="image" />
        </label>
        <label>
          Comments
          <Field type="text" name="comments" placeholder="Type of pet"/>
          <ErrorMessage name="comments" component={"div"}/>
          </label>
          <AddPetImage/>
        <button type="button" onClick={()=> props.prev(values)}>Back</button>
        <button type="submit">Done</button>
      </Form>
    )}
    </Formik>
  )
}

export default AddPetMoreInfoYourPet