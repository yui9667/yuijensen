import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function ButtonPop({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <div className='text-center my-3'>
      <Link href={href}>
        <div className='relative inline-block'>
          {/* Accent layer */}
          <div
            className='
      absolute inset-0
      bg-(--color-primary)
      rounded-full
      translate-x-0.2 translate-y-0.2
      z-0
      '
          />

          {/* Button */}
          <Button
            className=' 
          relative
          z-10
      rounded-full
      px-8 py-3
      bg-(--color-accent)
      text-(--color-primary)
      -translate-y-1
      hover:-translate-y-1.5
      active:translate-y-0
      transition-transform
      duration-150
      '
          >
            {children}
          </Button>
        </div>
      </Link>
    </div>
  );
}
{
}
