import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">درباره بنیان آتیه جراح</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          با هدف تولید ابزار جراحی عمومی و تخصصی با بالاترین کیفیت و
          استانداردهای بین‌المللی.
        </p>
      </section>

      {/* Company Description */}
      <section className="mb-24 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Image
            width={1000}
            height={1000}
            src="/Robotoperatingonpatient.jpg"
            alt="Bonyan Atieh Jarah"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>درباره ما</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-justify leading-relaxed">
                گروه بنیان آتیه جراح با هدف ایجاد واحد مهندسی تحقیق، پژوهش و
                تولید ابزار جراحی عمومی و تخصصی تشکیل گردید. این شرکت با
                بهره‌گیری از نیروهای متخصص داخلی و خارجی و استفاده از جدیدترین
                متدهای تولید ابزار جراحی در دنیا، محصولات باکیفیت و استانداردهای
                اروپایی تولید می‌کند.
                <br />
                <br />
                محصولات تولیدی این شرکت شامل ابزارهای عمومی، تخصصی، ست‌های
                جراحی، ابزارهای معایناتی، لارنگسکوپ و غیره می‌باشد. همچنین این
                محصولات با گارانتی ۳ ساله بدون قید و شرط (تعویض) ارائه می‌گردند.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold mb-4">
              تماس با ما
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-2">
                <Mail className="text-muted-foreground" />
                <span>bonyanmed@yahoo.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-muted-foreground" />
                <span>۰۲۱-۸۸۳۴۸۹۵۸-۶۰+</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-muted-foreground" />
                <span>تهران-خیابان میرزای شیرازی، پلاک ۸۳، طبقه اول، واحد A۳-</span>
              </div>
              <Link href="/contact">
                <Button>ارتباط با ما</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
