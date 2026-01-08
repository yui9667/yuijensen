import Link from 'next/link';
import { works } from '@/data/work';
import RootSection from '@/components/RootSection';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ButtonPop from '@/components/ui/ButtonPop';
//import { Contact } from '@/components/ui/Contact';
import WorkList from '@/components/Work';

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const relatedWorks = works
    .filter((work) => work.id !== Number(id))
    .slice(0, 2);
  const work = works.find((work) => work.id === Number(id));
  if (!work) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1
          className='text-4xl
        mb-2'
        >
          サイトが見つかりません
        </h1>
        <Link
          href='/work'
          className='text-(--color-primary) underline hover:text-(--color-accent) '
        >
          Back to Work List
        </Link>
      </div>
    );
  }
  return (
    <>
      <Nav />
      <RootSection className=' pt-30 md:pt-40 '>
        <div className='flex flex-col justify-self-start items-start max-w-350 w-full'>
          <h2 className='text-xl md:text-2xl font-bold mb-4'>{work.title}</h2>

          <div className='pl-4 mb-5'>
            <p>{work.subtitle}</p>
            <p>{work.createdAt}</p>
            <p> {work.githubUrl}</p>
          </div>
        </div>
        <Image
          src={work.imageSrc}
          alt={work.title}
          width={1000}
          height={400}
          className='border border-(--color-primary)'
        />
        <div className='flex flex-col justify-center items-center mt-15 mb-10 md:mt-30 md:mb-20 w-full '>
          <div className='flex flex-col lg:flex-row justify-between max-w-250 w-full px-8 mb-10'>
            <p className='pb-3'>ターゲット</p>
            <p className='pb-2 border-b border-(--color-primary) max-w-200 w-full'>
              {' '}
              {work.target}
            </p>
          </div>
          <div className='flex flex-col lg:flex-row md:justify-between max-w-250 w-full px-8 mb-10'>
            <p className='pb-3'>目的</p>
            <p className='pb-2 border-b border-(--color-primary) max-w-200 w-full'>
              {' '}
              {work.purpose}
            </p>
          </div>
          <div className='flex flex-col lg:flex-row md:justify-between max-w-250 w-full px-8 mb-10'>
            <p className='pb-3'>デザイン</p>
            <p className='pb-2 border-b border-(--color-primary) max-w-200 w-full'>
              {' '}
              {work.designInfo}
            </p>
          </div>
          <div className='flex flex-col lg:flex-row md:justify-between max-w-250 w-full px-8 mb-10'>
            <p className='pb-3'>制作期間</p>
            <p className='pb-2 border-b border-(--color-primary) max-w-200 w-full'>
              {' '}
              {work.period}
            </p>
          </div>
          <div className='flex flex-col lg:flex-row md:justify-between max-w-250 w-full px-8 mb-10'>
            <p className='pb-3'>使用ツール</p>
            <p className='pb-2 border-b border-(--color-primary) max-w-200 w-full '>
              {' '}
              {work.tool}
            </p>
          </div>
        </div>

        <Image
          src={work.imageDesign}
          alt={work.title}
          width={1000}
          height={400}
          className='border border-(--color-primary) sm:my-20 md:my-24'
        />
        <div className='flex justify-center items-center md:col-span-2 max-w-350 w-full mb-10 md:mb-20 '>
          <ButtonPop href='/work'>ALL WORKS</ButtonPop>
        </div>
      </RootSection>

      <RootSection className='sm:py-16 md:py-20'>
        {/*
       <Contact />
       */}
      </RootSection>

      <Footer />
    </>
  );
}
