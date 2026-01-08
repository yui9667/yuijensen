import RootSection from './RootSection';
import Image from 'next/image';
import Link from 'next/link';
import { Work } from '@/data/work';
import ButtonPop from './ui/ButtonPop';
type WorkListProps = {
  workProps: Work[];
  showBtn?: boolean;
};
export default function WorkList({ workProps, showBtn }: WorkListProps) {
  return (
    <>
      <div className=' max-w-300 mx-auto pt-10 md:pt-20 '>
        <div className=' bg-(--color-section-background) border border-(--color-primary) mx-4 mb-5 md:mt-10 md:mb-10 '>
          <RootSection title='WORKS' className='my-10  md:mb-20'>
            <div className='grid grid-cols-1 mx-auto relative overflow-hidden md:grid-cols-2  md:gap-20 lg:gap-20  '>
              {workProps.map((work) => (
                <Link
                  key={work.id}
                  href={`/work/${work.id}`}
                  className='block group'
                >
                  <div className='relative overflow-hidden '>
                    <Image
                      src={work.imageSrc}
                      alt={work.title}
                      width={300}
                      height={300}
                      className='transition-transform duration-300 group-hover:scale-105 border border-(--color-primary) md:w-110 md:h-auto '
                    />
                    {/*Overlay*/}
                    <div className='absolute inset-0 bg-(--color-primary)/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center duration-300'>
                      <span className='text-sm text-shadow-sm text-(--color-tertiary)'>
                        View Detail
                      </span>
                    </div>
                  </div>
                  <h3 className='my-2 text-xl md:text-2xl  '>{work.title}</h3>
                  <p>{work.subtitle}</p>
                  <p className=' mb-3'>{work.tool}</p>
                </Link>
              ))}

              {showBtn && (
                <div className='flex justify-center items-center md:col-span-2  '>
                  <ButtonPop href='/work'>ALL WORKS</ButtonPop>
                </div>
              )}
            </div>
          </RootSection>
        </div>
      </div>
    </>
  );
}
