import {
  Header,
  Logo,
  LogoLink,
  Nav,
  Navink,
  NavList,
  LeadBtn,
  MobileMenuBtn,
  MobileMenuIcon,
} from './Menu.styled';

export const Menu = ({ toggleModal }) => {
  return (
    <Header>
      <LogoLink href="#">
        <Logo />
      </LogoLink>
      <Nav>
        <NavList>
          <li>
            <Navink href="#">Головна</Navink>
          </li>
          <li>
            <Navink href="#aboutus">Про нас</Navink>
          </li>
          <li>
            <Navink href="#services">Послуги</Navink>
          </li>
          <li>
            <Navink href="#testimonials">Відгуки</Navink>
          </li>
          <li>
            <Navink href="#contacts">Контакти</Navink>
          </li>
        </NavList>
      </Nav>
      <LeadBtn onClick={toggleModal}> Надіслати заявку </LeadBtn>
      <MobileMenuBtn>
        <MobileMenuIcon />
      </MobileMenuBtn>
    </Header>
  );
};
