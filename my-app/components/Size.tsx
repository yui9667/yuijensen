export default function Size({
  children,
  size,
}: {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
}) {
  const sizes = {
    sm: 'sm:py-16 md:py-20',
    md: ' sm:py-20 md:py-24',
    lg: ' sm:py-28 md:py-32',
  };
  return <section className={sizes[size]}>{children}</section>;
}
