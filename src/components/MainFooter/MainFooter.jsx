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
                <ContactLink href='tel:+380638989102'>+380638989102</ContactLink>
              </li>
              <li>
                <ContactLink href='mailto:paulhighrow@gmail.com'>paulhighrow@gmail.com</ContactLink>
              </li>
              <li>
                <ContactLink href='https://goo.gl/maps/71EZU7jTNw8jdYQ36' target='_blank' noopener noreferrer>Одеса, вул. Лейтенанта Шмідта 6</ContactLink>
              </li>
            </ContactsList>
          </Contacts>
          <FooterSocials>
            <LogoLink href='https://www.facebook.com/paulhighrow' target='_blank' noopener noreferrer>
              <FacebookBtn />
            </LogoLink>
            <LogoLink href='https://www.youtube.com/channel/UCbK35MiYIPQG1r-V4138qhw' target='_blank' noopener noreferrer>
              <YouTubeBtn />
            </LogoLink>
            <LogoLink href='https://www.instagram.com/paulhighrow/' target='_blank' noopener noreferrer>
              <InstagramBtn />
            </LogoLink>
            <LogoLink href='https://www.tiktok.com/@paulhighrow' target='_blank' noopener noreferrer>
              <TikTokBtn />
            </LogoLink>
          </FooterSocials>
        </FooterWrapper>
      </Box>
    </Footer>
  );
};
