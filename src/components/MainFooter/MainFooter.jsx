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
} from './MainFooter.styled';
import LogoIconF from '../../img/hero/logo-f.png';

export const MainFooter = () => {
  return (
    <Footer id="contacts">
      <Box>
        <FooterWrapper>
          <LogoLink href="#">
            <FooterLogo  src={`${LogoIconF}`}/>
          </LogoLink>
          <Contacts>
            <FooterTitle>Контакти</FooterTitle>
            <ContactsList>
              <li>
                <ContactLink href="tel:+380638989102">
                  +380638989102
                </ContactLink>
              </li>
              <li>
                <ContactLink href="mailto:paulhighrow@gmail.com">
                  paulhighrow@gmail.com
                </ContactLink>
              </li>
              <li>
                <ContactLink
                  href="https://goo.gl/maps/71EZU7jTNw8jdYQ36"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Одеса, вул. Лейтенанта Шмідта 6
                </ContactLink>
              </li>
            </ContactsList>
          </Contacts>
          <FooterSocials>
            <LogoLink
              href="https://www.facebook.com/Skillhub-105611539274935"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookBtn />
            </LogoLink>
            {/* <LogoLink
              href="https://www.youtube.com/channel/UCbK35MiYIPQG1r-V4138qhw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeBtn />
            </LogoLink> */}
            <LogoLink
              href="https://www.instagram.com/skillhub_edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramBtn />
            </LogoLink>
            {/* <LogoLink
              href="https://www.tiktok.com/@paulhighrow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokBtn />
            </LogoLink> */}
          </FooterSocials>
        </FooterWrapper>
      </Box>
    </Footer>
  );
};
