import Nav from '@/components/Nav';
import RootSection from '@/components/RootSection';
import Work from '@/components/Work';
import Footer from '@/components/Footer';
import { Contact } from '@/components/ui/Contact';
import Image from 'next/image';
import { Dela_Gothic_One } from 'next/font/google';

const dela = Dela_Gothic_One({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div>
      <Nav />
      <section className='h-screen relative flex'>
        <div className='w-1/2 bg-[#C6B682]'></div>
        <div className='w-1/2 bg-[#CFC5A6]'></div>

        <div className="absolute bottom-0 w-full h-40 lg:h-50 xl:h-60 2xl:h-60 bg-[url('/images/backgroundHV.svg')] bg-cover bg-no-repeat bg-bottom   "></div>

        <div className='absolute inset-0 flex items-center md:items-start justify-center flex-col z-10 max-w-350 w-full mx-auto'>
          <h1
            className={`${dela.className} text-4xl sm:text-5xl md:text-7xl font-bold text-(--color-accent) text-shadow-sm text-shadow-[#FFFDF5]  md:pl-20`}
          >
            YUI JENSEN
          </h1>
          <h1
            className={`${dela.className} text-4xl sm:text-5xl md:text-7xl font-bold text-(--color-primary) md:pl-40 text-shadow-sm text-shadow-[#FFFDF5]`}
          >
            PORTFOLIO
          </h1>
        </div>

        <div className='absolute w-30 h-30 md:w-40 md:h-40 bottom-40 md:bottom-20 right-10 md:right-20 z-20'>
          <Image
            src='/images/welcome.svg'
            alt='welcome letter '
            width={200}
            height={200}
            className='transition-transform duration-300   '
          />
        </div>
      </section>
      <Work />
      <RootSection>
        <Contact />
      </RootSection>
      <Footer />
    </div>
  );
}
