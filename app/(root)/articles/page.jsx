import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Customer stories
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            See how game-changing companies are making the most of every
            engagement with Preline.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            className="group border hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-10">
              <Image
                width={1000}
                height={1000}
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Atlassian powers sales and support at scale with Preline.
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
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
            </p>
          </Link>

          <Link
            className="group border hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-10">
              <Image
                width={1000}
                height={1000}
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Atlassian powers sales and support at scale with Preline.
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
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
            </p>
          </Link>

          <Link
            className="group border hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-10">
              <Image
                width={1000}
                height={1000}
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Atlassian powers sales and support at scale with Preline.
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
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
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
