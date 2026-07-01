import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  metadataBase: new URL("https://chinmayakumardas.com"),

  title: {
    default:
      "Chinmaya Kumar Das | AI Engineer • Full Stack Developer • Product Engineer",
    template: "%s | Chinmaya Kumar Das",
  },

  description:
    "Chinmaya Kumar Das is an AI Engineer and Full Stack Developer specializing in AI-powered applications, modern SaaS products, scalable web platforms, automation systems, cloud-native solutions, and exceptional user experiences. Available for full-time opportunities, freelance projects, startup consulting, and technical collaborations worldwide.",

  applicationName: "Chinmaya Kumar Das",

  authors: [
    {
      name: "Chinmaya Kumar Das",
      url: "https://chinmayakumardas.com",
    },
  ],

  creator: "Chinmaya Kumar Das",
  publisher: "Chinmaya Kumar Das",

  keywords: [
    "Chinmaya Kumar Das",
    "AI Engineer",
    "Software Engineer",
    "Full Stack Developer",
    "Product Engineer",
    "SaaS Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "NestJS",
    "Python",
    "FastAPI",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Docker",
    "AWS",
    "Firebase",
    "Supabase",
    "OpenAI",
    "Claude AI",
    "Gemini AI",
    "Generative AI",
    "LLM",
    "AI Agents",
    "LangChain",
    "RAG",
    "Automation",
    "REST API",
    "GraphQL",
    "Cloud",
    "Portfolio",
    "Freelancer",
    "Remote Developer",
    "Technical Consultant",
    "Web Developer",
  ],

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  verification: {
    google: "-E3d5lcWSRoF44sPMxEbcZJKgd468wBlpVquntc7dyg",
  },

  alternates: {
    canonical: "https://chinmayakumardas.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chinmayakumardas.com",
    siteName: "Chinmaya Kumar Das",
    title:
      "Chinmaya Kumar Das | AI Engineer • Full Stack Developer • Product Engineer",
    description:
      "Building AI-powered applications, scalable SaaS products, automation systems, cloud-native platforms, and modern digital experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chinmaya Kumar Das",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@chinmayakmdas",
    title:
      "Chinmaya Kumar Das | AI Engineer • Full Stack Developer • Product Engineer",
    description:
      "AI Engineer • Full Stack Developer • SaaS Builder • Product Engineer",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <GoogleAnalytics gaId="G-5DJS4H3VT4" />
      </body>
    </html>
  );
}