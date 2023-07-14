import { useRef, useState } from 'react';
import useSize from '@react-hook/size';
import {
  Header,
  LeadBtn,
  Logo,
  LogoLink,
  MobileMenuBtn,
  MobileMenuIcon,
  PhoneNumber,
} from './Menu.styled';
import { Navigation } from 'components/Navigation/Navigation';

export const Menu = ({ toggleModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerEl = useRef();
  // eslint-disable-next-line
  const [width, _] = useSize(headerEl);

  const toggleMenu = () => {
    setIsMobileMenuOpen(isOpen => !isOpen);
  };

  return (
    <Header ref={headerEl}>
      <LogoLink href="#">
        <Logo />
      </LogoLink>
      {(width >= 768 || isMobileMenuOpen) && <Navigation />}
      {width < 768 && <PhoneNumber href='tel:+380638989102'>+380638989102</PhoneNumber>}
      {width >= 768 && (
        <LeadBtn onClick={toggleModal}> Надіслати заявку </LeadBtn>
      )}
      <MobileMenuBtn onClick={toggleMenu}>
        <MobileMenuIcon />
      </MobileMenuBtn>
    </Header>
  );
};
