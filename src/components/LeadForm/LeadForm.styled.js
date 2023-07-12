import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 640px;
  padding: 40px;
  margin: 0 auto;
  gap: 20px;
`;

export const FormTitle = styled.h3`
  color: var(--secondary-color);
  -webkit-text-stroke: 2px var(--main-color);
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;

export const Input = styled.input`
  width: 480px;
  padding: 10px 5px ;
`;

export const FormBtn = styled.button``;
