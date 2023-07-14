import styled from 'styled-components';
import webpBg from '../../img/hero/hero-bg.webp';
import jpegBg from '../../img/hero/hero-bg.jpg';
import { LeadBtn } from 'components/Menu/Menu.styled';
import raysBoldIcon from 'img/svg/rays-b.svg';

export const HeroSection = styled.section`
  position: relative;
  background-color: var(--main-color);
  background-image: url(${webpBg}), url(${jpegBg});
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 80px);
  display: flex;
  align-items: end;
  padding: 10px;

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 40px;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
  color: var(--secondary-color);
  -webkit-text-stroke: 2px var(--main-color);
  font-size: 40px;
  font-weight: 700;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 480px;
    font-size: 56px;
  }

  @media screen and (min-width: 1024px) {
    width: 640px;
    font-size: 72px;
  }
`;

export const HeroLeadBtn = styled(LeadBtn)`
  position: relative;

  text-align: center;
  margin-bottom: 15%;

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
    opacity: 1;
  }
`;
