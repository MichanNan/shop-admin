import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "../providers/session-provider";
import Container from "@/components/Container";
import Navbar from "@/components/navbar/Navbar";
import ToastProvider from "@/providers/hot-toast-provider";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "shop admin",
  description: "Admin",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={lato.className}>
        <SessionProvider session={session}>
          <ToastProvider />
          <Container>
            <Navbar />
            {children}
          </Container>
        </SessionProvider>
      </body>
    </html>
  );
}
