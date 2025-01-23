import Image from "next/image";
import Link from "next/link";
import React from "react";

const Marketing = () => {
  return (
    <div>
      <div className="bg-neutral-100 mt-10">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-black font-semibold text-2xl md:text-4xl md:leading-tight">
              رویکرد ما
            </h2>
            <p className="mt-1 text-neutral-400">
              به شرکت بنیان آتیه جراح خوش امدید، جایی که دقت با نواوری در دنیای
              ابزارهای جراحی مطابقت دارد. ما به ارائه ابزارهای پیشرفته ای اختصاص
              داده شده ایم که جراحان را قادر می سازد تا در صنایع دستی خود پیشرفت
              کنند و بهترین نتایج ممکن را برای بیماران تضمین کنند.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <Image
                width={1000}
                height={1000}
                className="w-full object-cover rounded-xl"
                src="/07.png"
                alt="Image Description"
              />
            </div>
            <div>
              <div className="mb-4">
                <h3 className="text-red-600 text-xs font-medium uppercase">
                  مرحله1
                </h3>
              </div>
              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-red-600 font-semibold text-xs uppercase rounded-full">
                      1
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-black">
                      گروه بنیان آتیه جراح با هدف ایجاد واحد مهندسی تحقیق، پژوهش
                      وتولید ابزار جراحی عمومی و تخصصی، بابهره گیری از مدیران و
                      مهندسین از گروههای مختلف تجهیزات پزشکی داخل و خارج کشور
                      تشکیل گردید. تشکیل چنین جوینت ونچر توانمندی در راستای
                      تقویت و به روز رسانی تولید ابزار جراحی و لوازم پزشکی در
                      کشور الزامی به نظر می رسید.
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-red-600 font-semibold text-xs uppercase rounded-full">
                      2
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-black">
                      بهره گیری از نیروهای بسیارکار آزموده و متخصص داخلی و خارجی
                      و نیز بکارگیری جدیدترین متدهای تولید ابزار جراحی در دنیا،
                      باعث ارتقاء سطح کیفی محصولات تولیدی این شرکت گردید و اکنون
                      با افتخار ابزار با مارک ثبت شده Univer پس از عرضه در بیش
                      از پانصد بیمارستان درکشور و تائید توسط متخصصین وجراحان
                      محترم، مفتخر به دریافت نشان بین المللی ISO13485 ،ISO9001 ،
                      CE مارک اروپا وتائیدیه کیفی از اداره کل تجهیزات پزشکی
                      گردید.از برنامه های آتی گروه بنیان آتیه جراح، تولید ابزار
                      لاپاروسکوپی، سیستوسکوپی و دندانپزشکی است که با مشارکت
                      شرکای اروپائی می توان در چشم انداز کوتاه مدت ترسیم نمود.
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-red-600 font-semibold text-xs uppercase rounded-full">
                      3
                    </span>
                  </div>
                </div>
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-black">
                      محصولات تولیدی این گروه شامل ابزارهای عمومی، تخصصی، ستهای
                      جراحی ، ابزارهای معایناتی ، لارنگسکوپ و غیره می باشد.
                      محصولات فوق با مارک Univer و با استفاده از بهترین نوع
                      استنلس استیل مارتنزیتی ( فورج آلمان، ژاپن و فرانسه )، زیر
                      نظر متخصصین خبره داخلی و خارجی و با بهره گیری از دقیق ترین
                      روشهای کوالیتی کنترل، بر اساس استاندارهای اروپائی تولید می
                      گردد. خط مشی مشتری مداری گروه بنیان آتیه جراح در راستای خط
                      مشی مشتری گرائی و جهت اطمینان خاطر مشتریان از کیفیت بالای
                      این محصول ، گارانتی 3 ساله معتبر بدون قید و شرط ( تعویض)
                      را ارائه می نماید، تا مصرف کننده با آرامش و اطمینان کامل
                      از محصولات Univer استفاده نماید. کلیه اطلاعات مربوط به
                      تولیدات این شرکت با کد و تصویر هر قطعه در سایت قابل دسترسی
                      می باشد.
                    </span>
                  </p>
                </div>
              </div>

              <Link
                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-red-600 font-medium text-sm text-white rounded-full focus:outline-none"
                href="/contact"
              >
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                    d="M14.05 2a9 9 0 0 1 8 7.94"
                  ></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                    d="M14.05 6A5 5 0 0 1 18 10"
                  ></path>
                </svg>
                تماس با ما
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
