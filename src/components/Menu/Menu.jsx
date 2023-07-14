import {
  Header,
  Logo,
  LogoLink,
  Navigation,
  NavigationLink,
  NavigationList,
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
      <Navigation>
        <NavigationList>
          <li>
            <NavigationLink href="#">Головна</NavigationLink>
          </li>
          <li>
            <NavigationLink href="#aboutus">Про нас</NavigationLink>
          </li>
          <li>
            <NavigationLink href="#services">Послуги</NavigationLink>
          </li>
          <li>
            <NavigationLink href="#testimonials">Відгуки</NavigationLink>
          </li>
          <li>
            <NavigationLink href="#contacts">Контакти</NavigationLink>
          </li>
        </NavigationList>
      </Navigation>
      <LeadBtn onClick={toggleModal}> Надіслати заявку </LeadBtn>
      <MobileMenuBtn>
        <MobileMenuIcon />
      </MobileMenuBtn>
    </Header>
  );
};
