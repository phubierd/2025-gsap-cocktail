import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText);

const AppPage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default AppPage;
