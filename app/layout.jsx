import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import TanstackProvider from "@/providers/TanstackProvider";
import { isAbsoluteUrl } from "next/dist/shared/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export const metadata = {
  title: {
    default: "Bonyane Atieh Jarah | شرکت بنیان آتیه جراح",
    template: "%s | purplegm",
  },
  openGraph: {
    title: "شرکت بنیان آتیه جراح",
    description: "Bonyane Atieh Jarah",
    url: "https://universurgical.ir",
    siteName: "universurgical",
  },
  images: [
    {
      url: "/univerp.jpg",
      width: 100,
      height: 100,
    },
  ],
  generator: "Univer",
  applicationName: "Univer",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Univer",
    "Universurgical",
    "یونیور",
    "شرکت بنیان آتیه جراح",
    "شرکت ابزار جراحی",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Rambod", url: "https://rambodalemi.com" }],
  creator: "Rambod Alemi",
  publisher: "Rambod Alemi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    shortcut: "/univerp.jpg",
  },
  metadataBase: new URL("https://universurgical.ir"),
  manifest: isAbsoluteUrl("/site.webmanifest"),
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider dynamic>
      <html
        dir="rtl"
        lang="fa"
        className={`scroll-smooth antialiased ${vazirmatn.className}`}
      >
        <body>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
