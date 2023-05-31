import Image from "next/image";

type Contact = {
  imageSrc: string;
  imageAlt: string;
  link: string;
  linkTitle: string;
  text: string;
};

const contacts: Contact[] = [
  {
    imageSrc: "/icons/contacts/mail-email.svg",
    imageAlt: "mail",
    link: "mailto:Info@tbtourism.com",
    linkTitle: "Mail Us",
    text: "Info@tbtourism.com",
  },
  {
    imageSrc: "/icons/contacts/mobile-phone.svg",
    imageAlt: "mail",
    link: "tel:9715123456789",
    linkTitle: "Call Us",
    text: "9715123456789",
  },
  {
    imageSrc: "/icons/contacts/mobile-phone.svg",
    imageAlt: "mail",
    link: "tel:971412345678",
    linkTitle: "Call Us",
    text: "971412345678",
  },
  {
    imageSrc: "/icons/contacts/telephone-mobile-phone.svg",
    imageAlt: "mail",
    link: "tel:97145782747",
    linkTitle: "Telephone Us",
    text: "97145782747",
  },
];

const socialMediaLinks: Omit<Contact, "text">[] = [
  {
    link: "https://web.facebook.com/Transborderstourism",
    linkTitle: "Facebook Page",
    imageSrc: "/icons/socials/square-facebook.svg",
    imageAlt: "Facebook",
  },
  {
    link: "https://www.instagram.com/transborderstourism",
    linkTitle: "Instagram Page",
    imageSrc: "/icons/socials/square-instagram.svg",
    imageAlt: "Instagram",
  },
  {
    link: "https://www.tiktok.com/@tbttourism?_t=8Yiqe1hndxK&_r=1",
    linkTitle: "Tiktok Page",
    imageSrc: "/icons/socials/tiktok.svg",
    imageAlt: "Tiktok",
  },
  {
    link: "https://wa.me/971507597677",
    linkTitle: "Whatsapp",
    imageSrc: "/icons/socials/square-whatsapp.svg",
    imageAlt: "Whatsapp",
  },
  {
    link: "https://wa.me/971556620879",
    linkTitle: "Whatsapp",
    imageSrc: "/icons/socials/square-whatsapp.svg",
    imageAlt: "Whatsapp",
  },
  {
    link: "https://wa.me/971506307950",
    linkTitle: "Whatsapp",
    imageSrc: "/icons/socials/square-whatsapp.svg",
    imageAlt: "Whatsapp",
  },
];

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="min-h-screen py-20 bg-gradient-to-b from-black to-cyan-900"
    >
      <header className="flex flex-col justify-center items-center select-none">
        <h2 className="relative mb-10 py-1 text-5xl font-bold text-transparent bg-clip-text bg-[linear-gradient(305deg,tomato,gold,cyan)] after:content-[''] after:absolute after:right-0 after:left-0 after:-bottom-[.5rem] after:h-[.5rem] after:bg-[auto_100%] after:bg-repeat-round after:bg-[0em] wavy-text">
          تواصــل معنـا
        </h2>
        <p className="max-w-2xl px-2 font-semibold text-white">
          إبق على تواصل معنا للإطلاع على أحدث العروض ومعرفة جميع أخبارنا
        </p>
      </header>

      <div className="container my-8 p-4 mx-auto flex flex-wrap justify-center text-white">
        <div className="grid content-center sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="self-start px-6 py-8 max-w-sm min-w-[18rem] rounded overflow-hidden md:m-3 shadow-lg backdrop-blur-lg bg-cyan-200/30 md:hover:scale-105 transition-all ease-in-out duration-300">
            <div className="flex flex-col justify-between items-center gap-4">
              <Image
                className="mx-auto my-2 w-[180px] h-[180px]"
                src="/icons/contacts/telephone-technology.svg"
                alt="البريــد الالكترونــى والموبايل"
                width={180}
                height={180}
                loading="lazy"
                priority={false}
              />
              <h3 className="text-2xl">
                البريــد الالكترونــى
                <span className="font-bold"> والموبايل </span>
              </h3>
              <hr className="w-full" />
              <ul className="w-full flex flex-col justify-start items-center flex-wrap gap-2 text-base font-semibold">
                {contacts.map((contact) => (
                  <li
                    key={contact.link}
                    className="w-full flex items-center gap-4"
                  >
                    <Image
                      className="w-[25px] h-[25px]"
                      src={contact.imageSrc}
                      alt={contact.imageAlt}
                      loading="lazy"
                      width={25}
                      height={25}
                      priority={false}
                    />
                    <a href={contact.link} title={contact.linkTitle}>
                      {contact.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="self-start px-6 py-8 max-w-sm min-w-[18rem] rounded overflow-hidden md:m-3 shadow-lg backdrop-blur-lg bg-cyan-200/30 md:hover:scale-105 transition-all ease-in-out duration-300">
            <div className="flex flex-col justify-between items-center gap-4">
              <Image
                className="mx-auto my-2 w-[180px] h-[180px]"
                src="/icons/contacts/chat-communication.svg"
                alt="السوشيال ميديــا"
                width={180}
                height={180}
                loading="lazy"
                priority={false}
              />
              <h3 className="text-2xl">
                وسائل <span className="font-bold"> التواصل الإجتماعى</span>
              </h3>
              <hr className="w-full" />
              <ul className="flex justify-center items-center flex-wrap gap-4 text-base font-semibold">
                {socialMediaLinks.map((socialLink) => (
                  <li key={socialLink.link}>
                    <a
                      href={socialLink.link}
                      target="_blank"
                      title={socialLink.linkTitle}
                    >
                      <Image
                        className="w-[50px] h-[50px] hover:opacity-95 p-2 bg-slate-50 rounded-md shadow-lg"
                        src={socialLink.imageSrc}
                        alt={socialLink.imageAlt}
                        width={50}
                        height={50}
                        loading="lazy"
                        priority={false}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="px-6 py-4 flext justify-center items-center max-w-sm min-w-[18rem] rounded overflow-hidden md:m-3 shadow-lg backdrop-blur-lg bg-cyan-200/30 md:hover:scale-105 transition-all ease-in-out duration-300">
            <div className="flex flex-col justify-between items-center gap-4 md:mt-3">
              <Image
                className="mx-auto my-2 w-[180px] h-[180px]"
                src="/icons/contacts/placeholder-signs.svg"
                alt="العنــوان"
                width={180}
                height={180}
                loading="lazy"
                priority={false}
              />
              <h3 className="text-2xl">العنــوان</h3>
              <hr className="w-full" />
              <p className="text-base">DUBAI - UNITED ARAB EMIRATES</p>
              <iframe
                title="Trans Border Tourism Address"
                loading="lazy"
                data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7677348666284!2d55.35105959999999!3d25.278397599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dc609e002cd%3A0x4f66a6325028b930!2sTrans%20Borders%20Tourism!5e0!3m2!1sen!2seg!4v1672771297534!5m2!1sen!2seg"
                className="lazy-iframe h-full w-full rounded-lg"
                allowFullScreen
              ></iframe>
              <noscript>
                <iframe
                  title="Trans Border Tourism Address"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7677348666284!2d55.35105959999999!3d25.278397599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dc609e002cd%3A0x4f66a6325028b930!2sTrans%20Borders%20Tourism!5e0!3m2!1sen!2seg!4v1672771297534!5m2!1sen!2seg"
                  className="lazy-iframe h-full w-full rounded-lg"
                  allowFullScreen
                ></iframe>
              </noscript>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
