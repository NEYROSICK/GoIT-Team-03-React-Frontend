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
  CheckSvg,
  XSvg,
} from './UserPhoto.styled';
import sprite from '.././../../ui/Icons/sprite.svg';

import { useGetMeAndPetsQuery } from '../../../redux/API/RTKQueryApi';

const AddPhoto = ({ isUserUpdate, setUserPhoto }) => {
  const { data = [], isLoading } = useGetMeAndPetsQuery();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSelected, setisSelected] = useState(false);

  const onDrop = (acceptedFiles) => {
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
      {isLoading ? (
        <h1>loading..</h1>
      ) : (
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
                    src={
                      data.user.avatarURL
                        ? data.user.avatarURL
                        : 'https://res.cloudinary.com/de2bdafop/image/upload/v1690014491/default-avatar_zfllbo.png'
                    }
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
                        <CheckSvg>
                          <use href={sprite + '#iconCheck'}></use>
                        </CheckSvg>
                      </UserPhotoBtnCheck>
                      <UserPhotoTitle>Confirm</UserPhotoTitle>
                      <UserPhotoBtn
                        type="button"
                        onClick={() => setSelectedFile(null)}
                      >
                        <XSvg>
                          <use href={sprite + '#iconCross'}></use>
                        </XSvg>
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
      )}
    </>
  );
};

export default AddPhoto;
