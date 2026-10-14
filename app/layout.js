import { BotIdClient } from "botid/client";
import localFont from "next/font/local";
import NextUiNavbar from "@/components/ui/NextUiNavbar";
import SiteFooter from "@/components/SiteFooter";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const poppins = localFont({
  src: [
    { path: "../public/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});
export const metadata = {
  title: { default: "DEVNTY — Websites, web apps & practical AI", template: "%s | DEVNTY" },
  description: "Websites, web applications and practical AI features. DEVNTY helps turn a clear idea into a useful digital product.",
  metadataBase: new URL("https://www.devnty.com"),
  openGraph: { siteName: "DEVNTY Websolutions", type: "website", images: [{ url: "/devnty-og-image.png" }] },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head><BotIdClient protect={[{ path: "/api/v1/form-submit", method: "POST", advancedOptions: { checkLevel: "basic" } }]} /></head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <NextUiNavbar />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
