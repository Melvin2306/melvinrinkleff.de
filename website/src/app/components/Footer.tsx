"use client";

const navigation = [{ name: "Imprint", href: "imprint" }];

export default function Footer() {
  return (
    <footer
      className="bg-gray-800flex items-center justify-between p-6 lg:px-8"
      aria-label="Footer"
    >
      <div className="flex lg:gap-x-12">
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
    </footer>
  );
}
