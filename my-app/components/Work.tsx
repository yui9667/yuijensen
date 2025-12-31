import { Button } from '@/components/ui/button';
import RootSection from './RootSection';
import Image from 'next/image';
import Link from 'next/link';
import ButtonPop from './ui/ButtonPop';
export default function Work() {
  const projects = [
    {
      id: 1,
      imageSrc: '/images/dentalclinical.png',
      title: '矯正専門歯科',
      subtitle: 'Website ｜　架空サイト',
      tool: '使用ツール: Figma',
    },
    {
      id: 2,
      imageSrc: '/images/dentalclinical.png',
      title: 'ポートフォリオ',
      subtitle: 'Website ｜　個人サイト',
      tool: '使用ツール: Figma, Next.js, TypeScript',
    },
  ];
  return (
    <>
      <div className='md:max-w-350 bg-(--color-section-background)  px-4 py-20 mx-15 '>
        <RootSection title='WORKS'>
          <div className='grid grid-cols-1 mx-auto md:gap-20 md:grid-cols-2 relative overflow-hidden '>
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`../app/works/${project.id}`}
                className='block group'
              >
                <div className='relative overflow-hidden '>
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={300}
                    height={200}
                    className='transition-transform duration-300 group-hover:scale-105 border border-(--color-primary) '
                  />
                  {/*Overlay*/}
                  <div className='absolute inset-0 bg-(--color-primary)/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center duration-300'>
                    <span className='text-sm text-shadow-sm text-(--color-tertiary)'>
                      View Detail
                    </span>
                  </div>
                </div>
                <h3 className='my-2 text-xl md:text-2xl  '>{project.title}</h3>
                <p>{project.subtitle}</p>
                <p className=' mb-3'>{project.tool}</p>
              </Link>
            ))}
            <div className='flex justify-center items-center md:col-span-2 mt-10 '>
              <ButtonPop href='../app/works'>ALL WORKS</ButtonPop>
            </div>
          </div>
        </RootSection>
      </div>
    </>
  );
}
