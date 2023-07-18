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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  gap: 10px;

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const ServiceCard = styled.li`
  flex-basis: calc((100% - 20px) / 2);
  overflow: hidden;
  border-radius: 30px;
  transition: transform var(--animation-global);

  &:hover {
    transform: scale(1.01);
    
  }
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
