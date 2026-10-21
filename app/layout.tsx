import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Project Portfolio - Do Tan Luc",
  description: "Personal portfolio website showcasing skills, certifications, experience, and projects as a Business Analyst and Project Manager.",
  openGraph: {
    title: "Project Portfolio - Do Tan Luc",
    description: "Personal portfolio website showcasing skills, certifications, experience, and projects as a Business Analyst and Project Manager.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
