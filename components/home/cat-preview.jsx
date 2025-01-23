import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { NeonGradientCard } from "../ui/neon-gradient-card";
import Link from "next/link";

const CatPre = () => {
  return (
    <section className="flex items-center justify-center py-20 lg:py-32 p-10">
      <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
        {/* Left Content */}
        <div className="flex flex-col gap-7 lg:w-2/3">
          <div className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <p>کاتالوگ ابزارهای جراحی ما</p>
            <p className="text-red-600">با استانداردهای اروپایی و کیفیت بالا</p>
          </div>
          <p className="text-base text-muted-foreground md:text-lg lg:text-xl leading-relaxed">
            گروه بنیان آتیه جراح با هدف ارائه بهترین ابزارهای جراحی عمومی و
            تخصصی در کشور، محصولات باکیفیتی را با نشان تجاری Univer تولید و عرضه
            می‌نماید. این محصولات با بهره‌گیری از استانداردهای اروپایی و بهترین
            نوع استنلس استیل تولید شده و در بیش از پانصد بیمارستان کشور به کار
            گرفته شده‌اند. برای مشاهده جزئیات محصولات، می‌توانید کاتالوگ ما را
            دانلود کنید.
          </p>
          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:gap-7">
            <Button className="group flex h-fit w-fit items-center rounded-full p-1.5">
              <div className="flex size-10 items-center justify-center rounded-full bg-white text-black">
                <ArrowUpRight className="size-4 transition-all duration-300 group-hover:rotate-45" />
              </div>
              <span className="whitespace-nowrap pl-4 pr-6 text-sm lg:pl-6 lg:pr-8 lg:text-base">
                تماس با ما
              </span>
            </Button>
            <Button asChild variant="link" className="underline">
              <Link href="/catalogs" target="_blank">
                مشاهده کاتالوگ ما
              </Link>
            </Button>
          </div>
        </div>
        {/* Right Content */}

        <div className="relative z-10">
          <div className="absolute !left-1/2 top-2.5 !h-[92%] !w-[69%] -translate-x-[52%] overflow-hidden rounded-[35px]">
            <Image
              width={450}
              height={889}
              src="/image.png"
              alt="Catalog Preview"
              className="size-full object-cover h-full"
            />
          </div>

          <Image
            className="relative z-10 fade-in"
            src="https://shadcnblocks.com/images/block/mockups/phone-2.png"
            width={450}
            height={889}
            alt="Phone Mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default CatPre;
