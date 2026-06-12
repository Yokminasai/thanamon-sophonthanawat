import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import {
  organizationSchema,
  personSchema,
  profilePageSchema,
  websiteSchema,
} from "@/lib/schema";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.variable} min-h-screen antialiased`}>
        <JsonLd
          data={[
            personSchema(),
            organizationSchema(),
            websiteSchema(),
            profilePageSchema(),
          ]}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
