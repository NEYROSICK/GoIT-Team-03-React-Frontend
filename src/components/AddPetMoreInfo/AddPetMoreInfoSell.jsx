import { Field, ErrorMessage, Form, Formik } from "formik";
import { object, string, number } from 'yup';

const schema = object({
    sex: string().required("Select a sex"),
    location: string().required("Enter a location"),
    price: number().required("Enter a price"),
    comments: string().required("Enter a comment"),
 });

const AddPetMoreInfoSell = (props) => {

  const handleSubmit = (values) => {
    props.next(values, true);
    console.log(values);
  }

  return (
    <Formik initialValues={props.data} validationSchema={schema} onSubmit={handleSubmit}>
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
          <ErrorMessage name="sex" component={"div"}/>
        </div>
        <label>
          Location
          <Field type="text" name="location" placeholder="Type of location"/>
          <ErrorMessage name="location" component={"div"}/>
        </label>
        <label>
          Price
          <Field type="text" name="price" placeholder="Type of price"/>
          <ErrorMessage name="price" component={"div"}/>
        </label>
        <label>
          Load the pet’s image:
          <Field type="file" name="image" />
        </label>
        <label>
          Comments
          <Field type="text" name="comments" placeholder="Type of pet"/>
          <ErrorMessage name="comments" component={"div"}/>
        </label>
        <button type="button" onClick={()=> props.prev(values)}>Back</button>
        <button type="submit">Done</button>
      </Form>
    )}
    </Formik>
  )
}

export default AddPetMoreInfoSell