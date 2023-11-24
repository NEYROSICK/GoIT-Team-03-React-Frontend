import { Form, Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import {
  ButtonBack,
  ButtonNext,
  IconArrow,
  IconPaw,
  Input,
  OptionList,
} from './AddPetChooseOption.styled';

import sprite from '../../../ui/Icons/sprite.svg';

const schema = object({
  category: string().required('Select a category'),
});

const AddPetChooseOption = (props) => {
  const handleCancel = () => {
    console.log('Cancel');
  };

  const handleSubmit = (values) => {
    props.next(values);
    console.log(values);
  };

  return (
    <Formik
      initialValues={props.data}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <OptionList>
          <Input type="radio" name="category" id="your-pet" value="your-pet" />
          <label htmlFor="your-pet">your pet</label>

          <Input type="radio" name="category" id="sell" value="sell" />
          <label htmlFor="sell">sell</label>

          <Input
            type="radio"
            name="category"
            id="lost-found"
            value="lost-found"
          />
          <label htmlFor="lost-found">lost/found</label>

          <Input
            type="radio"
            name="category"
            id="in-good-hands"
            value="in-good-hands"
          />
          <label htmlFor="in-good-hands">in good hands</label>

          <ErrorMessage name="category" component={'div'} />
        </OptionList>

        <ButtonNext type="submit">
          Next
          <IconPaw>
            <use href={sprite + '#iconPaw'}></use>
          </IconPaw>
        </ButtonNext>
        <ButtonBack type="button" onClick={handleCancel}>
          <IconArrow>
            <use href={sprite + '#iconArrowLeft'}></use>
          </IconArrow>
          Сancel
        </ButtonBack>
      </Form>
    </Formik>
  );
};

export default AddPetChooseOption;
