import { Play, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex items-center justify-center py-20 lg:py-32 p-10">
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-5">
            <div
              style={{
                transform: "translate(-50%, -50%)",
              }}
              className="absolute left-1/2 top-1/2 -z-10 mx-auto size-[800px] rounded-full border p-16 [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] md:size-[1300px] md:p-32"
            >
              <div className="size-full rounded-full border p-16 md:p-32">
                <div className="size-full rounded-full border"></div>
              </div>
            </div>
            <Link href="/about">
              <span className="mx-auto flex size-16 items-center justify-center rounded-full border md:size-20">
                <Play className="size-6 fill-primary" />
              </span>
            </Link>
            <h1 className="mx-auto max-w-screen-lg text-balance text-center text-3xl font-medium md:text-6xl">
              درباره بنیان آتیه جراح
            </h1>

            <p className="mx-auto max-w-screen-md text-center text-muted-foreground md:text-lg leading-relaxed">
              گروه بنیان آتیه جراح با هدف ایجاد واحد مهندسی تحقیق، پژوهش و تولید
              ابزار جراحی عمومی و تخصصی تشکیل گردید. با بهره‌گیری از مدیران و
              مهندسین متخصص و جدیدترین متدهای تولید در دنیا، محصولات ما با کیفیت
              بالا و استانداردهای اروپایی تولید می‌شوند.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 pb-12 pt-3">
              <Link href="/catalogs">
                <Button size="lg">
                  مشاهده محصولات <Zap className="ml-2 size-4" />
                </Button>
              </Link>
              <div className="text-xs text-muted-foreground">
                بیش از پانصد بیمارستان به محصولات ما اعتماد کرده‌اند
              </div>
            </div>
          </div>
          <Image
            width={1920}
            height={1080}
            src="/05.jpg"
            alt="تصویر جایگزین"
            className="mx-auto h-full max-h-[524px] w-full max-w-screen-lg rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
