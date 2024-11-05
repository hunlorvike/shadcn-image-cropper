import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Image cropper",
  description: "Shadcn uploader & image cropper",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" flex min-h-screen flex-col absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <main className="flex-1 container fixed left-1/2 top-1/2 flex w-screen -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center px-0 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}