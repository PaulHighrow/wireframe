import { Hero } from './Hero/Hero';
import { About } from './About/About';
import { Services } from './Services/Services';
import { Testimonials } from './Testimonials/Testimonials';
import { LeadForm } from './LeadForm/LeadForm';
import { useEffect, useState } from 'react';
import { Menu } from './Menu/Menu';
import { MainFooter } from './MainFooter/MainFooter';

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
    document.body.style.overflowY = 'hidden';
  };

  const closeModal = () => {
    setIsOpenModal(isOpen => (isOpen = false));
    !document.body.style.overflowY
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = '');
  };

  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    const onBackdropClickClose = event => {
      if (event.target === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscapeClose);
    window.addEventListener('click', onBackdropClickClose);

    return () => {
      document.body.style.overflowY = '';
      window.removeEventListener('keydown', onEscapeClose);
      window.removeEventListener('click', onBackdropClickClose);
    };
  }, []);

  return (
    <>
      <Menu toggleModal={toggleModal} />
      <Hero toggleModal={toggleModal} />
      <About toggleModal={toggleModal} />
      <Services />
      <Testimonials toggleModal={toggleModal} />
      <MainFooter />
      {isOpenModal && <LeadForm closeModal={closeModal} />}
    </>
  );
};
