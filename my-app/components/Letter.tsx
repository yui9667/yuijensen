import { motion } from 'framer-motion';
export default function Letter() {
  return (
    <>
      <div className='overflow-hidden w-full py-6'>
        <motion.div
          className='flex whitespace-nowrap text-4xl font-bold'
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          }}
        >
          <div className='flex  border-t border-(--color-primary) py-4'>
            <span className='mx-1 text-xl lg:text-5xl'>
              YUIJENSEN PORTFOLIO
            </span>
            <span className='mx-1 text-xl lg:text-5xl'>
              YUIJENSEN PORTFOLIO
            </span>
            <span className='mx-1 text-xl lg:text-5xl'>
              YUIJENSEN PORTFOLIO
            </span>
          </div>
          <div className='flex  border-t border-(--color-primary) py-4'>
            <span className='mx-1 text-xl lg:text-5xl'>
              YUIJENSEN PORTFOLIO
            </span>
            <span className='mx-1 text-xl lg:text-5xl'>
              YUIJENSEN PORTFOLIO
            </span>
            <span className='mx-1 text-xl lg:text-5xl'>
              YUIJENSEN PORTFOLIO
            </span>
          </div>
        </motion.div>

        <motion.div
          className='flex whitespace-nowrap text-4xl font-bold'
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          }}
        >
          <div className='flex  border-b border-(--color-primary) py-4'>
            <span className='mx-1 text-xl lg:text-5xl'>
              YUIJENSEN PORTFOLIO
            </span>
            <span className='mx-1 text-xl lg:text-5xl'>
              YUIJENSEN PORTFOLIO
            </span>
            <span className='mx-1 text-xl lg:text-5xl'>
              YUIJENSEN PORTFOLIO
            </span>
          </div>
         <div className='flex  border-b border-(--color-primary) py-4'>
            <span className='mx-1 text-xl lg:text-5xl'>
              YUIJENSEN PORTFOLIO
            </span>
            <span className='mx-1 text-xl lg:text-5xl'>
              YUIJENSEN PORTFOLIO
            </span>
            <span className='mx-1 text-xl lg:text-5xl'>
              YUIJENSEN PORTFOLIO
            </span>
          </div>
        </motion.div>
      </div>
    </>
  );
}
