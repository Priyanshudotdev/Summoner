import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Summoner Studio - Co-Creative Marketing Studio",
  description: "A Co-Creative Marketing Studio based in Los Angeles, CA",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased bg-black text-white overflow-x-hidden">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const cursor = document.createElement('div');
                cursor.className = 'custom-cursor';
                document.body.appendChild(cursor);
                
                document.addEventListener('mousemove', function(e) {
                  cursor.style.left = e.clientX - 10 + 'px';
                  cursor.style.top = e.clientY - 10 + 'px';
                });
                
                document.addEventListener('mouseenter', function() {
                  cursor.style.opacity = '1';
                });
                
                document.addEventListener('mouseleave', function() {
                  cursor.style.opacity = '0';
                });
              });
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
