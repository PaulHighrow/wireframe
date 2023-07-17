import Marquee from 'react-fast-marquee';
import styled from 'styled-components';

export const TestimonialSection = styled.section`
  position: relative;
  background-color: var(--main-color);

  padding: 20px 10px;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 40px;
  }
`;

export const TestimonialImg = styled.img`
  object-fit: fill;
  width: 432px;
  height: 350px;
  margin-right: 30px;
`;

export const StyledMarquee = styled(Marquee)`
  margin: 0 auto;
  margin-bottom: 40px;
`;
