import { Field, ErrorMessage } from "formik";

const PersonalDetails = () => {
  return (
    <div>     
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
    </div>
  )
}

export default PersonalDetails