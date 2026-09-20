'use client';
import Footer from '../../pages/Footer'
import Header from '../../pages/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <head>
           <title>Otecdealings.</title>
           <meta name='description' content="Let bring your idea's to live" />
         </head>
       <body className={inter.className} style={{width:"100%"}}>
          <Header/> 
          {children}
       </body>
    </html>
  )
}
