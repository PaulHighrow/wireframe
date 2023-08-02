import { Input } from 'components/LeadForm/LeadForm.styled';
import InputMask from 'react-input-mask';

// https://stackoverflow.com/questions/63934723/formik-materialui-input-masking

export const MaskedInput = () => {
  return (
    <InputMask mask="+38(999)99-99-999">
      {() => <Input type="tel" name="phone" />}
    </InputMask>
  );
};
