import { Field, Form, Formik, ErrorMessage } from "formik";
import { object, string} from 'yup';

const schema = object({
  category: string().required("Select a category"),
});

const AddPetChooseOption = (props) => {
  const handleCancel = () => { 
    console.log("Cancel")
  }

  const handleSubmit = (values) => {
    props.next(values);
    console.log(values);
  }

  return (
    <Formik initialValues={props.data} validationSchema={schema} onSubmit={handleSubmit}>
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
        <ErrorMessage name="category" component={"div"} />
        <button type="button" onClick={handleCancel}>Сancel</button>
        <button type="submit">Next</button>
      </Form>
    </Formik>
  )
}

export default AddPetChooseOption