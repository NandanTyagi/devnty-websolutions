
import NextUiNavbar from "@/components/ui/NextUiNavbar";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "DEVNTY Websolutions",
  description: "Webdevelopment and design services",
  metadataBase: new URL('https://www.devnty.com/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'se-SV': '/se-SV',
    },
  },
  openGraph: {
    images: '/deventy-og-image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Analytics />
      <NextUiNavbar />
      {children}
      </body>
    </html>
  );
}
