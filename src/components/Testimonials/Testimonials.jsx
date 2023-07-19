import { AboutLeadBtn, SectionTitle } from 'components/About/About.styled';
import { Box } from 'components/Box/Box.styled';
import {
  StyledMarquee,
  TestimonialImg,
  TestimonialSection,
} from './Testimonials.styled';

import { tstmImgsIndex } from 'img/testimonials/testimonialsImgs';
const { tstmMarq1png, tstmMarq2png, tstmMarq3png, tstmMarq4png } =
  tstmImgsIndex;

export const Testimonials = ({ toggleModal }) => {
  return (
    <TestimonialSection id="testimonials">
      <Box>
        <SectionTitle>Відгуки</SectionTitle>
        <StyledMarquee pauseOnHover={true} >
          <TestimonialImg
            src={`${tstmMarq1png}`}
            alt="Testimonial placeholder"
          />
          <TestimonialImg
            src={`${tstmMarq2png}`}
            alt="Testimonial placeholder"
          />
          <TestimonialImg
            src={`${tstmMarq3png}`}
            alt="Testimonial placeholder"
          />
          <TestimonialImg
            src={`${tstmMarq4png}`}
            alt="Testimonial placeholder"
          />
          <TestimonialImg
            src={`${tstmMarq4png}`}
            alt="Testimonial placeholder"
          />
        </StyledMarquee>
        <AboutLeadBtn onClick={toggleModal}>Надіслати заявку</AboutLeadBtn>
      </Box>
    </TestimonialSection>
  );
};
