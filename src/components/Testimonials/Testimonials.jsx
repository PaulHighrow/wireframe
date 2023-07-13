import { AboutLeadBtn, SectionTitle } from 'components/About/About.styled';
import { Box } from 'components/Box/Box.styled';
import {
  TestimonialSection,
  TestimonialPic,
  TestimonialImg,
  StyledSwiper,
  StyledMarquee,
  TestimonialPicImg,
} from './Testimonials.styled';
import { SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import { tstmImgsIndex } from 'img/testimonials/testimonialsImgs';
const {
  tstm1Jpeg,
  tstm1Webp,
  tstm2Jpeg,
  tstm2Webp,
  tstm3Jpeg,
  tstm3Webp,
  tstm4Jpeg,
  tstm4Webp,
  tstm5Jpeg,
  tstm5Webp,
  tstm6Jpeg,
  tstm6Webp,
  tstm7Jpeg,
  tstm7Webp,
  tstm8Jpeg,
  tstm8Webp,
  tstm9Jpeg,
  tstm9Webp,
  tstmMarq1png,
  tstmMarq2png,
  tstmMarq3png,
  tstmMarq4png,
} = tstmImgsIndex;

export const Testimonials = ({ toggleModal }) => {
  return (
    <TestimonialSection id="testimonials">
      <Box>
        <SectionTitle>Відгуки</SectionTitle>
        <StyledSwiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1600: {
              sidesPerView: 5,
              spaceBetween: 10,
            },
            1920: {
              sidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 3000,
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <TestimonialPic>
              <source srcSet={`${tstm1Webp} 1x`} type="image/webp" />
              <TestimonialPicImg
                src={`${tstm1Jpeg}`}
                alt="Testimonial placeholder"
              />
            </TestimonialPic>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialPic>
              <source srcSet={`${tstm2Webp} 1x`} type="image/webp" />
              <TestimonialPicImg
                src={`${tstm2Jpeg}`}
                alt="Testimonial placeholder"
              />
            </TestimonialPic>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialPic>
              <source srcSet={`${tstm3Webp} 1x`} type="image/webp" />
              <TestimonialPicImg
                src={`${tstm3Jpeg}`}
                alt="Testimonial placeholder"
              />
            </TestimonialPic>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialPic>
              <source srcSet={`${tstm4Webp} 1x`} type="image/webp" />
              <TestimonialPicImg
                src={`${tstm4Jpeg}`}
                alt="Testimonial placeholder"
              />
            </TestimonialPic>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialPic>
              <source srcSet={`${tstm5Webp} 1x`} type="image/webp" />
              <TestimonialPicImg
                src={`${tstm5Jpeg}`}
                alt="Testimonial placeholder"
              />
            </TestimonialPic>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialPic>
              <source srcSet={`${tstm6Webp} 1x`} type="image/webp" />
              <TestimonialPicImg
                src={`${tstm6Jpeg}`}
                alt="Testimonial placeholder"
              />
            </TestimonialPic>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialPic>
              <source srcSet={`${tstm7Webp} 1x`} type="image/webp" />
              <TestimonialPicImg
                src={`${tstm7Jpeg}`}
                alt="Testimonial placeholder"
              />
            </TestimonialPic>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialPic>
              <source srcSet={`${tstm8Webp} 1x`} type="image/webp" />
              <TestimonialPicImg
                src={`${tstm8Jpeg}`}
                alt="Testimonial placeholder"
              />
            </TestimonialPic>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialPic>
              <source srcSet={`${tstm9Webp} 1x`} type="image/webp" />
              <TestimonialPicImg
                src={`${tstm9Jpeg}`}
                alt="Testimonial placeholder"
              />
            </TestimonialPic>
          </SwiperSlide>
        </StyledSwiper>
        <StyledMarquee pauseOnHover={true} autoFill={true}>
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
        </StyledMarquee>
        <AboutLeadBtn onClick={toggleModal}>Надіслати заявку</AboutLeadBtn>
      </Box>
    </TestimonialSection>
  );
};
