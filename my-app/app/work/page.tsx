import Nav from '@/components/Nav';
import Work from '@/components/Work';
import Footer from '@/components/Footer';
import RootSection from '@/components/RootSection';
import { Contact } from '@/components/ui/Contact';
export default function Works() {
  return (
    <div>
      <Nav />
      <Work />
      <RootSection className='sm:py-16 md:py-20'>
        <Contact />
      </RootSection>
      <Footer />
    </div>
  );
}
