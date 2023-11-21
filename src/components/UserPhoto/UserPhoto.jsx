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
} from './UserPhoto.styled';

const AddPhoto = ({ isUserUpdate, setUserPhoto }) => {
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
          <input {...getInputProps()} />
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
                  src="https://res.cloudinary.com/de2bdafop/image/upload/v1690014491/default-avatar_zfllbo.png"
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
                          stroke="#54ADFF"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 9C3 7.89543 3.89543 7 5 7H7.5C8.05228 7 8.5 6.55228 8.5 6C8.5 5.44772 8.94772 5 9.5 5H14.5C15.0523 5 15.5 5.44772 15.5 6C15.5 6.55228 15.9477 7 16.5 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9Z"
                          stroke="#54ADFF"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
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

