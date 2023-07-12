import { Box } from 'components/Box/Box.styled';
import { LogoLink } from '../Menu/Menu.styled';
import {
  ContactLink,
  Contacts,
  ContactsList,
  FacebookBtn,
  Footer,
  FooterLogo,
  FooterSocials,
  FooterTitle,
  FooterWrapper,
  InstagramBtn,
  TikTokBtn,
  YouTubeBtn,
} from './MainFooter.styled';

export const MainFooter = () => {
  return (
    <Footer id="contacts">
      <Box>
        <FooterWrapper>
          <LogoLink href="#">
            <FooterLogo />
          </LogoLink>
          <Contacts>
            <FooterTitle>Контакти</FooterTitle>
            <ContactsList>
              <li>
                <ContactLink>+380638989102</ContactLink>
              </li>
              <li>
                <ContactLink>paulhighrow@gmail.com</ContactLink>
              </li>
              <li>
                <ContactLink>Одеса, вул. Лейтенанта Шмідта 6</ContactLink>
              </li>
            </ContactsList>
          </Contacts>
          <FooterSocials>
            <LogoLink>
              <FacebookBtn />
            </LogoLink>
            <LogoLink>
              <YouTubeBtn />
            </LogoLink>
            <LogoLink>
              <InstagramBtn />
            </LogoLink>
            <LogoLink>
              <TikTokBtn />
            </LogoLink>
          </FooterSocials>
        </FooterWrapper>
      </Box>
    </Footer>
  );
};
