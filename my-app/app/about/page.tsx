import Image from 'next/image';
import ProfileAboutImage from '../../public/about-profile.jpg';
import Line from '../../public/Line 33.png';
import RootSection from '@/components/RootSection';
export default function About() {
  return (
    <>
      <RootSection title='ABOUT'>
        <Image
          src={Line}
          alt='Underline of text'
          width={800}
          className='mb-20'
        />

        <div className=' m-auto'>
          <Image
            src={ProfileAboutImage}
            alt='Profile of myself with buildings'
            width={1000}
            height={500}
          />
        </div>
      </RootSection>
    </>
  );
}
