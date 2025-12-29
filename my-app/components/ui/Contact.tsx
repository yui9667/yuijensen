import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function Contact() {
  return (
    <Card className='w-full max-w-md bg-(--color-contactBtn-background) border-2 border-(--color-letter) '>
      <CardHeader className='text-center'>
        <CardTitle>CONTACT</CardTitle>
        <CardDescription className='mt-2 '>
          ご相談やご挨拶など、どんなことでもご連絡ください!
        </CardDescription>
      </CardHeader>

      <CardFooter className='flex-col gap-2'>
        <Button className='bg-(--color-letter) text-(--color-contactBtn-interest)'>
          <Link href='/contact'>お問い合わせする</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
