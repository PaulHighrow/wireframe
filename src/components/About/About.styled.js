import styled from 'styled-components';
import { LeadBtn } from 'components/Menu/Menu.styled';

export const AboutSection = styled.section`
  position: relative;
  padding: 40px;
  background-color: var(--main-color);
`;

export const SectionTitle = styled.h2`
  color: var(--main-color);
  -webkit-text-stroke: 2px var(--secondary-color);
  font-size: 56px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
`;

export const AboutLeadBtn = styled(LeadBtn)`
  display: block;
  margin: 0 auto;
  max-width: 200px;
  text-align: center;
  padding: 10px;
`;

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

export const AboutListItem = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const AboutPic = styled.picture`
  object-fit: cover;
  display: flex;
  width: 200px;
  height: 200px;
  align-items: center;
`;

export const AboutImg = styled.img`
  object-fit: cover;
  width: 200px;
  height: 200px;
`;

export const AboutText = styled.p`
  font-size: 20px;
  color: var(--text-color);
`;

export const AboutAccent = styled.span`
  font-weight: 500;
  color: var(--secondary-color);
`;
