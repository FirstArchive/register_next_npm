import { Inter } from "next/font/google";
import { Providers } from "./providers";
import MyNav from "./components/MyNav";
import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "growgrass | ลงทะเบียน",
  description: "ลงทะเบียนรับประกันหญ้าเทียม growgrass",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <MyNav/>
        <div className="min-h-screen p-5 bg-slate-300">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
