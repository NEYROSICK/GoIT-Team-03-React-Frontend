import { Formik } from 'formik';
import { useState, useEffect } from 'react';
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
  ModalConteiner,
  BtnCloseModal,
  ConteinerBtn,
  ButtonCansel,
  ButtonLogout,
  ModalTitle
} from './UserForm.styled';
import AddPhoto from '../UserPhoto/UserPhoto';
import Modal from '../Modal/Modal';


import { useGetUserQuery, useUpdateUserMutation } from '../redux/API/UserApi'




const UserForm = ({ isUserUpdate, setIsUserUpdate }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [userPhoto, setUserPhoto] = useState(null);
  const { data, isLoading } = useGetUserQuery();
  const [updateUser] = useUpdateUserMutation()

  console.log(userPhoto)
  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('avatar', userPhoto);
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await updateUser(formData ).unwrap();
    setIsUserUpdate(state => !state);
  };
  const hendleClick = () => {
    setIsShowModal(true) 
  
  } 
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setIsShowModal(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <>
      {isLoading ? <h1>loading..</h1> : 
        <Formik initialValues={{
          name: data[0].name, 
          birthday: data[0].birthday,
          email: data[0].email, 
          city: data[0].city,
          phone: data[0].phone,
}} onSubmit={handleSubmit}  >
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
                <UserFormBtn type="button" onClick={hendleClick }>
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
        </Formik>}
      {isShowModal ? <Modal isOpen={setIsShowModal}>
        <ModalConteiner>
          <ModalTitle>Already leaving?</ModalTitle>
            <ConteinerBtn>
            <ButtonCansel onClick={() => setIsShowModal(false)}>Cancel</ButtonCansel>
            <ButtonLogout>Yes 
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M14.5 4L18.5 4C19.6046 4 20.5 4.89543 20.5 6V18C20.5 19.1046 19.6046 20 18.5 20H14.5M3.5 12L15.5 12M3.5 12L7.5 8M3.5 12L7.5 16" stroke="#FEF9F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ButtonLogout>
          </ConteinerBtn>
          <BtnCloseModal onClick={() => setIsShowModal(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 5L5 19M5.00004 5L19 19" stroke="#54ADFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </BtnCloseModal>
        </ModalConteiner>
      </Modal>: <div></div>}
    </>
  );
};

export default UserForm;
