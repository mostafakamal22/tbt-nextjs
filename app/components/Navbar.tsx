"use client";
import { ReactNode, useEffect, useRef } from "react";
import {
  AiFillCloseSquare,
  AiFillContacts,
  AiFillCustomerService,
  AiFillQuestionCircle,
  AiOutlineMenu,
} from "react-icons/ai";

type Navlink = {
  title: string;
  href: string;
  icon: ReactNode;
};

const navlinks: Navlink[] = [
  {
    title: "خدماتنا",
    href: "#services",
    icon: <AiFillCustomerService size={25} />,
  },
  {
    title: "من نحن",
    href: "#about",
    icon: <AiFillQuestionCircle size={25} />,
  },
  {
    title: "تواصل معنا",
    href: "#contacts",
    icon: <AiFillContacts size={25} />,
  },
];

export default function Navbar() {
  const navRef = useRef<HTMLHeadingElement>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    //Handle Closing Navbar When Clicking Outside Of Navmenu
    const handleNavbarToggle = (e: MouseEvent) => {
      if (
        !navRef.current?.contains(e.target as Node) &&
        !openBtnRef.current?.contains(e.target as Node) &&
        !navRef.current?.classList.contains("translate-x-full")
      ) {
        navRef.current?.classList.toggle("translate-x-full");
      }
    };
    document.addEventListener("click", handleNavbarToggle);

    return () => {
      document.removeEventListener("click", handleNavbarToggle);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] flex justify-between px-[5%] select-none transition-all duration-500 ease-in-out">
      {/* Desktop Navigation  */}
      <nav
        aria-label="primary navigation"
        id="desktop-navigation"
        className="hidden md:flex justify-center items-center fixed left-1 top-2 bottom-2"
      >
        <ul className="flex flex-col justify-center gap-4 backdrop-blur bg-black/30 px-1 py-2 rounded-lg shadow">
          {navlinks.map((link) => (
            <li
              key={link.title}
              className="flex items-center justify-center p-1 border-b-2 border-transparent rounded hover:text-black hover:border-red-700 hover:bg-white transition-all duration-300 ease-in-out"
            >
              <a
                className="flex flex-col justify-center items-center gap-1 text-xs font-bold max-w-[50px]"
                title={link.title}
                href={link.href}
              >
                {link.icon}
                {link.title}
              </a>
              <a
                className="flex flex-col justify-center items-center gap-1 text-xs font-bold max-w-[50px]"
                title="خدماتنا"
                href="#services"
              ></a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation  */}
      <nav
        ref={navRef}
        aria-label="secondary navigation"
        className="absolute z-50 right-0 flex md:hidden flex-col justify-center items-center gap-5 px-4 py-5 w-full h-screen bg-gradient-to-bl from-cyan-700 to-blue-500 text-white transition-all ease-in-out duration-200 translate-x-full shadow-lg"
      >
        {/* Close Navbar Menu Button  */}
        <button
          className="self-end"
          title="Close Navigation"
          onClick={() => navRef.current?.classList.toggle("translate-x-full")}
        >
          <AiFillCloseSquare
            size={25}
            className="hover:text-red-600 rounded-full"
          />
        </button>

        <ul className="w-11/12 h-full list-none flex flex-col items-center gap-4 text-right text-lg font-semibold">
          {navlinks.map((link) => (
            <li
              key={link.title}
              className="nav-item w-full flex items-center justify-end p-2 hover:bg-cyan-500 focus:bg-cyan-500 rounded shadow"
            >
              <a
                className="w-full flex flex-row-reverse items-center justify-between gap-2"
                title={link.title}
                href={link.href}
                onClick={() =>
                  navRef.current?.classList.toggle("translate-x-full")
                }
              >
                {link.title}
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Open Navbar Menu Button  */}
      <button
        ref={openBtnRef}
        title="Open Navigation"
        className="block md:hidden mt-4 ml-auto backdrop-blur-md bg-red-200/30 p-1 rounded hover:opacity-90"
        onClick={() => navRef.current?.classList.toggle("translate-x-full")}
      >
        <AiOutlineMenu size={25} />
      </button>
    </header>
  );
}
