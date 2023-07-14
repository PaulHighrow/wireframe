import styled from 'styled-components';

export const ServicesSection = styled.section`
  background-color: var(--main-color);

  padding: 20px 10px;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 40px;
  }
`;

export const ServicesList = styled.ul`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const ServiceCard = styled.li`
  max-width: 480px;
  overflow: hidden;
  border-radius: 30px;
`;

export const ServiceTitle = styled.h3`
  background-color: var(--secondary-color);
  color: var(--main-color);
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  padding: 18px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const ServiceText = styled.p`
  background-color: var(--text-color);
  color: var(--main-color);
  font-size: 16px;
  padding: 22px 15px;
  height: 100%;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;
