import Image from "next/image";
import Link from "next/link";

export default function Example() {
  return (
    <div
      className="relative isolate px-6"
      style={{ lineHeight: "2", fontSize: "1.5rem" }}
    >
      <div className="mx-auto max-w-7xl mt-10 mb-20 flex">
        <div className="w-2/5">
          <Image
            src="/melvinBig.jpg"
            alt="Picture of Melvin Rinkleff"
            height={800}
            width={800}
            style={{
              borderRadius: "20%",
            }}
            placeholder="blur"
            blurDataURL="/melvinBigBlur.jpg"
          />
        </div>
        <div className="w-4/5 pt-16 px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Moooin, I`m <span className="text-indigo-700">Melvin</span>
            </h1>
            <p className="mt-6 text-xl leading-10 text-gray-600 text-right">
              Welcome to my personal website. I`m a software engineer based in
              Berlin, Germany.
              <br />
              I`m currently studying Software Engineering at{" "}
              <Link href="https://code.berlin/" className="hover:underline">
                CODE University of Applied Sciences.
              </Link>
              <br />I also have a Bachelor`s degree in Business Administration
              from{" "}
              <Link
                href="https://www.hsw-hameln.de"
                className="hover:underline"
              >
                Hochschule Weserbergland
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
