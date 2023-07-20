import {
  NavigationItem,
  NavigationLink,
  NavigationList,
  StyledNavigation,
} from './Navigation.styled';

export const Navigation = ({ toggleMenu }) => {
  return (
    <StyledNavigation>
      <NavigationList onClick={toggleMenu}>
        <NavigationItem>
          <NavigationLink href="#">Головна</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#aboutus">Про нас</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#services">Послуги</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#testimonials">Відгуки</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#contacts">Контакти</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </StyledNavigation>
  );
};
