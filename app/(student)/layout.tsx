import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../Elements/student/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yotor Academy",
  description:
    "Yotor Academy is ethiopian tech company aiming to make a tech worm teen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar isToogled={false} />
        <main>{children}</main>
      </body>
    </html>
  );
}
