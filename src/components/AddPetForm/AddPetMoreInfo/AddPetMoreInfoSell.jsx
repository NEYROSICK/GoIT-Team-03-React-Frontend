import { Field, ErrorMessage, Form, Formik } from 'formik';
import { object, string, number } from 'yup';
import {
  AvatarContainer,
  IconFemale,
  IconMale,
  IconPlus,
  InputFile,
  InputList,
  LabelInputFile,
  PhotoContainer,
  SexList,
} from './AddPetMoreInfo.styled';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ButtonNextBack, IconArrow, IconPaw } from '../AddPetForm.styled';
import sprite from '../../../ui/Icons/sprite.svg';

const schema = object({
  sex: string().required('Select a sex'),
  location: string().required('Enter a location'),
  price: number().min(1).required('Enter a price'),
  comments: string().required('Enter a comment'),
});

const AddPetMoreInfoSell = (props) => {
  const [selectedFile, setSelectedFile] = useState(props.selectedFile || null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
  });

  const handleSubmit = (values) => {
    if (!selectedFile) {
      setFormSubmitted(true);
      return;
    }
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
          <InputList>
            <p>The Sex</p>
            <SexList>
              <Field type="radio" name="sex" id="female" value="female" />
              <label htmlFor="female">
                <IconFemale className="iconFemale">
                  <use href={sprite + '#iconFemale'} />
                </IconFemale>
                Female
              </label>

              <Field type="radio" name="sex" id="male" value="male" />
              <label htmlFor="male">
                <IconMale className="iconMale">
                  <use href={sprite + '#iconMale'} />
                </IconMale>
                Male
              </label>
              <ErrorMessage name="sex" component={'div'} />
            </SexList>

            <AvatarContainer>
              <p>Choose pet image:</p>

              <LabelInputFile
                className={
                  formSubmitted && !selectedFile ? 'no-image-selected' : ''
                }
              >
                <div {...getRootProps()}>
                  {selectedFile ? (
                    <div>
                      <PhotoContainer
                        src={URL.createObjectURL(selectedFile)}
                        alt="User's file"
                        style={{ maxWidth: '300px' }}
                      />
                    </div>
                  ) : (
                    <IconPlus>
                      <use href={sprite + '#iconPlusAvatar'} />
                    </IconPlus>
                  )}
                </div>
                <InputFile type="file" name="image" {...getInputProps()} />
              </LabelInputFile>
            </AvatarContainer>

            <label>
              Location
              <Field
                type="text"
                name="location"
                placeholder="Type of location"
              />
              <ErrorMessage name="location" component={'div'} />
            </label>

            <label>
              Price
              <Field type="text" name="price" placeholder="Type of price" />
              <ErrorMessage name="price" component={'div'} />
            </label>

            <label>
              Comments
              <Field
                className="commentsField"
                as="textarea"
                type="text"
                name="comments"
                placeholder="Type of pet"
              />
              <ErrorMessage name="comments" component={'div'} />
            </label>
          </InputList>

          <ButtonNextBack className="buttonNext" type="submit">
            Done
            <IconPaw>
              <use href={sprite + '#iconPaw'}></use>
            </IconPaw>
          </ButtonNextBack>

          <ButtonNextBack
            className="buttonBack"
            type="button"
            onClick={() => props.prev(values, selectedFile)}
          >
            <IconArrow>
              <use href={sprite + '#iconArrowLeft'}></use>
            </IconArrow>
            Back
          </ButtonNextBack>
        </Form>
      )}
    </Formik>
  );
};

export default AddPetMoreInfoSell;
