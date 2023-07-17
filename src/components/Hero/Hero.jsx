import { Box } from 'components/Box/Box.styled';
import {
  BtnUnderlay,
  HeroLeadBtn,
  HeroSection,
  ScreamTopIcon,
  ScreamBotIcon,
  LoveTopIcon,
  LoveBotIcon,
  Title,
} from './Hero.styled';


export const Hero = ({ toggleModal }) => {
  return (
    <HeroSection>
      <Box>
        <ScreamTopIcon/>
        <ScreamBotIcon/>
        <LoveTopIcon/>
        <LoveBotIcon/>
        <Title>SKILLHUB - твоя платформа можливостей</Title>
        <BtnUnderlay>
          {/* <LeadBtnPic>
            <source srcSet={`${flagWebp} 1x`} type="image/webp" />
            <LeadBtnImg src={`${flagPng}`} alt="British Flag" />
          </LeadBtnPic> */}
          <HeroLeadBtn onClick={toggleModal}>Надіслати заявку</HeroLeadBtn>
        </BtnUnderlay>
      </Box>
    </HeroSection>
  );
};
