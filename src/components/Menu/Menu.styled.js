import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../img/svg/logo-h.svg';
import { IoMenu } from 'react-icons/io5';

import raysBoldIcon from 'img/svg/rays-b.svg';
import raysIconDeformed from 'img/svg/rays-b-d.svg';

export const Header = styled.header`
  padding: 0 10px;
  height: 80px;
  background-color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 40px;
  }
`;

export const MobileMenuBtn = styled.button`
  border-color: var(--secondary-color);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &:hover,
  &:focus {
    background-color: var(--secondary-color);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }

  &::before {
    position: absolute;
    left: -20px;
    top: -20px;
    content: url(${raysIconDeformed});
    width: 20px;
    height: 20px;
    margin-right: 5px;
    opacity: 0;
    transition: opacity var(--animation-global);
  }

  &:active::before {
    opacity: 1;
  }
`;

export const MobileMenuIcon = styled(IoMenu)`
  color: var(--secondary-color);
  width: 36px;
  height: 36px;
  flex-shrink: 0;

  ${MobileMenuBtn}:hover &, ${MobileMenuBtn}:focus & {
    color: var(--main-color);
  }
`;

export const PhoneNumber = styled.a`
  font-size: 20px;
  font-weight: 500;
  color: var(--secondary-color);
  text-decoration: none;
  transition: color var(--animation-global);

  &:hover,
  &:focus {
    color: red;
  }
`;

export const LogoLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
`;

export const Logo = styled(LogoIcon)`
  /* width: 50px; */
  height: 50px;
  display: block;
  flex-shrink: 0;
  height: 100%;
  fill: var(--secondary-color);
  transition: fill var(--animation-global), transform var(--animation-global);

  ${LogoLink}:hover & {
    fill: red;
    transform: scale(1.2);
  }
`;

export const LeadBtn = styled.button`
  padding: 10px 10px;
  font-weight: 700;
  width: 200px;
  border: 2px solid #fff;
  border-radius: 20px;
  background-color: var(--secondary-color);
  text-align: center;
  position: relative;
  transition: background-color var(--animation-global),
    border-color var(--animation-global), color var(--animation-global);

  &:hover,
  &:focus {
    background-color: #fff;
    border-color: var(--secondary-color);
    color: var(--main-color);
  }

  &::before {
    position: absolute;
    left: -22px;
    top: -20px;
    content: url(${raysBoldIcon});
    opacity: 0;
    transition: opacity var(--animation-global);
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }
`;