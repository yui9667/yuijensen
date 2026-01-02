'use client';
import Nav from '@/components/Nav';
import RootSection from '@/components/RootSection';
import Work from '@/components/Work';
import Footer from '@/components/Footer';
import { Contact } from '@/components/ui/Contact';
import Image from 'next/image';
import { Dela_Gothic_One } from 'next/font/google';
import { motion } from 'framer-motion';
import ButtonPop from '@/components/ui/ButtonPop';
import Letter from '@/components/Letter';
const dela = Dela_Gothic_One({
  weight: '400',
  subsets: ['latin'],
});
export default function Home() {
  return (
    <div>
      <Nav />
      <section className='h-screen relative flex  '>
        <div className='w-1/2 bg-[#C6B682]'></div>
        <div className='w-1/2 bg-[#CFC5A6]'></div>

        <div className="absolute bottom-0 w-full h-40 lg:h-50 xl:h-60 bg-[url('/images/backgroundHV.svg')] bg-cover bg-no-repeat bg-bottom   "></div>

        <div className='absolute inset-0 flex items-center md:items-start justify-center flex-col z-10 max-w-350 w-full mx-auto '>
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

        <motion.div
          className='absolute w-30 h-30 md:w-40 md:h-40 bottom-40 md:bottom-20 right-10 md:right-20 z-20'
          animate={{ rotate: 360 }}
          style={{ originX: 0.5, originY: 0.5 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <Image
            src='/images/welcome.svg'
            alt='welcome letter '
            width={200}
            height={200}
            className='transition-transform duration-300   '
          />
        </motion.div>
      </section>
      <Work />
      <RootSection>
        <Letter />
        <RootSection
          title='ABOUT'
          className='mt-15 mb-10 md:mt-30 md:mb-20 pt-14 md:pt-28'
        >
          <div className='flex flex-col justify-center items-center max-w-350 w-full border border-(--color-primary) p-4 bg-(--color-section-background) md:flex-row md:gap-20 md:p-20 '>
            <Image
              className='lg:h-100 lg:w-100'
              src='/images/profile.png'
              alt='プロフィール写真'
              width={300}
              height={300}
            />
            <div className=' text-center  md:text-start '>
              <h3 className='text-xl md:text-2xl mt-6 mb-2  '>ヤンセン　唯</h3>
              <h4 className='text-lg mb-6'>Jensen Yui</h4>

              <p> 1996年生まれ、広島出身。</p>
              <p className='leading-7'>
                高校卒業後にアパレルとホテル業で経験を積み、3カ国でワーキングホリデーを経験。
                2023年にUXデザインに興味を持ち独学を開始し、2024年からスウェーデンの職業学校でフルスタックを学び、2025年に卒業。
                現在はWebデザイナーとして就職活動中です。
              </p>
              <div className='flex justify-center items-center md:col-span-2  '>
                <ButtonPop href='/about'>READ MORE</ButtonPop>
              </div>
            </div>
          </div>
        </RootSection>
        <Contact />
      </RootSection>
      <Footer />
    </div>
  );
}
