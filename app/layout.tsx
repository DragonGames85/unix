import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Background from './components/background';
import Header from './components/header';
import './globals.css';

const roboto = Roboto({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Unix Ram',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className={roboto.className}>
                <Header />
                {children}
                <Background />
            </body>
        </html>
    );
}
