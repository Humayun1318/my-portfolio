const HomePage = () => {
  return (
    <div>
      {/* Home page section */}
      <section className="flex flex-col md:flex-row">
        {/* Left part of the page (Fixed) */}
        <section className="w-full border md:sticky md:top-0 md:h-screen md:w-[40%]">
          <div className="">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="mt-2">
              I am a web developer with a passion for creating beautiful and functional websites.
            </p>
          </div>
        </section>

        {/* Right part of the page (Scrollable) */}
        <section className="w-full overflow-y-auto border md:w-[60%]">
          <div className="p-4">
            <h1 className="text-4xl font-bold">Welcome</h1>
            <p className="mt-4 text-lg">Explore my portfolio</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HomePage;
