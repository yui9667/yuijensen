export default function RootSection({
  children,
  title = '',
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <>
      <section className='flex flex-col mt-30'>
        <h1 className='text-5xl text-amber-500'>{title}</h1>
        {children}
      </section>
    </>
  );
}
