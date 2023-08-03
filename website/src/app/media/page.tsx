import React from "react";
import Link from "next/link";

const CV: React.FC = () => {
    const mediaentries = [
        { country: "Portugal", href: "media/portugal" },
        { country: "Norway", href: "media/norway" },
        { country: "Italy", href: "media/italy" },
        { country: "Germany", href: "media/germany" },
      ];

  return (
    <div>
        <div className="space-y-2 py-6">
                  {mediaentries.map((item) => (
                    <Link
                      key={item.country}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
    </div>
  );
};

export default CV;
