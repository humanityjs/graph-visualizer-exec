import "@/styles/globals.css";

import { Sidebar } from "@/components/Sidebar";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Graph Visualizer",
  description: "Graph Visualizer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-white">
        <div className="flex h-screen items-start justify-start overflow-hidden">
          <Sidebar />
          <main className="h-screen w-full flex-1 overflow-scroll bg-[rgb(250,250,250)] p-1 pt-20 md:p-6 lg:p-12 lg:pt-20 xl:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
