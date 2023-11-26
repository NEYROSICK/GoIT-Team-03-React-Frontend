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
  ErrorMoreInfoText,
  SexContainer,
  ErrorSex,
} from './AddPetMoreInfo.styled';
import { ButtonNextBack, IconArrow, IconPaw } from '../AddPetForm.styled';
import sprite from '../../../ui/Icons/sprite.svg';

const schema = object({
  sex: string().required('Select a sex'),
  location: string().matches(/^[a-zA-Z\s]+$/, 'Enter only English letters').min(2).required('Enter a location'),
  comments: string().min(2).required('Enter a comment'),
});

const AddPetMoreInfoNotices = (props) => {
  const [selectedFile, setSelectedFile] = useState(props.selectedFile || null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [erMessage, setErMessage] = useState('');

  const [validationPerformed, setValidationPerformed] = useState({
    sex: false,
    location: false,
    comments: false,
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setSelectedFile(file);
      setErMessage('');
    } else {
      setSelectedFile(null);
      setErMessage('Please select a JPEG or PNG');
    }
  };

  const handleBlur = (field) => {
    setValidationPerformed((prev) => ({ ...prev, [field]: true }));
  };

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
      {({ values, touched, errors, setFieldTouched }) => (
        <Form>
          <InputList>
            <SexContainer>
              <p>The Sex</p>
              <SexList>
                <Field
                  type="radio"
                  name="sex"
                  id="female"
                  value="female"
                  className={`${(touched.sex || validationPerformed.sex) && errors.sex ? 'is-invalid' : ''}`}
                />
                <label htmlFor="female">
                  <IconFemale className="iconFemale">
                    <use href={sprite + '#iconFemale'} />
                  </IconFemale>
                  Female
                </label>

                <Field
                  type="radio"
                  name="sex"
                  id="male"
                  value="male"
                  className={`${(touched.sex || validationPerformed.sex) && errors.sex ? 'is-invalid' : ''}`}
                />
                <label htmlFor="male">
                  <IconMale className="iconMale">
                    <use href={sprite + '#iconMale'} />
                  </IconMale>
                  Male
                </label>
                <ErrorMessage name="sex" component={ErrorSex} />
              </SexList>
            </SexContainer>

            <AvatarContainer>
              <p>Choose pet image:</p>
              <LabelInputFile
                className={
                  erMessage !== '' || (formSubmitted && !selectedFile)
                    ? 'no-image-selected'
                    : ''
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
                <InputFile
                  type="file"
                  name="image"
                  accept="image/jpeg, image/png"
                  onChange={handleFileChange}
                />
              </LabelInputFile>
            </AvatarContainer>

            {erMessage && <ErMsFile>{erMessage}</ErMsFile>}

            <label>
              Location
              <Field
                className={`${
                  (touched.location || validationPerformed.location) && errors.location ? 'is-invalid' : ''
                }`}
                type="text"
                name="location"
                placeholder="Type of location"
                onBlur={() => handleBlur('location')}
                onFocus={() => setFieldTouched('location')}
              />
              <ErrorMessage name="location" component={ErrorMoreInfoText} />
            </label>

            <label>
              Comments
              <Field
                type="text"
                as="textarea"
                name="comments"
                placeholder="Type of pet"
                className={`${
                  (touched.comments || validationPerformed.comments) && errors.comments ? 'is-invalid' : ''
                }`}
                onBlur={() => handleBlur('comments')}
                onFocus={() => setFieldTouched('comments')}
              />
              <ErrorMessage name="comments" component={ErrorMoreInfoText} />
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
