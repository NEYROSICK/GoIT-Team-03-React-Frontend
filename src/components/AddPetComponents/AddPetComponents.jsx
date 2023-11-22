/* eslint-disable react/jsx-key */
import { useState } from 'react';
import AddPetChooseOption from '../AddPetComponents/AddPetChooseOption/AddPetChooseOption'
import AddPetPersonalDetailsNotices from '../AddPetComponents/AddPetPersonalDetails/AddPetPersonalDetailsNotices';
import AddPetPersonalDetailsYourPet from '../AddPetComponents/AddPetPersonalDetails/AddPetPersonalDetailsYourPet';
import AddPetMoreInfoYourPet from '../AddPetComponents/AddPetMoreInfo/AddPetMoreInfoYourPet';
import AddPetMoreInfoNotices from '../AddPetComponents/AddPetMoreInfo/AddPetMoreInfoNotices';
import AddPetMoreInfoSell from '../AddPetComponents/AddPetMoreInfo/AddPetMoreInfoSell';

const AddPetComponents = () => {
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
        if (step === 0 && newData.category !== formData.category) {
            resetFormData(newData.category);
        }
        setFormData(prev => ({ ...prev, ...newData }))
        
        if (final) {
            makeRequest(newData)
            return
        }
        
        switch (newData.category) {
            case "your pet":
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
        <div>
            <div>
                <h1>{step === 0 ? 'Add pet' : getTitle()}</h1>
                <ul>
                    <li>Choose option</li>
                    <li>Personal details</li>
                    <li>More info</li>
                </ul>
            </div>
            {steps[step]}
        </div>
    )
};

export default AddPetComponents