import Link from "next/link";
import React from "react";

const MiniCards = () => {
  return (
    <div>
      <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-6">
          <Link
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
            href="#"
          >
            <div className="p-4 md:p-5">
              <div className="flex">
                <svg
                  className="mt-1 flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>

                <div className="grow ms-5">
                  <h3 className="group-hover:text-red-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                    کاتالوگ ها
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    کاتالوگ ما را به راحتی دانلود کنید.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
            href="#"
          >
            <div className="p-4 md:p-5">
              <div className="flex">
                <svg
                  className="mt-1 flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>

                <div className="grow ms-5">
                  <h3 className="group-hover:text-red-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                    به ما ایمیل بزنید
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    <span className="text-red-600 decoration-2 group-hover:underline font-medium dark:text-red-500">
                      bonyanmed@yahoo.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniCards;
