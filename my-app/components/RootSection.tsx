'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Line from '../public/Line.png';
const MotionImage = motion.create(Image);
export default function RootSection({
  children,
  title = '',
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <>
      {title && (
        <motion.section
          className='flex flex-col mt-30 mb-20'
          initial={title ? { opacity: 0, y: 50 } : {}}
          whileInView={title ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-5xl text-(--color-accent) ml-20'>{title}</h2>
          <MotionImage
            src={Line}
            alt='Underline of text'
            width={800}
            className='mb-20 ml-20'
            initial={title ? { opacity: 0, x: -500 } : {}}
            whileInView={title ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          {children}
        </motion.section>
      )}
    </>
  );
}
