/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Container } from './AddPetPage.styled';
import ChooseOption from '../../components/ChooseOption/ChooseOption';
import PersonalDetails from '../../components/PersonalDetails/PersonalDetails';
import MoreInfo from '../../components/MoreInfo/MoreInfo';
import { Form, Formik } from 'formik';
import { object, string, date, number} from 'yup';

const schema = object({
    title: string().required(),
    name: string().required(),
    date: date().required(),
    type: string().required(),
    sex: string().required(),
    location: string().required(),
    price: number().required(),
    comments: string().required(),
    category: string().required(),
 });

const AddPetPage = () => {
    const [step, setStep] = useState(0);
    const [category, setCategory] = useState('');
    const steps = [<ChooseOption setCategory={setCategory}/>, <PersonalDetails setCategory={category}/>, <MoreInfo setCategory={category}/>];
    const nextPage = () => setStep(step + 1);
    const backPage = () => setStep(step - 1);
    
    const initialValues = {
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
    }
    const handleSubmit = (values) => {
        console.log(values);
    }

    const getTitle = (category) => {
        switch (category) {
            case 'your pet':
                return 'Add pet';
            case 'sell':
                return 'Add pet for sale';
            case 'lost/found':
                return 'Add lost pet';
            case 'in good hands':
                return 'Add pet in good hands';
            default:
                return 'Add pet';
        }
    };


    return (
        <Container>
            <div>
                <h1>{getTitle(category)}</h1>
                <ul>
                    <li>Choose option</li>
                    <li>Personal details</li>
                    <li>More info</li>
                </ul>
            </div>
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
                <Form>
                        {steps[step]}
                        {steps[step] === steps[0] ? (
                        <button type="button">cancel</button>
                        ) : (
                        <button type="button" onClick={backPage}>Back</button>
                        )}
                        {steps[step] === steps[2] ? (
                        <button type="submit" onClick={handleSubmit}>done</button>
                        ) : (
                        <button type="button" onClick={nextPage}>Next</button>
                        )}
                        
                    </Form>
            </Formik>
        </Container>
    )
};

export default AddPetPage