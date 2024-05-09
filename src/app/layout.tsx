import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { MenuHamburguer } from "@/components/Partials/MenuHamburguer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast'
import 'swiper/css/bundle'
import "../styles/index.scss"
import DialogPrivacityPolicy from "@/components/Dialogs/DialogPrivacityPolicy";
const inter = Inter({ subsets: ["latin"] });




export const metadata: Metadata = {
  title: {
    default: "AS Consultoria | Home",
    template: "Nortear a gestão da sua empresa para um serviço de excelência.",
  },
  description: "Nortear a gestão da sua empresa para um serviço de excelência.",
  keywords: ["Gestão Empresarial", "AS COnsultoria", "Engenharia de Produção", "Empresarial", "Gestores", "Empreendedores", "Funcionários", "Consultoria"],
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <MenuHamburguer />
        <Toaster
          toastOptions={{
            className: 'bg-zinc-500 text-white',
            style: {
              zIndex: 999999,
            },
          }}
        />
        <DialogPrivacityPolicy />
      </body>
    </html>
  );
}
