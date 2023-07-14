import styled from 'styled-components';
import { LeadBtn } from 'components/Menu/Menu.styled';
import raysBoldIcon from 'img/svg/rays-b.svg';

export const AboutSection = styled.section`
  position: relative;
  background-color: var(--main-color);

  padding: 20px 10px;

@media screen and (min-width: 768px) {
  padding: 20px;
}

@media screen and (min-width: 1024px) {
  padding: 40px;
}
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
  text-align: center;
  padding: 10px;

  &::before {
    position: absolute;
    left: -22px;
    top: -20px;
    opacity: 0;
    content: url(${raysBoldIcon});
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  &:hover::before,
  &:focus::before {
    display: block;
    opacity: 1;
  }
`;

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

export const AboutListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
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
