"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد."),
  subject: z.string().min(5, "موضوع باید حداقل ۵ کاراکتر باشد."),
  company: z.string().optional(),
  phoneNumber: z
    .string()
    .regex(/^\+?[0-9]\d{1,14}$/, "شماره تلفن معتبر وارد کنید."),
  email: z.string().email("لطفاً یک ایمیل معتبر وارد کنید."),
  message: z.string().min(10, "پیام باید حداقل ۱۰ کاراکتر باشد."),
});

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      company: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: "فرم ارسال شد!",
          description: "به زودی با شما تماس خواهیم گرفت.",
        });
        form.reset();
      } else {
        const errorData = await response.json();
        toast({
          title: "ارسال ناموفق",
          description: errorData.error || "مشکلی پیش آمده است.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "ارسال ناموفق",
        description: "لطفاً بعداً دوباره تلاش کنید.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 rounded-lg sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">تماس با ما</h1>
          <p className="text-gray-600 text-lg">
            اگر سوالی دارید یا به اطلاعات بیشتری نیاز دارید، لطفاً با ما تماس
            بگیرید.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
          <div className="space-y-6 bg-white p-6 rounded-lg shadow-md max-h-fit">
            <h2 className="text-xl font-semibold text-gray-800">
              اطلاعات تماس
            </h2>
            <div className="flex items-center gap-4">
              <Mail className="text-primary w-6 h-6" />
              <span>bonyanmed@yahoo.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-primary w-6 h-6" />
              <span>۰۲۱-۸۸۳۴۸۹۵۸-۶۰+</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-primary w-6 h-6" />
              <span>تهران-خیابان میرزای شیرازی، پلاک ۸۳، طبقه اول، واحد A۳-</span>
            </div>
          </div>

          <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>نام</FormLabel>
                      <FormControl>
                        <Input placeholder="نام شما" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>موضوع</FormLabel>
                      <FormControl>
                        <Input placeholder="موضوع پیام" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>شرکت (اختیاری)</FormLabel>
                      <FormControl>
                        <Input placeholder="نام شرکت" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>شماره تلفن</FormLabel>
                      <FormControl>
                        <Input placeholder="شماره تلفن شما" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>ایمیل</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@domain.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>پیام</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="متن پیام شما"
                          className="resize-none"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="col-span-2">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
