import { Metadata } from "next";
import "@/public/styles/globals.css";
import { Tajawal } from "next/font/google";

const tajwal = Tajawal({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "عبر الحدود للسياحة | إختيار أفضل للسفر و السياحـة حول العالم",
  description:
    "نقدم لك باقة من خدمات السفر والسياحة حول العالم بأفضل الاسعار وخدمة ممتازة على مدار الساعة",
  viewport: "width=device-width, initial-scale=1.0",
  keywords: [
    "السفر ",
    " السياحة",
    " السفر الى الامارات",
    " تأشيرة الامارت",
    "السياحة  فى الامارات",
    " السفر الى السعودية",
    " تأشيرة السعودية",
    "السياحة  فى السعودية",
    "السفر الى امريكا",
    " تأشيرة امريكا",
    "السياحة  فى امريكا",
    " الهجرة الى امريكا",
    " تأشيرة كندا",
    "العمرة ",
    "الحج",
    "العمرة والحج فى السعودية",
    "تأشيرة العمرة والحج",
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent bg-slate-900"
      lang="ar"
    >
      <body className={tajwal.className}>{children}</body>
    </html>
  );
}
