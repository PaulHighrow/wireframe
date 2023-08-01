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
  InputNote,
  Label,
} from './LeadForm.styled';
import * as yup from 'yup';

axios.defaults.baseURL = 'https://skillhub-server.onrender.com';

export const LeadForm = ({ closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const [nameInputError, setNameInputError] = useState('');
  const [phoneInputError, setPhoneInputError] = useState('');

  const leadValidation = yup.object().shape({
    name: yup
      .string()
      .required("Будь ласка, вкажіть своє ім'я!")
      .min(2, "Ім'я має складатися не менше ніж з 2 символів!")
      .max(50, "Ім'я має складатися не більше ніж з 50 символів!"),
    phone: yup
      .string()
      .required('Будь ласка, вкажіть свій номер телефону!')
      .min(10, 'Номер телефону має складатися не менше ніж з 10 символів!')
      .max(20, 'Номер телефону має складатися не більше ніж з 20 символів!'),
  });

  const handleChange = e => {
    const input = e.target;
    if (input.name === 'username')
      setNameValue(nameValue => (nameValue = input.value));
    if (input.name === 'phone')
      setPhoneValue(phoneValue => (phoneValue = input.value));
  };

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
      console.error(error);
      if (error.errors) {
        const invalidValue = error.errors[0];
        if (invalidValue.includes("Ім'я")) {
          setNameInputError(inputError => (inputError = invalidValue));
        }
        if (invalidValue.includes('Номер')) {
          setPhoneInputError(inputError => (inputError = invalidValue));
        }
      }
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
          <Input
            type="text"
            name="username"
            placeholder="Ім'я"
            value={nameValue}
            onChange={handleChange}
          />
          {nameInputError ? <InputNote>{`${nameInputError}`}</InputNote> : ''}
        </Label>
        <Label>
          <Input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={phoneValue}
            onChange={handleChange}
          />
          {phoneInputError ? <InputNote>{`${phoneInputError}`}</InputNote> : ''}
        </Label>
        <FormBtn type="submit">Надіслати</FormBtn>
        {isLoading && <Loader />}
      </Form>
    </>
  );
};
