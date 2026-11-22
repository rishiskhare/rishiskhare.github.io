import type { Metadata, Viewport } from "next"
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-plex-mono",
})

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-sans",
})

const tiempos = localFont({
  src: "./fonts/TiemposHeadline-Bold.otf",
  weight: "400",
  display: "swap",
  variable: "--font-tiempos",
})

const description = "Rishi Khare is a researcher and engineer building self-improving AI systems and efficient inference."

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rishiskhare.com"),
  title: "Rishi Khare",
  description,
  openGraph: {
    title: "Rishi Khare",
    description,
    url: "/",
    siteName: "Rishi Khare",
    type: "profile",
  },
  twitter: { card: "summary" },
}

export const viewport: Viewport = {
  themeColor: "#fbf5ef",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable} ${tiempos.variable}`}>
      <body>{children}</body>
    </html>
  )
}
