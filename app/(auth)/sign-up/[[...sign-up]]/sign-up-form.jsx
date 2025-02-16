"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useSignUp } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { EmailCode } from "../../email-code";
import Link from "next/link";

const formSchema = z.object({
  username: z
    .string()
    .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد.")
    .max(15, "نام کاربری نباید بیشتر از ۱۵ کاراکتر باشد."),
  email: z.string().email("لطفاً یک ایمیل معتبر وارد کنید."),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد."),
});

export default function SignUpForm() {
  const { isLoaded, signUp } = useSignUp();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [otpStep, setOtpStep] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    if (!isLoaded) return;
    setIsSubmitting(true);

    try {
      await signUp.create({
        emailAddress: values.email,
        password: values.password,
        username: values.username,
      });
      await signUp.prepareEmailAddressVerification();
      setOtpStep(true);
      toast({
        title: "ثبت‌نام موفقیت‌آمیز!",
        description: "لطفاً ایمیل خود را برای تأیید بررسی کنید.",
      });
    } catch (err) {
      setError(err.errors?.[0]?.message || "مشکلی پیش آمده است.");
      toast({
        title: "ثبت‌نام ناموفق",
        description: err.errors?.[0]?.message || "مشکلی پیش آمده است.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (otpStep) {
    return <EmailCode setError={setError} />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-6">
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 text-gray-500"
            >
              <path d="M12.152..." fill="currentColor" />
            </svg>
          </div>
          <h1 className="text-xl font-bold">ثبت‌نام در Univer</h1>
          <p className="text-center text-sm text-gray-500">
            حساب کاربری دارید؟{" "}
            <Link href="/sign-in" className="underline text-primary">
              وارد شوید
            </Link>
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام کاربری</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="نام کاربری خود را وارد کنید"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
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

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رمز عبور</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="رمز عبور خود را وارد کنید"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "در حال ثبت‌نام..." : "ثبت‌نام"}
            </Button>
          </form>
        </Form>

        <div className="relative mt-6 text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-white px-2 text-muted-foreground">
            یا ادامه دهید با
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <Button variant="outline" className="w-full">
            {/* Apple Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2">
              <path d="M15.53..." fill="currentColor" />
            </svg>
            Apple
          </Button>
          <Button variant="outline" className="w-full">
            {/* Google Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2">
              <path d="M12.48..." fill="currentColor" />
            </svg>
            Google
          </Button>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          با کلیک روی ادامه، شما با{" "}
          <Link href="#" className="underline text-primary">
            شرایط استفاده
          </Link>{" "}
          و{" "}
          <Link href="#" className="underline text-primary">
            سیاست حفظ حریم خصوصی
          </Link>{" "}
          ما موافقت می‌کنید.
        </p>
      </div>
    </div>
  );
}
