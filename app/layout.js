import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Learn Jakarta - Complete Beginner Guide",
  description:
    "A comprehensive guide to learning Jakarta EE for beginners. Learn setup, tools, and build your first CRUD application.",
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
