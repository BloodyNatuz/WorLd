import main from './style/main.scss'
import Navbar from './components/client/navbar'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({ children }) {
    return (
      <html lang="fr" className={roboto.className}>
        <body>
          <Navbar></Navbar>
          {children}
        </body>
      </html>
    )
  }