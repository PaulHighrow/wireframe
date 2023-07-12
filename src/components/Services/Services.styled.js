import styled from 'styled-components';

export const ServicesSection = styled.section`
  padding: 40px;
  background-color: var(--main-color);
`;

export const ServicesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
`;

export const ServiceCard = styled.li`
  overflow: hidden;
  border-radius: 30px;
  
`;

export const ServiceTitle = styled.h3`
  background-color: var(--secondary-color);
  color: var(--main-color);
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  padding: 18px;
`;

export const ServiceText = styled.p`
  background-color: var(--text-color);
  color: var(--main-color);
  font-size: 24px;
  padding: 22px 15px;
  height: 100%;
`;
