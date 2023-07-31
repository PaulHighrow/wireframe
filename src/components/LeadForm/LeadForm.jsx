import axios from 'axios';
import { Backdrop } from 'components/Backdrop/Backdrop.styled';
import { useState } from 'react';
import { Loader } from 'utils/Loader/Loader';
import {
  CloseIcon,
  Form,
  FormBtn,
  FormCloseBtn,
  FormTitle,
  Input,
} from './LeadForm.styled';
import * as yup from 'yup';

axios.defaults.baseURL = 'https://skillhub-server.onrender.com';

export const LeadForm = ({ closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);

  const leadValidation = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be at most 50 characters'),
    phone: yup
      .string()
      .required('Phone number is required')
      .min(10, 'Phone number must be at least 10 characters')
      .max(20, 'Phone number must be at most 20 characters'),
  });

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(isLoading => (isLoading = true));
    const form = e.currentTarget;

    try {
      const requestValues = {
        name: `${form.elements.username.value}`,
        phone: `${form.elements.phone.value}`,
      };

      const isFormValid = await leadValidation.validate(requestValues);
      console.log(isFormValid);
      if (isFormValid) {
        const response = await axios.post('/leads', requestValues);
        console.log(response);
        form.reset();
        closeModal();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(isLoading => (isLoading = false));
    }
  };

  return (
    <>
      <Backdrop onClick={closeModal} />
      <Form onSubmit={handleSubmit}>
        <FormCloseBtn onClick={closeModal}>
          <CloseIcon />
        </FormCloseBtn>
        <FormTitle>Оформіть заявку і наш менеджер вам зателефонує</FormTitle>
        <Label>
          <Input type="text" name="username" placeholder="Ім'я"></Input>
        </Label>
        <Label>
          <Input type="tel" name="phone" placeholder="Телефон"></Input>
        </Label>
        <FormBtn type="submit">Надіслати</FormBtn>
        {isLoading && <Loader />}
      </Form>
    </>
  );
};
