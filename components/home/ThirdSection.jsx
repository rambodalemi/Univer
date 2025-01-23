import Image from "next/image";
import React from "react";

const ThirdSection = () => {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
          <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
            ابزارها
          </h2>
          <p className="mt-3 text-gray-800 dark:text-neutral-200">
            شرکت تجهیزات پزشکی بنیان آتیه جراح
          </p>
          <div className="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
            <div className="hidden md:block col-span-4 md:col-span-3">
              <Image
                width={1000}
                height={1000}
                className="rounded-xl"
                src="/04.JPG"
                alt="Image Description"
              />
            </div>

            <div className="col-span-4 md:col-span-3">
              <Image
                width={1000}
                height={1000}
                className="rounded-xl"
                src="/03.JPG"
                alt="Image Description"
              />
            </div>

            <div className="col-span-4 md:col-span-3">
              <Image
                width={1000}
                height={1000}
                className="rounded-xl"
                src="/02.JPG"
                alt="Image Description"
              />
            </div>

            <div className="col-span-4 md:col-span-3">
              <Image
                width={1000}
                height={1000}
                className="rounded-xl"
                src="/06.jpg"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
