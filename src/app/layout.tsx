import "./globals.css"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AITD Student Resource Hub",
  description: "Upload and access notes assignments for BTECH students",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <span className="text-xl font-bold text-gray-800">AITD Resource Hub</span>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                      href="/"
                      className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Home
                      </Link>
                    <Link
                      href="/upload"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Upload
                    </Link>
                    <Link
                      href="/browse"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Browse
                    </Link>
                    <Link
                      href="/verify"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Verify
                    </Link>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <Button asChild variant="ghost">
                    <Link href="/login">Login</Link>
                  </Button>
                </div>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  )
}

