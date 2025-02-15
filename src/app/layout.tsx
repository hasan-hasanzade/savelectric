import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const openRegular = localFont({
  src: [
    {
      path: "./fonts/OpenSans-Regular.woff2",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-open-regular",
});

const openMedium = localFont({
  src: [
    {
      path: "./fonts/OpenSans-Medium.woff2",
      weight: "500",
      style: "normal",
    }
  ],
  variable: "--font-open-medium",
});

const openSemiBold = localFont({
  src: [
    {
      path: "./fonts/OpenSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    }
  ],
  variable: "--font-open-semibold",
});

const openBold = localFont({
  src: [
    {
      path: "./fonts/OpenSans-Bold.woff2",
      weight: "200",
      style: "normal",
    }
  ],
  variable: "--font-open-bold",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
         className={`${openRegular.variable} ${openMedium.variable} ${openSemiBold.variable} ${openBold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
