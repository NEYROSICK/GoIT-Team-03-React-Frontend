import { Field, ErrorMessage } from "formik";

const MoreInfo = () => {
  return (
    <div>
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
        Price
        <Field type="text" name="price" placeholder="Type of price"/>
        <ErrorMessage name="price" />
      </label>
      <label>
        Comments
        <Field type="text" name="comments" placeholder="Type of pet"/>
        <ErrorMessage name="comments" />
      </label>
      <label>
        Load the pet’s image:
        <Field type="file" name="image" />
        <ErrorMessage name="image" />
      </label>
      
    </div>
  )
}

export default MoreInfo