import { Logo, LogoLink } from 'components/Menu/Menu.styled';
import styled from 'styled-components';
import {
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { BiLogoTiktok } from 'react-icons/bi';

export const Footer = styled.footer`
  padding: 40px;
  background-color: var(--secondary-color);
`;

export const FooterLogo = styled(Logo)`
  fill: var(--main-color);
`;

export const FooterTitle = styled.h3`
  text-align: start;
  color: var(--secondary-color);
  -webkit-text-stroke: 2px var(--main-color);
  font-size: 36px;
  font-weight: 700;

  margin-bottom: 20px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterSocials = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;

export const FacebookBtn = styled(AiOutlineFacebook)`
  fill: var(--main-color);
  width: 40px;
  height: 40px;
  ${LogoLink}:hover & {
    fill: red;
  }
`;
export const YouTubeBtn = styled(AiOutlineYoutube)`
  fill: var(--main-color);
  width: 40px;
  height: 40px;
  ${LogoLink}:hover & {
    fill: red;
  }
`;
export const InstagramBtn = styled(AiOutlineInstagram)`
  fill: var(--main-color);
  width: 40px;
  height: 40px;
  ${LogoLink}:hover & {
    fill: red;
  }
`;
export const TikTokBtn = styled(BiLogoTiktok)`
  fill: var(--main-color);
  width: 40px;
  height: 40px;
  ${LogoLink}:hover & {
    fill: red;
  }
`;

export const Contacts = styled.div``;

export const ContactsList = styled.ul`
  display: grid;
  gap: 10px;
`;

export const ContactLink = styled.a`
  font-size: 20px;
  font-weight: 500;

  &:hover,
  &:focus {
    color: red;
  }
`;
