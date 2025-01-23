"use client";

import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { LucidePersonStanding } from "lucide-react";
import Link from "next/link";

// Zod Schema for Validation
const formSchema = z.object({
  email: z.string().email("لطفاً یک ایمیل معتبر وارد کنید."),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد."),
});

const SignInForm = () => {
  const { signIn, isLoaded: signInLoaded, setActive } = useSignIn();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    if (!signInLoaded) return;

    setIsSubmitting(true);

    try {
      const result = await signIn.create({
        identifier: values.email,
        password: values.password,
      });

      if (result.status === "complete" && result.createdSessionId) {
        await setActive({ session: result.createdSessionId });
        toast({
          title: "ورود موفقیت‌آمیز!",
          description: "شما با موفقیت وارد شدید.",
        });
        router.push("/panel");
      } else {
        throw new Error("Sign-in process incomplete.");
      }
    } catch (err) {
      setIsSubmitting(false);
      toast({
        title: "ورود ناموفق",
        description: err.errors?.[0]?.longMessage || "مشکلی پیش آمده است.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-6">
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
            <LucidePersonStanding className="w-6 h-6 text-gray-500" />
          </div>
          <h1 className="text-xl font-bold">ورود به سیستم</h1>
          <p className="text-center text-sm text-gray-500">
            حساب کاربری ندارید؟{" "}
            <Link href="/sign-up" className="underline text-primary">
              ثبت‌نام کنید
            </Link>
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ایمیل</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="example@domain.com" {...field} />
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
                      placeholder="رمز عبور خود را وارد کنید."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <LucidePersonStanding className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                "ورود"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;
