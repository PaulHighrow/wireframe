import { Hero } from './Hero/Hero';
import { Menu } from './Menu/Menu';
import { About } from './About/About';
import { Services } from './Services/Services';
import { Testimonials } from './Testimonials/Testimonials';
import { MainFooter } from './MainFooter/MainFooter';
import { LeadForm } from './LeadForm/LeadForm';


export const App = () => {
  return (
    <>
      <Menu />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <MainFooter />
      <LeadForm />
    </>
  );
};
