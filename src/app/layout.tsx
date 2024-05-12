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
  title: "AS Consultoria",
  description: "Viemos com o intuído de nortear gestores, empreendedores, empresários, funcionários, com a visão de processos de um engenheiro de produção, na gestão de sua empresa.",
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://as-consultoria.vercel.app/',
    siteName: 'https://as-consultoria.vercel.app/',
    title: 'Vaay',
    description: 'Viemos com o intuído de nortear gestores, empreendedores, empresários, funcionários, com a visão de processos de um engenheiro de produção, na gestão de sua empresa.',
    images: [
      {
        url: '/seo.png',
        width: 1200,
        height: 630,
        alt: 'AS Consultoria',
      },
    ],
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
        <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Header />
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
