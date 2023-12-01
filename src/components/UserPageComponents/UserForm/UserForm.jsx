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
  CloseSvg,
  InputConteiner,
  ErrorMessage,
} from './UserForm.styled';
import Loader from "../../../ui/Loader/Loader";
import { useSelector } from 'react-redux';
import AddPhoto from '../UserPhoto/UserPhoto';
import Modal from './../../Modal/Modal';

import {
  useGetMeAndPetsQuery,
  useUpdateUserMutation,
  useLogOutMutation,
} from '../../../redux/API/RTKQueryApi';
import { useNavigate } from 'react-router-dom';
import sprite from '.././../../ui/Icons/sprite.svg';
import { object, string, date } from 'yup';
import {selectToken} from '../../../redux/auth/selectors'

const UserForm = ({ isUserUpdate, setIsUserUpdate }) => {
  const Token = useSelector(selectToken)
  const [isShowModal, setIsShowModal] = useState(false);
  const [userPhoto, setUserPhoto] = useState(null);
  const { data, isLoading } = useGetMeAndPetsQuery();
  const [updateUser] = useUpdateUserMutation();
  const [LogOut] = useLogOutMutation();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    values.date.split('-').reverse().join('-');
    const formData = new FormData();
    const formatToDDMMYYYY = (dateString) => {
      const dateObject = new Date(dateString);
      const day = String(dateObject.getDate()).padStart(2, '0');
      const month = String(dateObject.getMonth() + 1).padStart(2, '0');
      const year = dateObject.getFullYear();

      return `${day}-${month}-${year}`;
    };
    let data;
    userPhoto
      ? (data = {
          name: values.name,
          email: values.email,
          date: formatToDDMMYYYY(values.date),
          phone: values.phone,
          city: values.city,
          image: userPhoto,
        })
      : (data = {
          name: values.name,
          email: values.email,
          date: formatToDDMMYYYY(values.date),
          phone: values.phone,
          city: values.city,
        });
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    updateUser(formData).unwrap();
    setIsUserUpdate((state) => !state);
  };
  const hendleClick = () => {
    setIsShowModal(true);
  };
  const hendleLogout =  async() => {
    await LogOut(Token).unwrap();
    navigate('/login');
    localStorage.removeItem('persist:auth');
    window.location.reload();
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setIsShowModal(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const Schema = object({
    name: string()
      .min(3, 'Name Too Short!')
      .max(16, 'Too Long!')
      .required('Required'),
    date: date()
      .required('Enter a date of birth')
      .max(new Date(), 'Date cannot be in the future'),
    email: string()
      .email('Invalid email format')
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        'Invalid Email format',
      )
      .required('Email is required'),
    city: string().min(3, 'City Too Short!').required('Required'),
    phone: string().matches(/^\+\d{12}$/,'Phone must have + and length 12').min(13, 'Phone Too Short!').max(13,"Phone Too long").required('Required'), 
  });

  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : (
        <Formik
          initialValues={{
            name: data.user.name ? data.user.name : '',
            date: data.user.date
              ? data.user.date.split('-').reverse().join('-')
              : '',
            email: data.user.email ? data.user.email : '',
            city: data.user.city ? data.user.city : data.user.city,
            phone: data.user.phone ? data.user.phone : '',
          }}
          validationSchema={Schema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <UserFormBody>
              <AddPhoto
                isUserUpdate={isUserUpdate}
                setUserPhoto={setUserPhoto}
              />
              <UserFormInfo>
                <UserFormList>
                  <UserFormItem>
                    <InputConteiner>
                      <UserFormLabel htmlFor={`name`}>Name:</UserFormLabel>
                      <UserFormInput
                        type="text"
                        name="name"
                        id="name"
                        placeholder={'Anna'}
                        disabled={isUserUpdate}
                      />
                    </InputConteiner>
                    {errors.name && touched.name ? (
                      <ErrorMessage>{errors.name}</ErrorMessage>
                    ) : null}
                  </UserFormItem>
                  <UserFormItem>
                    <InputConteiner>
                      <UserFormLabel htmlFor={`email`}>Email:</UserFormLabel>
                      <UserFormInput
                        name="email"
                        id="email"
                        placeholder={'anna00@gmail.com|'}
                        disabled={isUserUpdate}
                        className={`${
                          touched.name && errors.name ? 'is-invalid' : ''
                        }`}
                      />
                    </InputConteiner>
                    {errors.email && touched.email ? (
                      <ErrorMessage>{errors.email}</ErrorMessage>
                    ) : null}
                  </UserFormItem>
                  <UserFormItem>
                    <InputConteiner>
                      <UserFormLabel htmlFor={`birthDate`}>
                        Birthday:
                      </UserFormLabel>
                      <UserFormInput
                        type="date"
                        name="date"
                        id="date"
                        placeholder={'00-00-0000'}
                        disabled={isUserUpdate}
                      />
                    </InputConteiner>
                    {errors.date && touched.date ? (
                      <ErrorMessage>{errors.date}</ErrorMessage>
                    ) : null}
                  </UserFormItem>
                  <UserFormItem>
                    <InputConteiner>
                      <UserFormLabel htmlFor={`phone`}>Phone:</UserFormLabel>
                      <UserFormInput
                        type="phone"
                        name="phone"
                        id="phone"
                        placeholder={'+38000000000'}
                        disabled={isUserUpdate}
                      />
                    </InputConteiner>

                    {errors.phone && touched.phone ? (
                      <ErrorMessage>{errors.phone}</ErrorMessage>
                    ) : null}
                  </UserFormItem>
                  <UserFormItem>
                    <InputConteiner>
                      <UserFormLabel htmlFor={`city`}>City:</UserFormLabel>
                      <UserFormInput
                        type="text"
                        name="city"
                        id="city"
                        placeholder={'Kyiv'}
                        disabled={isUserUpdate}
                      />
                    </InputConteiner>
                    {errors.city && touched.city ? (
                      <ErrorMessage>{errors.city}</ErrorMessage>
                    ) : null}
                  </UserFormItem>
                </UserFormList>
                {isUserUpdate ? (
                  <UserFormBtn type="button" onClick={hendleClick}>
                    <UserFormSvg>
                      <use href={sprite + '#iconLogout'}></use>
                    </UserFormSvg>
                    <BtnText>Log Out</BtnText>
                  </UserFormBtn>
                ) : (
                    <Btn type="submit">Save</Btn>
                )}
              </UserFormInfo>
            </UserFormBody>
          )}
        </Formik>
      )}
      {isShowModal ? (
        <Modal isOpen={setIsShowModal}>
          <ModalConteiner>
            <ModalTitle>Already leaving?</ModalTitle>
            <ConteinerBtn>
              <ButtonCansel onClick={() => setIsShowModal(false)}>
                Cancel
              </ButtonCansel>
              <ButtonLogout onClick={() => hendleLogout()}>
                Yes
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
        </Modal>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default UserForm;
