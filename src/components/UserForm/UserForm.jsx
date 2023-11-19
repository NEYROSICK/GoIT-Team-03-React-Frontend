import { Formik } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';

import {
  UserFormBody,
  UserFormInput,
  UserFormItem,
  UserFormLabel,
  UserFormBtn,
  Btn,
  UserFormList,
  UserFormInfo,
  BtnText,
  UserFormSvg,
} from './UserForm.styled';
// import { useAuth } from '../../hooks';

import AddPhoto from '../UserPhoto/UserPhoto';


import { useState } from 'react';


const UserForm = ({ isUserUpdate, setIsUserUpdate }) => {
  // const [isShowModal, setIsShowModal] = useState(false);
  const [userPhoto, setUserPhoto] = useState(null);

  // const dispatch = useDispatch();

  //   const user = useSelector(authSelectors.selectUser);

  // const { user } = useAuth();
  const initialValues = {
    name: '', // user.name
    birthday: '',
    email: '', //user.email
    city: '',
    phone: '',
  };

  const handleSubmit = values => {
  //   console.log(userPhoto);
    // const formData = new FormData();
    // formData.append('avatar', userPhoto);
    // Object.entries(values).forEach(([key, value]) => {
    //   formData.append(key, value);
    // });
    // dispatch(updateUser(formData));
    setIsUserUpdate(state => !state);
  };

  // const toggleModal = () => {
  //   setIsShowModal(state => !state);
  // };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} >
        <UserFormBody>
          <AddPhoto isUserUpdate={isUserUpdate} setUserPhoto={setUserPhoto} />
          <UserFormInfo>
            <UserFormList>
              <UserFormItem>
                <UserFormLabel htmlFor={`name`}>Name:</UserFormLabel>
                <UserFormInput
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder={'Anna'}
                  disabled={isUserUpdate}
                  minLength="3"
                  required
                />
              </UserFormItem>
              <UserFormItem>
                <UserFormLabel htmlFor={`email`}>Email:</UserFormLabel>
                <UserFormInput
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder={'anna00@gmail.com|'}
                  disabled={isUserUpdate}
                  minLength="3"
                  required
                />
              </UserFormItem>
              <UserFormItem>
                <UserFormLabel htmlFor={`birthDate`}>Birthday:</UserFormLabel>
                <UserFormInput
                  type="text"
                  name="birthday"
                  id="birthday"
                  autoComplete="off"
                  placeholder={'00-00-0000'}
                  disabled={isUserUpdate}
                  minLength="10"
                  required
                />
              </UserFormItem>
              <UserFormItem>
                <UserFormLabel htmlFor={`phone`}>Phone:</UserFormLabel>
                <UserFormInput
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder={'+38000000000'}
                  disabled={isUserUpdate}
                  minLength="11"
                  maxLength="17"
                  pattern="+[0-9]{3}-[0-9]{3}-[0-9]{7}"
                  title="+xx xxx xxxxxxx"
                  required
                />
              </UserFormItem>
              <UserFormItem>
                <UserFormLabel htmlFor={`city`}>City:</UserFormLabel>
                <UserFormInput
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="off"
                  placeholder={'Kyiv'}
                  disabled={isUserUpdate}
                  minLength="3"
                  required
                />
              </UserFormItem>
            </UserFormList>
            {isUserUpdate ? (
              <UserFormBtn type="button">
                {/* onClick={toggleModal} */}
                <UserFormSvg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14 4L18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H14M3 12L15 12M3 12L7 8M3 12L7 16"
                      stroke="#54ADFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </UserFormSvg>
                <BtnText>Log Out</BtnText>
              </UserFormBtn>
            ) : (
              <UserFormBtn>
                <Btn type="submit">Save</Btn>
              </UserFormBtn>
            )}
          </UserFormInfo>
        </UserFormBody>
      </Formik>
      {/* {isShowModal && <ModalLogOut toggleModal={toggleModal} />} */}
    </>
  );
};

export default UserForm;
