import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "DailyDish - Fresh Homemade Meals Daily",
  description:
    "DailyDish is a community-driven platform for fresh, homemade meals. Set your daily meal plans and enjoy healthy, home-cooked food every day.",
  keywords: [
    "Homemade food Bangladesh",
    "Daily meal service",
    "Healthy home cooked food",
    "DailyDish meals",
    "Homemade catering Jashore",
    "Healthy tiffin service",
    "Ghorowa khabar",
    "Daily food delivery",
  ],
  authors: [{ name: "Mahfuz Ahmed" }],
  icons: {
    icon: [
      { url: "/dailyDish_faveicon.jpg", sizes: "32x32", type:"dailyDish_faveicon.jpg" },
      // Added for PWA/Better resolution
    ],
    apple: "/logo.png", // Apple devices-er jonno
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Apni chaile ekhane <Navbar /> component add korte paren */}
        <main>{children}</main>
        {/* Apni chaile ekhane <Footer /> component add korte paren */}
      </body>
    </html>
  );
}