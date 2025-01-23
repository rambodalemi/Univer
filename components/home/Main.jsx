import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WordPullUp } from "../ui/word-pull-up";

const Main = () => {
  return (
    <div>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="inline-block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              بنیان آتیه جراح
              <span className="">
                <WordPullUp
                  className="inline-block text-3xl text-red-600"
                  words="تولید کننده ابزار جراحی در ایران"
                />
              </span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              تهران-خیابان میرزای شیرازی، پلاک ۸۳، طبقه اول، واحد A۳-
            </p>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              ۰۲۱-۸۸۳۴۸۹۵۸-۶۰+
            </p>
            <p className="text-lg text-gray-800 dark:text-neutral-400">
              bonyanmed@yahoo.com
            </p>
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Link
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                مشاهده کاتالوگ ها
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
              <Link
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="/contact"
              >
                تماس با ما
              </Link>
            </div>
          </div>

          <div className="ms-4">
            <Image
              width={1000}
              height={1000}
              className="w-full rounded-md"
              src="/8596.jpg"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
