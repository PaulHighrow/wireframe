import { Box } from 'components/Box/Box.styled';
import { HeroLeadBtn, HeroSection, Title } from './Hero.styled';

export const Hero = ({ toggleModal }) => {
  return (
    <HeroSection>
      <Box>
        <Title>SKILLHUB - твоя платформа можливостей</Title>
        <HeroLeadBtn onClick={toggleModal}>Надіслати заявку</HeroLeadBtn>
      </Box>
    </HeroSection>
  );
};
