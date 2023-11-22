/* eslint-disable react/jsx-key */
import { useState } from 'react';
import AddPetChooseOption from './AddPetChooseOption/AddPetChooseOption'
import AddPetPersonalDetailsNotices from './AddPetPersonalDetails/AddPetPersonalDetailsNotices';
import AddPetPersonalDetailsYourPet from './AddPetPersonalDetails/AddPetPersonalDetailsYourPet';
import AddPetMoreInfoYourPet from './AddPetMoreInfo/AddPetMoreInfoYourPet';
import AddPetMoreInfoNotices from './AddPetMoreInfo/AddPetMoreInfoNotices';
import AddPetMoreInfoSell from './AddPetMoreInfo/AddPetMoreInfoSell';
import { useNavigate } from 'react-router-dom';

const AddPetForm = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    const [petPhoto, setPetPhoto] = useState(null);

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

    const makeRequest = (formData, selectedFile) => { 
        console.log(formData);
        console.log(selectedFile);
        const redirectTo = formData.category === 'your pet' ? '/user' : '/notices';
        navigate(redirectTo)
    }

    const handleNextPage = (newData, final = false, selectedFile = '') => {
        setFormData(prev => ({ ...prev, ...newData }))

        if (final) {
            makeRequest(newData, selectedFile)
            return
        }
        
        switch (newData.category) {
            case "your pet":
                setStep(prev => prev + 1);
                if (step === 0 && newData.category !== formData.category) {
                    resetFormData(newData.category);
                    setPetPhoto(null)
                }                
            break;

            case "sell":
                if (step === 0) {
                    if (newData.category !== formData.category) {
                        resetFormData(newData.category);
                        setPetPhoto(null)
                    } 
                    setStep(prev => prev + 3); 
                }
                if (step === 3) {
                    setStep(prev => prev + 2); 
                }
                break;
            
            default :
                if (step === 0) {
                    if (newData.category !== formData.category) {
                        resetFormData(newData.category);
                        setPetPhoto(null)
                    }                
                    setStep(prev => prev + 3); 
                }
                if (step === 3) {
                    setStep(prev => prev + 1); 
                }
        }
    };

    const handleBackPage = (newData, selectedFile = '') => {
        setFormData(prev => ({ ...prev, ...newData })) 
        switch (newData.category) {
            case "your pet":
                setStep(prev => prev - 1);
                if (selectedFile !== "") {
                    setPetPhoto(selectedFile);
                }                
            break;

            case "sell":
                if (step === 3) {
                    setStep(prev => prev - 3);
                    if (selectedFile !== "") {
                        setPetPhoto(selectedFile);
                    }
                }
                if (step === 5) {
                    setStep(prev => prev - 2);
                    if (selectedFile !== "") {
                        setPetPhoto(selectedFile);
                    }
                }
            break;
            
            default:
                if (step === 3) {
                    setStep(prev => prev - 3);
                    if (selectedFile !== "") {
                        setPetPhoto(selectedFile);
                    }                    
                }
                if (step === 4) {
                    setStep(prev => prev - 1);
                    if (selectedFile !== "") {
                        setPetPhoto(selectedFile);
                    }                    
                }
        }
    };

    const steps = [
        <AddPetChooseOption next={handleNextPage} data={formData} selectedFile={petPhoto}/>,
        <AddPetPersonalDetailsYourPet next={handleNextPage} prev={handleBackPage} data={formData} selectedFile={petPhoto}/>,
        <AddPetMoreInfoYourPet next={handleNextPage} prev={handleBackPage} data={formData} selectedFile={petPhoto} />,        
        <AddPetPersonalDetailsNotices next={handleNextPage} prev={handleBackPage} data={formData} selectedFile={petPhoto}/>,
        <AddPetMoreInfoNotices next={handleNextPage} prev={handleBackPage} data={formData} selectedFile={petPhoto}/>,
        <AddPetMoreInfoSell next={handleNextPage} prev={handleBackPage} data={formData} selectedFile={petPhoto}/>
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

export default AddPetForm