import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="min-h-screen relative py-20 bg-gradient-to-b from-cyan-900 to-black border-y-8 border-emerald-700 border-dashed"
    >
      <header className="flex flex-col justify-center items-center select-none">
        <h2 className="relative mb-10 py-1 text-5xl font-bold text-transparent bg-clip-text bg-[linear-gradient(305deg,tomato,gold,cyan)] after:content-[''] after:absolute after:right-0 after:left-0 after:-bottom-[.5rem] after:h-[.5rem] after:bg-[auto_100%] after:bg-repeat-round after:bg-[0em] wavy-text">
          مــن نحــن؟
        </h2>
        <p className="max-w-2xl text-xl px-2">
          شركة عبر الحدود للسياحة وهي شركة خاصة تأسست عام 2015 مركزها في مدينة
          دبي تعمل في مجال السياحة والسفر وهي شركة مرخصة اصولا من وزارة السياحة
          بدولة الامارات العربيـة المتحدة
        </p>
      </header>

      <div className="container my-8 p-4 mx-auto flex flex-wrap justify-center text-white">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="max-w-sm backdrop-blur-lg bg-cyan-200/30 rounded-lg overflow-hidden md:m-3 shadow-lg md:hover:scale-105 transition-all ease-in-out duration-300">
            <div className="flex flex-col justify-center items-center gap-4 px-6 py-8">
              <Image
                className="mx-auto w-[200px] h-[200px] drop-shadow-lg"
                src="/icons/about/glasses-vision.svg"
                alt="Our Vision"
                width={1000}
                height={1000}
                loading="lazy"
                priority={false}
              />
              <h3 className="text-2xl">رؤيتنــا</h3>
              <hr className="w-full" />
              <p className="text-base p-4">
                أن تكون شركتنا هي الخيار الأول والأفضل للعملاء الراغبين في
                الحصول علي جميع خدمات السفر والسياحه حول العالم من خلال التواصل
                المباشر بمقر الشركه والتواصل الغير مباشر عبر الانترنت من خلال
                منصات التواصل الاجتماعي
              </p>
            </div>
          </div>

          <div className="max-w-sm backdrop-blur-lg bg-cyan-200/30 rounded-lg overflow-hidden md:m-3 shadow-lg md:hover:scale-105 transition-all ease-in-out duration-300">
            <div className="flex flex-col justify-center items-center gap-4 px-6 py-8">
              <Image
                className="mx-auto w-[200px] h-[200px] drop-shadow-lg"
                src="/icons/about/target.svg"
                alt="Our Goal"
                width={1000}
                height={1000}
                loading="lazy"
                priority={false}
              />
              <h3 className="text-2xl">هدفنـــا</h3>
              <hr className="w-full" />
              <p className="text-base p-4">
                السعي جاهدين دائماً نحو تقديم افضل خدمة متميزه و نبذل قصاري
                جهدنا في تطوير الخدمات السياحية بدولة الامارات العربيه المتحده
                داخلها وخارجها
              </p>
            </div>
          </div>
        </div>
      </div>

      <button title="تواصــل معنـا" className="btn-primary">
        <a className="relative z-20 drop-shadow-lg" href="#contacts">
          تواصــل معنـا
        </a>
      </button>
    </section>
  );
}
