import axios from 'axios';
import { Backdrop } from 'components/Backdrop/Backdrop.styled';
import {
  CloseIcon,
  Form,
  FormBtn,
  FormCloseBtn,
  FormTitle,
  Input,
} from './LeadForm.styled';
import { Loader } from 'utils/Loader/Loader';
import { useState } from 'react';

axios.defaults.baseURL = 'https://skillhub-server.onrender.com';

export const LeadForm = ({ closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(isLoading => (isLoading = true));
    const form = e.currentTarget;

    const requestValues = {
      name: `${form.elements.username.value}`,
      phone: `${form.elements.phone.value}`,
    };

    try {
      const response = await axios.post('/leads', requestValues);
      console.log(response);
      form.reset();
      closeModal();
      setIsLoading(isLoading => (isLoading = false));
    } catch (error) {
      console.log(error);
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
        <Input type="text" name="username" placeholder="Ім'я"></Input>
        <Input type="tel" name="phone" placeholder="Телефон"></Input>
        <FormBtn type="submit">Надіслати</FormBtn>
        {isLoading && <Loader />}
      </Form>
    </>
  );
};
