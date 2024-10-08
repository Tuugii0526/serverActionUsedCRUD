import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple project",
  description: "Step by step",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
         <div className="w-full h-screen bg-slate-200">
        <div className="w-full h-screen min-w-[240px] max-w-[1240px] m-auto bg-white">
          {children}
        </div>
        </div>
      </body>
    </html>
  );
}
