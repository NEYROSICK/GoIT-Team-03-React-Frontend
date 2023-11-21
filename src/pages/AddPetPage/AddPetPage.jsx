/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Container } from './AddPetPage.styled';
import AddPetChooseOption from '../../components/AddPetChooseOption/AddPetChooseOption'
import AddPetPersonalDetailsNotices from '../../components/AddPetPersonalDetails/AddPetPersonalDetailsNotices';
import AddPetPersonalDetailsYourPet from '../../components/AddPetPersonalDetails/AddPetPersonalDetailsYourPet';
import AddPetMoreInfoYourPet from '../../components/AddPetMoreInfo/AddPetMoreInfoYourPet';
import AddPetMoreInfoNotices from '../../components/AddPetMoreInfo/AddPetMoreInfoNotices';
import AddPetMoreInfoSell from '../../components/AddPetMoreInfo/AddPetMoreInfoSell';
// import { object, string, date, number } from 'yup';

// const schema = object({
//     title: string().required(),
//     name: string().required(),
//     date: date().required(),
//     type: string().required(),
//     sex: string().required(),
//     location: string().required(),
//     price: number().required(),
//     comments: string().required(),
//     category: string().required(),
//  });

const AddPetPage = () => {
    const [step, setStep] = useState(0)

    const [formData, setFormData] = useState({
        category: '',
        title: '',
        name: '',
        date: '',
        type: '',
        sex: '',
        location: '',
        price: '',
        image: '',
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
            image: '',
            comments: '',
        });
    };

    const makeRequest = (formData) => { 
        console.log(formData);
    }

    const handleNextPage = (newData, final = false) => {
        console.log(newData)
        setFormData(prev => ({ ...prev, ...newData }))
        
        if (final) {
            makeRequest(newData)
            return
        }
        
        switch (newData.category) {
            case "your pet":
                if (step === 0) {
                    resetFormData(newData.category);
                }
                setStep(prev => prev + 1);
                break;

            case "sell":
                if (step === 0) {
                    resetFormData(newData.category);
                    setStep(prev => prev + 3); 
                }
                if (step === 3) {
                    setStep(prev => prev + 2); 
                }
                break;
            
            default :
                if (step === 0) {
                    resetFormData(newData.category);
                    setStep(prev => prev + 3); 
                }
                if (step === 3) {
                     setStep(prev => prev + 1); 
                }
        }
    };

    const handleBackPage = (newData) => {
        setFormData(prev => ({ ...prev, ...newData })) 
        switch (newData.category) {
            case "your pet":
                setStep(prev => prev - 1);
                break;

            case "sell":
                if (step === 3) {
                    setStep(prev => prev - 3);
                }
                if (step === 5) {
                    setStep(prev => prev - 2);
                }
                break;
            
            default:
                if (step === 3) {
                    setStep(prev => prev - 3);
                }
                if (step === 4) {
                    setStep(prev => prev - 1);
                }
        }
    };

    const steps = [
        <AddPetChooseOption next={handleNextPage} data={formData}/>,
        <AddPetPersonalDetailsYourPet next={handleNextPage} prev={handleBackPage} data={formData} />,
        <AddPetMoreInfoYourPet next={handleNextPage} prev={handleBackPage} data={formData} />,        
        <AddPetPersonalDetailsNotices next={handleNextPage} prev={handleBackPage} data={formData} />,
        <AddPetMoreInfoNotices next={handleNextPage} prev={handleBackPage} data={formData} />,
        <AddPetMoreInfoSell next={handleNextPage} prev={handleBackPage} data={formData} />
    ];   

    const getTitle = () => {
        switch (formData.category) {
            case 'your pet':
                return 'Add pet';
            case 'sell':
                return 'Add pet for sale';
            case 'lost/found':
                return 'Add lost pet';
            case 'in good hands':
                return 'In good hands';
            default:
                return 'Add pet';
        }
    };

    return (
        <Container>
            <div>
                <h1>{step === 0 ? 'Add pet' : getTitle()}</h1>
                <ul>
                    <li>Choose option</li>
                    <li>Personal details</li>
                    <li>More info</li>
                </ul>
            </div>
            {steps[step]}
        </Container>
    )
};

export default AddPetPage