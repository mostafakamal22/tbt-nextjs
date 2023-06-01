import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

type FooterLink = {
  herf: string;
  text: string;
};

const footerLinks: FooterLink[] = [
  {
    herf: "#",
    text: "الرئيسية",
  },
  {
    herf: "#about",
    text: "من نحن؟",
  },
  {
    herf: "#services",
    text: "خدماتنا",
  },
  {
    herf: "#contacts",
    text: "تواصل معنا",
  },
];
export default function Footer() {
  return (
    <footer className="p-4 md:px-10 md:pt-20 border-dashed border-t-emerald-700 border-t-8">
      <div className="max-w-[1440px] flex items-center justify-between flex-wrap gap-4">
        <Image
          src="/img/logo.webp"
          className="max-w-[85px] w-24 h-[59px] mx-auto sm:mx-0"
          height={59}
          width={96}
          alt="Trans Border Tourism Logo"
          loading="lazy"
          priority={false}
        />

        <span className="mx-auto sm:mr-auto sm:ml-0 self-center text-2xl font-semibold whitespace-nowrap">
          عبر الحدود للسياحة
        </span>

        <nav aria-label="Footer Navigation" className="mx-auto md:mr-0">
          <ul className="flex flex-wrap items-center gap-4 mb-4 text-xs sm:text-sm text-white font-semibold sm:mb-0">
            {footerLinks.map((link) => (
              <li key={link.herf}>
                <a href={link.herf} className="hover:underline">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="flex justify-center items-center gap-1">
        <span>Made With</span>
        <AiFillHeart size={20} className="text-red-500" />
      </span>
      <span className="block text-sm">
        © 2023
        <a href="https://tbtourism.com/" className="hover:underline mx-1">
          Trans Border Tourism™.
        </a>
        All Rights Reserved.
      </span>
    </footer>
  );
}
