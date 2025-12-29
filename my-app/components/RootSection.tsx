'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Line from '../public/images/line.png';
const MotionImage = motion.create(Image);
export default function RootSection({
  children,
  title = '',
}: {
  children?: React.ReactNode;
  title?: string;
}) {
  return (
    <>
      {title && (
        <motion.section
          className='flex flex-col mt-30 mb-20 mx-auto max-w-350 px-4 items-center'
          initial={title ? { opacity: 0, y: 50 } : {}}
          whileInView={title ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl text-(--color-accent) self-start '>
            {title}
          </h2>
          <MotionImage
            src={Line}
            alt='Underline of text'
            width={800}
            className='mb-20 self-start  '
            initial={title ? { opacity: 0, x: '-100%' } : {}}
            whileInView={title ? { opacity: 1, x: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          {children}
        </motion.section>
      )}
    </>
  );
}
