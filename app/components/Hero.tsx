export default function Hero() {
  return (
    <section className="min-h-screen px-3 py-10 hero-section flex flex-col justify-center items-center select-none">
      <header className="px-2 flex-grow basis-full flex flex-col justify-center items-center">
        <h1 className="mb-2 py-2 text-[clamp(3rem,3rem+2vw,6rem)] leading-tight font-extrabold drop-shadow-lg bg-clip-text fancy text-transparent bg-center bg-[110%_auto]">
          عبـر الحـدود للسياحـة
        </h1>

        <p className="text-base sm:text-xl mb-2">
          إختيــار
          <span className="text-xl sm:text-2xl font-bold relative whitespace-nowrap after:content-[''] after:absolute after:right-0 after:left-0 after:-bottom-[.2rem] after:h-[.5rem] after:bg-[auto_100%] after:bg-repeat-round after:bg-[0em] wavy-text">
            أفضــل
          </span>
          للسفــر و السياحــة حــول العالــم
        </p>
      </header>
      <button title="تواصــل معنـا" className="btn-primary">
        <a className="relative z-20 drop-shadow-lg" href="#contacts">
          تواصــل معنـا
        </a>
      </button>
    </section>
  );
}
