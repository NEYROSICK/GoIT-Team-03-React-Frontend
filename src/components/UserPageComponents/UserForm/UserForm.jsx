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
  ModalTitle,
  YesSvg,
  CloseSvg
} from './UserForm.styled';
import AddPhoto from '../UserPhoto/UserPhoto';
import Modal from './../../Modal/Modal';
import { useDispatch} from 'react-redux'; 

import { useGetUserQuery, useUpdateUserMutation } from '../../../redux/API/UserApi'
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../../redux/auth/operations';
import sprite from '.././../../ui/Icons/sprite.svg'



const UserForm = ({ isUserUpdate, setIsUserUpdate }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [userPhoto, setUserPhoto] = useState(null);
  const { data, isLoading } = useGetUserQuery();
  const [updateUser] = useUpdateUserMutation()
  const navigate = useNavigate();
  const dispatch = useDispatch();
if(!isLoading){
  console.log(data)

}

  const handleSubmit = async (values) => {
    // values.date = values.date.split('-').reverse().join('-') 

    const formData = new FormData();
    formData.append('avatar', userPhoto);

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    console.log(values)
    // const update = values.date.split('-').reverse().join('-') 
// console.log(update)
    await updateUser(values).unwrap();
    setIsUserUpdate(state => !state);
    console.log(userPhoto)
  };
  const hendleClick = () => {
    setIsShowModal(true) 
  } 
  const hendleLogout =()=> {
    dispatch(logOut());
    navigate('/login');
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
          name: '' || data.user.name, 
          date: ''|| data.user.date.split('-').reverse().join('-'),
          email: ''|| data.user.email, 
          city: '' || data.user.city,
          phone: ''|| data.user.phone,
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
                    type="date"
                    name="date"
                    id="date"
                    autoComplete="off"
                    placeholder={'00-00-0000'}
                    disabled={isUserUpdate}
                    // value={"2004-12-12"}
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
                    <use href={sprite + '#iconLogout'}></use>
                  </UserFormSvg>
                  <BtnText>Log Out</BtnText>
                </UserFormBtn>
              ) : (
                <UserFormBtn>
                  <Btn type="submit" >Save</Btn>
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
            <ButtonLogout  onClick={()=>hendleLogout()}>Yes 
            <YesSvg>
               <use href={sprite + '#iconLogout'}></use>
             </YesSvg>
            </ButtonLogout>
          </ConteinerBtn>
          <BtnCloseModal onClick={() => setIsShowModal(false)}>
            <CloseSvg>
            <use href={sprite + '#iconCross'}></use>
            </CloseSvg>
          </BtnCloseModal>
        </ModalConteiner>
      </Modal>: <div></div>}
    </>
  );
};

export default UserForm;
