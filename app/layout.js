import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Personal Conversation App',
  description: 'A futuristic conversation app using ElevenLabs AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* FAQ Button */}
        {/* <button className="faq-btn">FAQ</button> */}
        {/* Wave Background */}
        <div className="wave-bg" aria-hidden="true">
          <svg viewBox="0 0 1440 320" width="100%" height="220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#waveGradient)" fillOpacity="1" d="M0,160L60,165.3C120,171,240,181,360,176C480,171,600,149,720,154.7C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            <defs>
              <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fa8bff"/>
                <stop offset="50%" stopColor="#2bd2ff"/>
                <stop offset="100%" stopColor="#43e97b"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        {children}
      </body>
    </html>
  )
}
