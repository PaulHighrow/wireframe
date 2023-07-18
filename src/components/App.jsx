import { Hero } from './Hero/Hero';
import { About } from './About/About';
import { Services } from './Services/Services';
import { Testimonials } from './Testimonials/Testimonials';
import { LeadForm } from './LeadForm/LeadForm';
import { useEffect, useState } from 'react';
import { Menu } from './Menu/Menu';
import { MainFooter } from './MainFooter/MainFooter';
import CookieConsent from 'react-cookie-consent';

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
    document.body.style.overflowY = 'hidden';
  };

  const closeModal = () => {
    setIsOpenModal(isOpen => (isOpen = false));
    !document.body.style.overflowY && isOpenModal
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = '');
  };

  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      document.body.style.overflowY = '';
      window.removeEventListener('keydown', onEscapeClose);
    };
  });

  return (
    <>
      <Menu toggleModal={toggleModal} />
      <Hero toggleModal={toggleModal} />
      <About toggleModal={toggleModal} />
      <Services />
      <Testimonials toggleModal={toggleModal} />
      <MainFooter />
      {isOpenModal && <LeadForm closeModal={closeModal} />}
      <CookieConsent
        buttonText="🎓 Погоджуюсь"
        cookieName="skillhub-consent"
        style={{
          background: '#2B373B',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        buttonStyle={{
          background: '#f5ce46',
          color: '#000000',
          fontSize: '16px',
        }}
        expires={150}
      >
        Ми використовуємо файли cookie на нашому веб-сайті, щоб бачити, як ви з
        ним взаємодієте. Приймаючи, ви погоджуєтесь на використання таких файлів
        cookie.
      </CookieConsent>
    </>
  );
};
