const Breakpoints = () => {
  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white rounded-full flex items-center justify-center text-sm h-8 w-8">
      <p className="block sm:hidden">xs</p>
      <p className="hidden sm:block md:hidden">sm</p>
      <p className="hidden md:block lg:hidden">md</p>
      <p className="hidden lg:block xl:hidden">lg</p>
      <p className="hidden xl:block 2xl:hidden">xl</p>
      <p className="hidden 2xl:block">xl+</p>
    </div>
  );
};

export default Breakpoints;
