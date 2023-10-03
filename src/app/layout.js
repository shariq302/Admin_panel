
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './provider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Readyapp',
  description: 'Readyapp',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
          <ToastContainer 
          autoClose={2000}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
          theme="light"
          />
          {children}
        </Providers>
      </body>
      
    </html>
  )
}
