export type Work = {
  id: number;
  imageSrc: string;
  title: string;
  subtitle: string;
  tool: string;
  createdAt: string;
  githubUrl: string;
  target: string;
  purpose: string;
  designInfo: string;
  period: string;
  imageDesign: string;
  isFeatured?: boolean;
};

export const works: Work[] = [
  {
    id: 1,
    imageSrc: '/images/dentalclinical.png',
    title: '矯正専門歯科',
    subtitle: 'Website ｜　架空サイト',
    tool: 'Figma',
    createdAt: '2025-12-29',
    githubUrl: '',
    target:
      '10代後半から30代を中心。矯正を考えているが、症例が難しく断られてしまう人たち。',
    purpose:
      '情報提供。ファーストビューで安心感を与えるため、カウンセリング中の写真を選択。文章からも専門の矯正歯科であることが一目でわかるようにしました。',
    designInfo:
      '設備の整った専門歯科で高級感を出すため、余白多め。  マスタード色をアクセントに使い、細いラインの文字でエレガントさを表現。',
    period: '1ヶ月',
    imageDesign: '/images/dentalclinical2.jpg',
    isFeatured: true,
  },
  {
    id: 2,
    imageSrc: '/images/dentalclinical.png',
    title: 'ポートフォリオ',
    subtitle: 'Website ｜　個人サイト',
    tool: '使用ツール: Figma, Next.js, TypeScript',
    createdAt: '2026-01-04',
    githubUrl: '',
    target: 'リクルーターやフリーランス案件の発注者の方々を対象にしています。',
    purpose:
      '自身のデザインスタイルや考え方を知っていただき、信頼してお仕事を依頼いただくための作品です。',
    designInfo:
      'POPな要素は好きですが、奇抜になりすぎないよう色味は落ち着かせつつ、全体的にバランスの良い明暗でPOP感を表現しました。',
    period: '1ヶ月',
    imageDesign: '',
    isFeatured: true,
  },
  {
    id: 3,
    imageSrc: '/images/dentalclinical.png',
    title: 'Test',
    subtitle: 'Test',
    tool: 'Test',
    createdAt: 'Test',
    githubUrl: '',
    target: 'Test',
    purpose: 'Test',
    designInfo: 'Test',
    period: 'Test',
    imageDesign: 'Test',
    isFeatured: false,
  },

  {
    id: 4,
    imageSrc: '/images/dentalclinical.png',
    title: 'Test',
    subtitle: 'Test',
    tool: 'Test',
    createdAt: 'Test',
    githubUrl: '',
    target: 'Test',
    purpose: 'Test',
    designInfo: 'Test',
    period: 'Test',
    imageDesign: 'Test',
    isFeatured: false,
  },

  {
    id: 5,
    imageSrc: '/images/dentalclinical.png',
    title: 'Test',
    subtitle: 'Test',
    tool: 'Test',
    createdAt: 'Test',
    githubUrl: '',
    target: 'Test',
    purpose: 'Test',
    designInfo: 'Test',
    period: 'Test',
    imageDesign: 'Test',
    isFeatured: false,
  },
];
