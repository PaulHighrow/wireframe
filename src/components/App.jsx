import { Hero } from './Hero/Hero';
import { Menu } from './Menu/Menu';
import { About } from './About/About';
import { Services } from './Services/Services';
import { Testimonials } from './Testimonials/Testimonials';
import { MainFooter } from './MainFooter/MainFooter';
import { LeadForm } from './LeadForm/LeadForm';
import { useEffect, useState } from 'react';

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
    document.body.style.overflowY = 'hidden';
  };

  const closeModal = () => {
    setIsOpenModal(isOpen => !isOpen);
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

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      document.body.style.overflowY = '';
      window.removeEventListener('keydown', onEscapeClose);
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
