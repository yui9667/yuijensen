import Image from 'next/image';
import ProfileAboutImage from '../../public/images/about-profile.jpg';
import RootSection from '@/components/RootSection';
import { Contact } from '@/components/ui/Contact';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
export default function About() {
  const photos = [
    {
      src: '/images/photo1.jpg',
      alt: 'Picture of drums',
      label: '学生の頃から音楽が好きで、　家でドラムを叩いています',
    },
    {
      src: '/images/photo2.jpg',
      alt: 'Picture of dance',
      label: '最近はダンスにも興味があり、週に一度クラスに参加しています',
    },
    {
      src: '/images/photo3.jpg',
      alt: 'Picture of baking',
      label: '日本のスイーツは手に入らないので、自分でよくを作ります',
    },
    {
      src: '/images/photo4.jpg',
      alt: 'Picture of game controller',
      label: 'Playstationでゲームをしてます',
    },
  ];

  const career = [
    { date: '2015.03', event: '高校卒業' },
    {
      date: '2015.04 - 2017.01',
      event: '株式会社アダストリア　LOWRYS FARM　 広島パルコ店　販売員',
    },
    {
      date: '2017.01 - 2018.08',
      event: 'ワーキングホリデーのためカナダへ渡航',
    },
    {
      date: '2018.09 -2019.12',
      event:
        'ソラーレ　ホテルズ　アンドリゾーツ株式会社 チサンホテル広島　フロントスタッフ',
    },
    {
      date: '2020.01 - 2021.01',
      event: 'ワーキングホリデーのためデンマークへ渡航',
    },
    {
      date: '2021.02 - 2021.10',
      event:
        'ソラーレ　ホテルズ　アンドリゾーツ株式会社 チサンホテル広島　フロントスタッフ',
    },
    {
      date: '2021.09 - 2021.10',
      event: 'ProjectNord (インターン) インフルエンサーマーケティング',
    },
    {
      date: '2024.01 - 2024.06',
      event: 'Sundsgårdens Folkhögskola フロントエンドを学ぶ',
    },
    {
      date: '2024.08 - 2025.01',
      event: 'Sundsgårdens Folkhögskola バックエンドを学ぶ',
    },
  ];
  const skills = [
    { title: 'デザイン', items: ['Figma'] },
    { title: '言語', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
    { title: 'フレームワーク', items: ['React'] },
    {
      title: 'CSS フレームワーク',
      items: ['Tailwind CSS', 'Bootstrap', 'Sass'],
    },
  ];
  const strengths = [
    {
      title: '自走力',
      description:
        '2年前からデザインとコードの学習を始め、最初の1年間は独学で、さらにその後は1年間スウェーデンの職業学校に行きました。学ぶたびに理解が深まる達成感を味わうのが好きですし、「今日よりも明日、もっと成長したい」という気持ちが、私の学びを継続させています。',
    },
    {
      title: '向上心',
      description:
        '高校を卒業してからのこの10年間、常に何かを学び続けてきました。英語も独学で勉強を重ね、数年前にはIELTS6を取得。現在は少しずつですがデンマーク語の学習にも取り組んでいます。また、より目に留まるデザインを作れるよう、デザインの勉強も日々続けています。',
    },
    {
      title: '傾聴力',
      description:
        '他人の意見や感情を尊重し、理解する力を大切にしています。常に相手の立場に立って話を聞くことで、信頼関係を築き、より良い結果を導くことができます。',
    },
  ];
  return (
    <>
      <Nav />

      <RootSection
        title='ABOUT'
        className='mt-15 mb-10 md:mt-30 md:mb-20 pt-14 md:pt-28'
      >
        <div className='flex flex-col items-center text-center gap-8'>
          <Image
            src={ProfileAboutImage}
            alt='Profile of myself with buildings'
            width={1000}
            height={500}
            priority={true}
          />
        </div>
        <div className='flex flex-col justify-center items-center px-4 '>
          <h3 className='text-xl md:text-2xl mt-6 md:mt-10 mb-6 md:mb-8 '>
            ヤンセン　唯
          </h3>
          <p className=' mb-8 md:text-base leading-6 max-w-5xl '>
            1996年生まれ、広島出身。
          </p>
          <p className=' text-sm md:text-base leading-6 max-w-5xl '>
            高校卒業後にアパレル業界へ就職し、その後ワーキングホリデー制度を利用してカナダに1年半滞在しました。
            帰国後は英語を活かしてホテルのフロント業務に従事し、再びワーキングホリデーでデンマークへ渡航。そこで現在の夫と出会ったことをきっかけに、2022年よりスウェーデンに拠点を移しました。
            デンマークの企業でマーケティングのインターンとして働く中で、
            SNS向けの画像制作に携わったことをきっかけに、UX/UIデザインやフロントエンド開発への興味が深まりました。そこから独学で学び始め、2024年には現地の職業学校で約1年間、フロントエンドとバックエンドの基礎を幅広く学び、2025年1月に修了しました。
            現在はWebデザイナーを目指し、メンターのサポートを受けながらデザイン力と技術力を日々磨いています。
          </p>
        </div>
      </RootSection>

      <RootSection title='CAREER' className='mt-15 mb-10 md:mt-30 md:mb-20'>
        <div className=' flex flex-col self-end'>
          {career.map((item, index) => (
            <div key={index} className='w-full max-w-130 px-4 mb-5'>
              <p className='leading-6 mb-2'>{item.date}</p>
              <p className='leading-6'>{item.event}</p>
              <div className='w-full border-b-2 border-current mt-2' />
            </div>
          ))}
        </div>
      </RootSection>
      <RootSection title='SKILLS' className='mt-15 mb-10 md:mt-30 md:mb-20'>
        <div className='flex flex-col self-end w-full max-w-130'>
          {skills.map((skill, index) => (
            <div key={index} className=' w-full px-4 mb-5'>
              <p className='font-bold mb-2 leading-6'>{skill.title}</p>
              <p className='leading-6'>{skill.items.join(', ')}</p>
              <div className='w-full border-b-2 border-current mt-2' />
            </div>
          ))}
        </div>
      </RootSection>
      <RootSection title='STRENGTHS' className='mt-15 mb-10 md:mt-30 md:mb-20'>
        <div className='flex flex-col self-end'>
          {strengths.map((strength, index) => (
            <div key={index} className='w-full max-w-130 px-4  mb-5'>
              <p className='font-bold mb-2'>{strength.title}</p>
              <p className='leading-6'>{strength.description}</p>
              <div className='w-full border-b-2 border-current mt-2' />
            </div>
          ))}
        </div>
      </RootSection>
      <RootSection title='INTEREST' className='mt-15 mb-10 md:mt-30 md:mb-20'>
        <div className='max-w-150 mx-auto '>
          <div className='grid grid-cols-1 mx-auto gap-4 md:grid-cols-2'>
            {photos.map((photo, item) => (
              <div
                key={item}
                className='relative group w-70 h-70 md:w-75 md:h-75 '
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={300}
                  height={300}
                  className='object-cover w-full h-full duration-300 '
                />

                <div className='absolute inset-0 bg-(--color-primary)/30 group-hover:bg-(--color-primary)/70 transition z-10' />
                <div className='text-(--color-tertiary) absolute inset-0 flex items-center justify-center group-hover:opacity-100 transition z-20 p-4'>
                  <span className='opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-center'>
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RootSection>

      <RootSection>
        <Contact />
      </RootSection>

      <Footer />
    </>
  );
}
