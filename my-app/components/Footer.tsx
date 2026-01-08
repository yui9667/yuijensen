export default function Footer() {
  return (
    <footer className=" mt-8 text-center relative bg-(--color-background) bg-[url('/images/footer.svg')] bg-no-repeat bg-center min-h-40 bg-cover md:min-h-50 ">
      <div className='pt-10 pb-20 md:pb-30 md:pt-15 space-y-2 md:space-y-4 text-xl md:text-2xl '>
        <p>
          Contact:{' '}
          <a
            href='mailto:jensenyui1122@gmail.com'
            className='underline duration-200 hover:text-(--color-accent) '
          >
            jensenyui1122@gmail.com
          </a>
        </p>
      </div>
      <p className=' absolute w-80 bottom-4 left-1/2 transform -translate-x-1/2 text-sm  mt-10 md:text-base '>
        © 2025 Yui Jensen. All rights reserved.
      </p>
    </footer>
  );
}
