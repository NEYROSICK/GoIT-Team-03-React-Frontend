import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import {
  Box,
  PhotoContainer,
  UserDataWrapper,
  UserPhotoBtn,
  UserPhotoBtnCheck,
  UserPhotoEdit,
  UserPhotoIcon,
  UserPhotoTitle,
  UserPhotoWrapper,
  UserPhotoBtnEmpty,
  CameraSvg,
} from './UserPhoto.styled';
import sprite from '.././../../ui/Icons/sprite.svg'

const AddPhoto = ({isUserUpdate, setUserPhoto }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSelected, setisSelected] = useState(false);

  const onDrop = acceptedFiles => {
    setSelectedFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
  });
  // const isPhoto = () => {
  // return userPhoto ? userPhoto : 'https://res.cloudinary.com/de2bdafop/image/upload/v1690014491/default-avatar_zfllbo.png'

  // }

  useEffect(() => {
    setisSelected(false);
  }, [selectedFile]);

  const onSubmit = () => {
    setUserPhoto(selectedFile);
    setisSelected(true);
  };

  return (
    <>
      <UserDataWrapper>
        <UserDataWrapper>
          <input type="file" name="image" {...getInputProps()} />
          <UserPhotoBtnEmpty>
            {selectedFile ? (
              <UserPhotoWrapper>
                <PhotoContainer
                  src={URL.createObjectURL(selectedFile)}
                  alt="User's file"
                  style={{ maxWidth: '300px' }}
                />
              </UserPhotoWrapper>
            ) : (
              <UserPhotoWrapper>
                <PhotoContainer
                  src={ 'https://res.cloudinary.com/de2bdafop/image/upload/v1690014491/default-avatar_zfllbo.png'}
                  alt="Default avatar"
                  style={{ maxWidth: '300px' }}
                />
              </UserPhotoWrapper>
            )}
            {!isUserUpdate && (
              <Box>
                {selectedFile && !isSelected ? (
                  <Box>
                    <UserPhotoBtnCheck type="button" onClick={onSubmit}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        fill="none"
                      >
                        <path
                          d="M17 1L6 12L1 7"
                          stroke="#54ADFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </UserPhotoBtnCheck>
                    <UserPhotoTitle>Confirm</UserPhotoTitle>
                    <UserPhotoBtn
                      type="button"
                      onClick={() => setSelectedFile(null)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18 6L6 18"
                          stroke="#F43F5E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 6L18 18"
                          stroke="#F43F5E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      {/* </UserPhotoIconDell> */}
                    </UserPhotoBtn>
                  </Box>
                ) : (
                  <UserPhotoEdit
                    {...getRootProps()}
                    className={`dropzone ${isDragActive ? 'active' : ''}`}
                    type="button"
                  >
                    <UserPhotoIcon>
                      <CameraSvg>
                      <use href={sprite + '#iconCamera'}></use>
                      </CameraSvg>
                    </UserPhotoIcon>
                    Edit photo
                  </UserPhotoEdit>
                )}
              </Box>
            )}
          </UserPhotoBtnEmpty>
        </UserDataWrapper>
      </UserDataWrapper>
    </>
  );
};

export default AddPhoto;

