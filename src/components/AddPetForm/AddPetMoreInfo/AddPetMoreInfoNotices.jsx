import { Field, ErrorMessage, Form, Formik } from 'formik';
import { useState } from 'react';
import { object, string } from 'yup';
import {
  AvatarContainer,
  ErMsFile,
  IconFemale,
  IconMale,
  IconPlus,
  InputFile,
  InputList,
  LabelInputFile,
  PhotoContainer,
  SexList,
} from './AddPetMoreInfo.styled';
import { ButtonNextBack, IconArrow, IconPaw } from '../AddPetForm.styled';
import sprite from '../../../ui/Icons/sprite.svg';

const schema = object({
  sex: string().required('Select a sex'),
  location: string().required('Enter a location'),
  comments: string().required('Enter a comment'),
});

const AddPetMoreInfoNotices = (props) => {
  const [selectedFile, setSelectedFile] = useState(props.selectedFile || null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [erMessage, setErMessage] = useState('');

  const handleFileChange = (e) => { 
    const file = e.target.files[0];

    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setSelectedFile(file);
      setErMessage('');
    } else {
      setSelectedFile(null);
      setErMessage('Please select a JPEG or PNG');
    }
  }

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
                  (erMessage !== '') || formSubmitted && !selectedFile ? 'no-image-selected' : ''
                }
              >
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
                <InputFile type="file" name="image" accept='image/jpeg, image/png' onChange={handleFileChange}/>
              </LabelInputFile>
            </AvatarContainer>

            {erMessage && <ErMsFile>{erMessage}</ErMsFile>}

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
              Comments
              <Field type="text" name="comments" placeholder="Type of pet" />
              <ErrorMessage name="comments" component={'div'} />
            </label>

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
          </InputList>
        </Form>
      )}
    </Formik>
  );
};

export default AddPetMoreInfoNotices;
