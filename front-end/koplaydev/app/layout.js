import { Inter } from "next/font/google";
import "./globals.scss";
import Headers from "./Headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ko-play",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Headers />
        {children}
      </body>
    </html>
  );
}