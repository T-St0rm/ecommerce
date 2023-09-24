import './styles/globals.css'
import Header from './components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Main from './components/Main'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'test app',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header/>
      <Main/>
      <body className={inter.className}>{children}</body>
    </>
  )
}
