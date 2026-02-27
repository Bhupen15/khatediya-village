import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'खतेड़िया गाँव | Khatediya Village',
  description: 'खतेड़िया, देवास, मध्यप्रदेश की आधिकारिक वेबसाइट',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
