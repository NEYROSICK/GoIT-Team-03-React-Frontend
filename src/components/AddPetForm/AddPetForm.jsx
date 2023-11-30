/* eslint-disable no-case-declarations */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import AddPetChooseOption from './AddPetChooseOption/AddPetChooseOption';
import AddPetPersonalDetailsNotices from './AddPetPersonalDetails/AddPetPersonalDetailsNotices';
import AddPetPersonalDetailsYourPet from './AddPetPersonalDetails/AddPetPersonalDetailsYourPet';
import AddPetMoreInfoYourPet from './AddPetMoreInfo/AddPetMoreInfoYourPet';
import AddPetMoreInfoNotices from './AddPetMoreInfo/AddPetMoreInfoNotices';
import AddPetMoreInfoSell from './AddPetMoreInfo/AddPetMoreInfoSell';
import { useNavigate } from 'react-router-dom';
import {
  useAddNoticeMutation,
  useAddPetMutation,
} from '../../redux/API/RTKQueryApi';

import { FormSection, FormStyled, StepList, Title } from './AddPetForm.styled';
import { Container } from '../Layout/Container/Container';

const AddPetForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [petPhoto, setPetPhoto] = useState(null);
  const [addPet] = useAddPetMutation();
  const [addNotice] = useAddNoticeMutation();
  const [isTitleCentered, setIsTitleCentered] = useState(false);

  const [formData, setFormData] = useState({
    category: '',
    title: '',
    name: '',
    date: '',
    type: '',
    sex: '',
    location: '',
    price: '',
    comments: '',
  });

  const resetFormData = (category) => {
    setFormData({
      category: category,
      title: '',
      name: '',
      date: '',
      type: '',
      sex: '',
      location: '',
      price: '',
      comments: '',
    });
  };

  const makeRequest = (newData, selectedFile) => {
    const formData = new FormData();
    const formatToDDMMYYYY = (dateString) => {
      const dateObject = new Date(dateString);
      const day = String(dateObject.getDate()).padStart(2, '0');
      const month = String(dateObject.getMonth() + 1).padStart(2, '0');
      const year = dateObject.getFullYear();

      return `${day}-${month}-${year}`;
    };
    let data = {};
    if (newData.category === 'your-pet') {
      data = {
        name: newData.name,
        date: formatToDDMMYYYY(newData.date),
        type: newData.type,
        comments: newData.comments,
        image: selectedFile,
      };
    }
    if (newData.category === 'sell') {
      data = {
        category: newData.category,
        title: newData.title,
        name: newData.name,
        date: formatToDDMMYYYY(newData.date),
        type: newData.type,
        sex: newData.sex,
        location: newData.location,
        comments: newData.comments,
        price: newData.price,
        image: selectedFile,
      };
    }
    if (
      newData.category === 'lost-found' ||
      newData.category === 'in-good-hands'
    ) {
      data = {
        category: newData.category,
        title: newData.title,
        name: newData.name,
        date: formatToDDMMYYYY(newData.date),
        type: newData.type,
        sex: newData.sex,
        location: newData.location,
        comments: newData.comments,
        image: selectedFile,
      };
    }

    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    if (newData.category === 'your-pet') {
      addPet(formData);
    } else {
      addNotice(formData);
    }

    const redirectTo =
      newData.category === 'your-pet'
        ? '/user'
        : `/notices/${newData.category}`;
    navigate(redirectTo);
    resetFormData('');
  };

  const handleNextPage = (newData, final = false, selectedFile = '') => {
    setFormData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData, selectedFile);
      return;
    }

    switch (newData.category) {
      case 'your-pet':
        setStep((prev) => prev + 1);
        if (step === 0 && newData.category !== formData.category) {
          resetFormData(newData.category);
          setPetPhoto(null);
        }
        break;

      case 'sell':
        if (step === 0) {
          if (newData.category !== formData.category) {
            resetFormData(newData.category);
            setPetPhoto(null);
          }
          setStep((prev) => prev + 3);
        }
        if (step === 3) {
          setStep((prev) => prev + 2);
        }
        break;

      default:
        if (step === 0) {
          if (newData.category !== formData.category) {
            resetFormData(newData.category);
            setPetPhoto(null);
          }
          setStep((prev) => prev + 3);
        }
        if (step === 3) {
          setStep((prev) => prev + 1);
        }
    }
  };

  const handleBackPage = (newData, selectedFile = '') => {
    setFormData((prev) => ({ ...prev, ...newData }));
    switch (newData.category) {
      case 'your-pet':
        setStep((prev) => prev - 1);
        if (selectedFile !== '') {
          setPetPhoto(selectedFile);
        }
        break;

      case 'sell':
        if (step === 3) {
          setStep((prev) => prev - 3);
          if (selectedFile !== '') {
            setPetPhoto(selectedFile);
          }
        }
        if (step === 5) {
          setStep((prev) => prev - 2);
          if (selectedFile !== '') {
            setPetPhoto(selectedFile);
          }
        }
        break;

      default:
        if (step === 3) {
          setStep((prev) => prev - 3);
          if (selectedFile !== '') {
            setPetPhoto(selectedFile);
          }
        }
        if (step === 4) {
          setStep((prev) => prev - 1);
          if (selectedFile !== '') {
            setPetPhoto(selectedFile);
          }
        }
    }
  };

  const steps = [
    <AddPetChooseOption
      next={handleNextPage}
      data={formData}
      selectedFile={petPhoto}
    />,
    <AddPetPersonalDetailsYourPet
      next={handleNextPage}
      prev={handleBackPage}
      data={formData}
      selectedFile={petPhoto}
    />,
    <AddPetMoreInfoYourPet
      next={handleNextPage}
      prev={handleBackPage}
      data={formData}
      selectedFile={petPhoto}
      setIsTitleCentered={setIsTitleCentered}
    />,
    <AddPetPersonalDetailsNotices
      next={handleNextPage}
      prev={handleBackPage}
      data={formData}
      selectedFile={petPhoto}
    />,
    <AddPetMoreInfoNotices
      next={handleNextPage}
      prev={handleBackPage}
      data={formData}
      selectedFile={petPhoto}
      setIsTitleCentered={setIsTitleCentered}
    />,
    <AddPetMoreInfoSell
      next={handleNextPage}
      prev={handleBackPage}
      data={formData}
      selectedFile={petPhoto}
      setIsTitleCentered={setIsTitleCentered}
    />,
  ];

  const getTitle = () => {
    switch (formData.category) {
      case 'your-pet':
        return 'Add pet';
      case 'sell':
        return 'Add pet for sale';
      case 'lost-found':
        return 'Add lost pet';
      case 'in-good-hands':
        return 'In good hands';
      default:
        return 'Add pet';
    }
  };

  return (
    <>
      <FormSection>
        <Container>
          <FormStyled className={isTitleCentered ? 'centered' : ''}>
            <Title className={isTitleCentered ? 'centered' : ''}>
              {step === 0 ? 'Add pet' : getTitle()}
            </Title>
            <StepList>
              <li className={step === 0 ? 'is-selected' : 'is-done'}>
                Choose option{' '}
              </li>
              <li
                className={
                  step === 1 || step === 3
                    ? 'is-selected'
                    : step === 0
                    ? ''
                    : 'is-done'
                }
              >
                Personal details
              </li>
              <li
                className={
                  step === 2 || step === 4 || step === 5 ? 'is-selected' : ''
                }
              >
                More info
              </li>
            </StepList>
            {steps[step]}
          </FormStyled>
        </Container>
      </FormSection>
    </>
  );
};

export default AddPetForm;
