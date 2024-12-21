import Navigation from '@/_components/Navigation/Navigation'
import './globals.css'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='cs'>
            <body className={`antialiased`}>
                <Navigation></Navigation>

                {children}
            </body>
        </html>
    )
}
