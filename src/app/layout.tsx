'use client';

import './globals.css';
import { useRouter } from 'next/navigation';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();

    return (
        <html
            lang="en"
            onClick={() => router.push('/list')}
            className="cursor-pointer"
        >
            <body>{children}</body>
        </html>
    );
}
