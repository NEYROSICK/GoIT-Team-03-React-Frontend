import { Field, Form, Formik} from "formik";

const AddPetChooseOption = (props) => {

  const handleSubmit = (values) => {
    props.next(values);
    console.log(values);
  }

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      <Form> 
        <label>
          your pet
          <Field type="radio" name="category" value="your pet" />
        </label>
        <label>
          sell
          <Field type="radio" name="category" value="sell"  />
        </label>
        <label>
          lost/found
          <Field type="radio" name="category" value="lost/found" />
        </label>
        <label>
          in good hands
          <Field type="radio" name="category" value="in good hands" />
        </label>
        <button type="submit">Next</button>
      </Form>
    </Formik>
  )
}

export default AddPetChooseOption