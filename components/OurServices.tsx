import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type ServiceDetails = {
  title: ReactNode;
  desc: string;
  imageSrc: string;
  imageAlt: string;
};

const services: ServiceDetails[] = [
  {
    title: (
      <>
        حجوزات <span className="font-bold">طيران</span>
      </>
    ),
    desc: "يمكنك حجز تذاكر طيران لجميع الوجهات حول العالم",
    imageSrc: "/icons/services/airplane.svg",
    imageAlt: "Flights Tickets",
  },
  {
    title: (
      <>
        حجوزات <span className="font-bold">فنادق</span>
      </>
    ),
    desc: "يمكنك الحجز المسبق للفنادق بكل سهولة",
    imageSrc: "/icons/services/hotel.svg",
    imageAlt: "Hotels Reservations",
  },
  {
    title: (
      <>
        تأشيرات <span className="font-bold">سياحية</span>
      </>
    ),
    desc: "يمكنك حجز تأشيرات سياحية لجميع الوجهات حول العالم",
    imageSrc: "/icons/services/passport.svg",
    imageAlt: "Visas",
  },
  {
    title: (
      <>
        سياحة <span className="font-bold">دينية</span>
      </>
    ),
    desc: "يمكنك الان الحصول على تأشيرة المملكة العربية السعودية بكل سهولة, والإختيار من ضمن أفضل برامج العمرة (برى - طيران)",
    imageSrc: "/icons/services/mosque.svg",
    imageAlt: "Religious Tourism",
  },
  {
    title: (
      <>
        أجازتك <span className="font-bold">عندنا</span>
      </>
    ),
    desc: "إختر البرنامج السياحى المناسب لك ولأفراد عائلتك وتمتع بأفضل الوجهات السياحية حول العالم",
    imageSrc: "/icons/services/holiday.svg",
    imageAlt: "Holidays",
  },
  {
    title: "سيــارات",
    desc: "إتصل الان تصلك سيارتنا تصحبك من المطار إلى الفندق",
    imageSrc: "/icons/services/taxi.svg",
    imageAlt: "Outter Tourism",
  },
];

export default function OurServices() {
  return (
    <section
      id="services"
      className="min-h-screen relative py-20 bg-gradient-to-b from-black to-cyan-900"
    >
      <header className="flex flex-col justify-center items-center select-none">
        <h2 className="relative mb-10 py-1 text-5xl font-bold text-transparent bg-clip-text bg-[linear-gradient(305deg,tomato,gold,cyan)] after:content-[''] after:absolute after:right-0 after:left-0 after:-bottom-[.2rem] after:h-[.5rem] after:bg-[auto_100%] after:bg-repeat-round after:bg-[0em] wavy-text">
          خـدماتنــا
        </h2>
        <p className="text-xl px-2 text-white">
          نقدم لك باقة من خدمات السفر والسياحة حول العالم بأفضل الاسعار وخدمة
          ممتازة على مدار الساعة
        </p>
      </header>

      <div className="container my-8 p-4 mx-auto flex flex-wrap justify-center text-white">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.imageAlt}
              className="max-w-sm backdrop-blur-sm bg-cyan-200/30 rounded-lg overflow-hidden md:m-3 shadow-lg md:hover:scale-105 transition-all ease-in-out duration-300"
            >
              <div className="flex flex-col justify-center items-center gap-4 px-6 py-8">
                <Image
                  className="mx-auto my-2 w-[200px] h-[200px] drop-shadow-lg"
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  width={200}
                  height={200}
                  loading="lazy"
                  priority={false}
                />
                <h3 className="text-2xl">{service.title}</h3>
                <hr className="w-full" />
                <p className="text-base p-4">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button title="إحجــز الأن" className="btn-primary">
        <Link className="relative z-20 drop-shadow-lg" href="/services">
          إحجــز الأن
        </Link>
      </button>
    </section>
  );
}
