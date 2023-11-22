import { Field, ErrorMessage, Form, Formik } from "formik";
import { object, string } from 'yup';
import { InputFile, LabelInputFile, PhotoContainer} from "./AddPetMoreInfo.styled";
import { useState } from "react";

const schema = object({
    comments: string().required("Enter a comment"),
 });

const AddPetMoreInfoYourPet = (props) => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => { 
    const file = e.target.files[0];
    setSelectedFile(URL.createObjectURL(file))
  }

  const handleSubmit = (values) => {
    props.next(values, true);
    console.log(values);
    console.log(selectedFile)
  }

  return (
    <Formik initialValues={props.data} validationSchema={schema} onSubmit={handleSubmit}>
    {({values}) => (
      <Form>
        <p>Load the pet’s image:</p>
          {selectedFile ? (
            <div>
              <PhotoContainer
                src={selectedFile}
                alt="User's file"
                style={{ maxWidth: '300px' }}
              />
              {/* <LabelInputFile><InputFile type="file" name="image" onChange={handleChange} /></LabelInputFile> */}
            </div>
          ) : (
          <LabelInputFile><InputFile type="file" name="image" onChange={handleChange}/></LabelInputFile>
        )}
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

export default AddPetMoreInfoYourPet