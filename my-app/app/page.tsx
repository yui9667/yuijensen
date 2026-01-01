import Nav from '@/components/Nav';
import RootSection from '@/components/RootSection';
import Work from '@/components/Work';
import Footer from '@/components/Footer';
import { Contact } from '@/components/ui/Contact';
export default function Home() {
  return (
    <div>
      <Nav />
      <section className='h-screen relative flex'>
        <div className='w-1/2 bg-[#C6B682]'></div>
        <div className='w-1/2 bg-[#CFC5A6]'></div>
      </section>
      <Work />
      <RootSection>
        <Contact />
      </RootSection>
      <Footer />
    </div>
  );
}
