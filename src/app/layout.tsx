import Navigation from '@/_components/Navigation/Navigation'
import './globals.css'
import Footer from '@/_components/Footer/Footer'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='cs'>
            <body className={`antialiased`}>
                <Navigation></Navigation>

                <main>{children}</main>

                <Footer />
            </body>
        </html>
    )
}
