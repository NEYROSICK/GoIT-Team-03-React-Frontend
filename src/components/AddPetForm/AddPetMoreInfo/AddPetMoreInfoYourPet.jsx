import { Field, ErrorMessage, Form, Formik } from 'formik';
import { object, string } from 'yup';
import {
  AvatarContainer,
  CommentLabel,
  ErMsFile,
  ErrorMoreInfoComments,
  IconBigPlus,
  IconPlus,
  InputFile,
  InputList,
  LabelInputFile,
  PhotoContainer,
} from './AddPetMoreInfo.styled';
import { useState } from 'react';
import {
  ButtonContainer,
  ButtonNextBack,
  IconArrow,
  IconPaw,
} from '../AddPetForm.styled';
import sprite from '../../../ui/Icons/sprite.svg';

const schema = object({
  comments: string()
    .min(2, 'Comments must be at least 2 characters')
    .max(120, 'Comments must not exceed 120 characters')
    .required('Enter a comment'),
});

const AddPetMoreInfoYourPet = (props) => {
  const [selectedFile, setSelectedFile] = useState(props.selectedFile || null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [erMessage, setErMessage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 3 * 1024 * 1024;
    if (file.size <= maxSize && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setSelectedFile(file);
      setErMessage('');
    } else {
      setSelectedFile(null);
      setErMessage('Please select a JPEG or PNG file within 3MB size limit');
    }
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
      {({ values, touched, errors }) => (
        <Form>
          <InputList>
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
                  <>
                    <IconPlus>
                      <use href={sprite + '#iconPlusAvatar'} />
                    </IconPlus>
                    <IconBigPlus>
                      <use href={sprite + '#iconPlus'} />
                    </IconBigPlus>
                  </>
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

            <CommentLabel>
              Comments
              <Field
                as="textarea"
                type="text"
                name="comments"
                placeholder="Type of pet"
                className={`${
                  touched.comments && errors.comments ? 'is-invalid' : ''
                }`}
              />
              <ErrorMessage name="comments" component={ErrorMoreInfoComments} />
            </CommentLabel>
            <ButtonContainer>
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
            </ButtonContainer>
          </InputList>
        </Form>
      )}
    </Formik>
  );
};

export default AddPetMoreInfoYourPet;
