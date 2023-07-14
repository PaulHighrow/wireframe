import styled from 'styled-components';
import { GiGraduateCap } from 'react-icons/gi';
import { IoMenu } from 'react-icons/io5';
import raysIcon from 'img/svg/rays.svg';

export const Header = styled.header`
  padding: 0 40px;
  height: 80px;
  background-color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  &:hover,
  &:focus {
    background-color: var(--secondary-color);
  }

  @media screen and (min-width: 768px) {
    display: none;
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

export const Navigation = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 16px;
    font-weight: 500;
  }

  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
`;
export const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  color: var(--secondary-color);
  justify-content: center;
`;
export const NavigationLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: var(--secondary-color);
  transition: color var(--animation-global);
  &:hover,
  &:focus {
    color: white;
  }
`;

export const LogoLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
`;

export const Logo = styled(GiGraduateCap)`
  width: 50px;
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
    left: -12px;
    top: -12px;
    content: url(${raysIcon});
    width: 25px;
    height: 25px;
    margin-right: 5px;
    opacity: 0;
    transition: opacity var(--animation-global);
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }
`;
