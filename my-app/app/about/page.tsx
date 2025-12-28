import Image from 'next/image';
import ProfileAboutImage from '../../public/about-profile.jpg';
import RootSection from '@/components/RootSection';
export default function About() {
  return (
    <>
      <RootSection title='ABOUT'>
        <div className='flex flex-col items-center text-center gap-8'>
          <Image
            src={ProfileAboutImage}
            alt='Profile of myself with buildings'
            width={1000}
            height={500}
            priority={true}
          />
          <h3 className='text-2xl text-(--color-letter)'>ヤンセン　唯</h3>
          <p className='text-(--color-letter) 1rem  max-w-3xl px-4'>
            ヤンセン　唯 1996年生まれ、広島出身。
            高校卒業後にアパレル業界へ就職し、その後ワーキングホリデー制度を利用してカナダに1年半滞在しました。
            帰国後は英語を活かしてホテルのフロント業務に従事し、再びワーキングホリデーでデンマークへ渡航。そこで現在の夫と出会ったことをきっかけに、2022年よりスウェーデンに拠点を移しました。
            デンマークの企業でマーケティングのインターンとして働く中で、
            SNS向けの画像制作に携わったことをきっかけに、UX/UIデザインやフロントエンド開発への興味が深まりました。そこから独学で学び始め、2024年には現地の職業学校で約1年間、フロントエンドとバックエンドの基礎を幅広く学び、2025年1月に修了しました。
            現在はWebデザイナーを目指し、メンターのサポートを受けながらデザイン力と技術力を日々磨いています。
          </p>
        </div>
      </RootSection>
    </>
  );
}
