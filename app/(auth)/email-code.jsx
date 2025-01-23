"use client";

import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import * as React from "react";
import { LucidePersonStanding } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { OTPInput } from "input-otp";
import { Minus } from "lucide-react";

export const EmailCode = ({ setError }) => {
  const router = useRouter();
  const { signUp, isLoaded: signUpLoaded, setActive } = useSignUp();

  const [isLoading, setIsLoading] = React.useState(false);
  const [otp, setOtp] = React.useState("");

  const verifyCode = async (otp) => {
    if (!signUpLoaded || typeof otp !== "string") {
      return null;
    }
    setIsLoading(true);

    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: otp,
      });
      if (result.status === "complete" && result.createdSessionId) {
        await setActive({ session: result.createdSessionId });
        router.push("/");
      }
    } catch (err) {
      setIsLoading(false);
      setError(
        err.errors?.[0]?.longMessage ??
          "خطای ناشناخته، لطفاً با پشتیبانی تماس بگیرید."
      );
    }
  };

  const resendCode = async () => {
    try {
      const resend = signUp.prepareEmailAddressVerification();
      toast({
        loading: "در حال ارسال کد جدید ...",
        success: "کد جدید به ایمیل شما ارسال شد.",
        error: "ارسال کد جدید ناموفق بود. لطفاً دوباره تلاش کنید.",
      });
      await resend;
    } catch (error) {
      setError(error.message || "خطایی رخ داده است.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col max-w-sm mx-auto text-right">
      <h1 className="text-4xl font-semibold">کد امنیتی ارسال شد!</h1>
      <p className="mt-4 text-sm">
        برای ادامه، لطفاً کد تأیید ۶ رقمی ارسال شده به ایمیل خود را وارد کنید.
      </p>

      <p className="mt-2 text-sm">
        کد را دریافت نکردید؟{" "}
        <button type="button" className="underline" onClick={resendCode}>
          ارسال مجدد
        </button>
      </p>

      <form
        className="flex flex-col gap-12 mt-10"
        onSubmit={(e) => {
          e.preventDefault();
          verifyCode(otp);
        }}
      >
        <OTPInput
          data-1p-ignore
          value={otp}
          onChange={setOtp}
          onComplete={() => verifyCode(otp)}
          maxLength={6}
          render={({ slots }) => (
            <div
              className="flex items-center justify-between"
              style={{ direction: "ltr" }}
            >
              {slots.slice(0, 3).map((slot, idx) => (
                <Slot key={idx} {...slot} />
              ))}
              <Minus className="w-6 h-6 text-black/15" />
              {slots.slice(3).map((slot, idx) => (
                <Slot key={idx} {...slot} />
              ))}
            </div>
          )}
        />

        <button
          type="submit"
          className="flex items-center justify-center h-10 gap-2 px-4 text-sm font-semibold text-white bg-black border border-black rounded-lg hover:border-black/30 hover:bg-white hover:text-black"
          disabled={isLoading}
        >
          {isLoading ? (
            <LucidePersonStanding className="w-4 h-4 mr-2 animate-spin" />
          ) : null}
          ادامه
        </button>
      </form>
    </div>
  );
};

const Slot = (props) => (
  <div
    className={cn(
      "relative w-10 h-12 text-[2rem] border border-black/20 rounded-lg text-black font-light text-base",
      "flex items-center justify-center",
      "transition-all duration-300",
      "group-hover:border-black/50 group-focus-within:border-black/50",
      "outline outline-0 outline-black",
      { "outline-1 ": props.isActive }
    )}
  >
    {props.char !== null && <div>{props.char}</div>}
  </div>
);
