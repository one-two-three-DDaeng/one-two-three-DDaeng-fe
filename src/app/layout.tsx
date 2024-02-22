import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="cursor-pointer">
            <body>{children}</body>
        </html>
    );
}
