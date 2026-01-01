export type Work = {
  id: number;
  imageSrc: string;
  title: string;
  subtitle: string;
  tool: string;
};

export const works: Work[] = [
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
