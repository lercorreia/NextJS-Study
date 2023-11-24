import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Ticket App",
    description: "Generated by Luiz Correia",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <div className="flex flex-col h-screen max-h-screen">
                    <Nav />
                    <div className="flex-grow overflow-y-auto bg-page text-white">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
