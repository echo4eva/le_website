import { REM } from 'next/font/google';
import '../styles/globals.css';

const font = REM({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
    return (
        <main className = {font.className}>
            <Component {...pageProps} />
        </main>
    );
  }