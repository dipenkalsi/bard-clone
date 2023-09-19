import './globals.css'
import { Poppins } from 'next/font/google'
import { AuthContextProvider } from './context/AuthContext'

const inter = Poppins({ subsets: ['latin'], weight:'400'})

export const metadata = {
  title: 'Bard Clone',
  description: 'Clone of the AI Chatbot BARD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={inter.className}>{children}</body>
      </AuthContextProvider>
    </html>
  )
}
