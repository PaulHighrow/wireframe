import { Box } from 'components/Box/Box.styled';
import { HeroLeadBtn, HeroSection, Title } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroSection>
      <Box>
        <Title>SKILLHUB - твоя платформа можливостей</Title>
        <HeroLeadBtn>Надіслати заявку</HeroLeadBtn>
      </Box>
    </HeroSection>
  );
};
