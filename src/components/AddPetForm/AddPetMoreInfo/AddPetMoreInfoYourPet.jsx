import { Field, ErrorMessage, Form, Formik } from 'formik';
import { object, string } from 'yup';
import {
  InputFile,
  LabelInputFile,
  PhotoContainer,
} from './AddPetMoreInfo.styled';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const schema = object({
  comments: string().required('Enter a comment'),
});

const AddPetMoreInfoYourPet = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = (values) => {
    values.avatar = selectedFile;
    console.log(selectedFile);
    props.next(values, true, selectedFile);
  };

  return (
    <Formik
      initialValues={props.data}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <p>Load the pet’s image:</p>

          <div {...getRootProps()}>
            <LabelInputFile>
              {props.data.avatar && (
                <div>
                  <PhotoContainer
                    src={props.data.avatar}
                    alt="User's file"
                    style={{ maxWidth: '300px' }}
                  />
                </div>
              )}
              {selectedFile && (
                <div>
                  <PhotoContainer
                    src={URL.createObjectURL(selectedFile)}
                    alt="User's file"
                    style={{ maxWidth: '300px' }}
                  />
                </div>
              )}
            </LabelInputFile>
            <InputFile type="file" name="image" {...getInputProps()} />
          </div>

          <label>
            Comments
            <Field type="text" name="comments" placeholder="Type of pet" />
            <ErrorMessage name="comments" component={'div'} />
          </label>

          <button
            type="button"
            onClick={() =>
              props.prev({
                ...values,
                avatar: props.data.avatar || URL.createObjectURL(selectedFile),
              })
            }
          >
            Back
          </button>
          <button type="submit">Done</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddPetMoreInfoYourPet;
