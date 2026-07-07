import type { Metadata } from "next";
import { Noto_Serif_Bengali, Hind_Siliguri } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto-serif-bengali",
  subsets: ["bengali"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "ঢাকা পোস্ট",
    template: "%s | ঢাকা পোস্ট",
  },
  description:
    "সর্বশেষ সংবাদ, বিশ্লেষণ এবং মতামত — জাতীয়, আন্তর্জাতিক, অর্থনীতি ও প্রযুক্তি।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${notoSerifBengali.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-page text-body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
