import { Backdrop } from 'components/Backdrop/Backdrop.styled';
import {
  CloseIcon,
  Form,
  FormBtn,
  FormCloseBtn,
  FormTitle,
  Input,
} from './LeadForm.styled';

export const LeadForm = ({ closeModal }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = form.elements.username.value;
    const phone = form.elements.phone.value;
    console.log(username);
    console.log(phone);
  };

  return (
    <>
      <Backdrop onClick={closeModal}/>
      <Form onSubmit={handleSubmit}>
        <FormCloseBtn onClick={closeModal}>
          <CloseIcon/>
        </FormCloseBtn>
        <FormTitle>Оформіть заявку і наш менеджер вам зателефонує</FormTitle>
        <Input type="text" name="username" placeholder="Ім'я"></Input>
        <Input type="tel" name="phone" placeholder="Телефон"></Input>
        <FormBtn type="submit">Надіслати</FormBtn>
      </Form>
    </>
  );
};
