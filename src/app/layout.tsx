'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from './Header'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: '클론할때 여기어때',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="wrap bg-white">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}
