"use client";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [{ name: "Imprint", href: "imprint" }];

  const socials = [
    {
      pic: "/github.png",
      href: "https://github.com/Melvin2306",
    },
    {
      pic: "/linkedin.png",
      href: "https://www.linkedin.com/in/melvin-rinkleff/",
    },
    {
      pic: "/mail.png",
      href: "mailto:moin@melvinrinkleff.de",
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1"></div>
      <footer
        className="flex items-center justify-between pb-3"
        aria-label="Footer"
      >
        <p className="text-sm font-semibold leading-6 text-gray-900">
          © {currentYear} Melvin Rinkleff
        </p>
        <div>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex justify-end items-center gap-x-4">
          {socials.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <Image src={item.pic} alt={item.href} height={25} width={25} />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
