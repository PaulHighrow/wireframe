import styled from 'styled-components';
import webpBg from '../../img/hero/hero-bg.webp';
import jpegBg from '../../img/hero/hero-bg.jpg';
import { LeadBtn } from 'components/Menu/Menu.styled';
import raysIcon from 'img/svg/rays.svg';

export const HeroSection = styled.section`
  position: relative;
  background-color: var(--main-color);
  background-image: url(${webpBg}), url(${jpegBg});
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 80px);
  padding: 30px;
`;

export const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--secondary-color);
  -webkit-text-stroke: 2px var(--main-color);
  font-size: 72px;
  font-weight: 700;
  text-align: center;
`;

export const HeroLeadBtn = styled(LeadBtn)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  text-align: center;
  padding: 10px 40px;
  bottom: 30%;

  &::before {
    position: absolute;
    left: -12px;
    top: -12px;
    display: none;
    content: url(${raysIcon});
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  &:hover::before,
  &:focus::before {
    display: block;
  }
`;
