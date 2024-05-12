import SwiperHero from "@/components/Swipers/SwiperHero";
import SectionFaq from "@/components/Sections/SectionFaq";
import { Metadata } from "next";
import { client } from "@/services/prismicClient";
import SectionQuemSomos from "@/components/Sections/SectionQuemSomos";
import SectionNossaEstrutura from "@/components/Sections/SectionNossaEstrutura";
import SectionValores from "@/components/Sections/SectionValores";
import SectionPorqueContratar from "@/components/Sections/SectionPorqueContratar";
import SectionCEO from "@/components/Sections/SectionCEO";
import SectionInvista from "@/components/Sections/SectionInvista";


export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      images: [
        {
          url: "https://as-consultoria.vercel.app/seo.png",
        },
      ],
    },
  };
}

export default async function Home() {
  
  return (
    <main> 
      <SwiperHero />
      <SectionQuemSomos />
      <SectionNossaEstrutura />
      <SectionValores />
      <SectionPorqueContratar />
      <SectionCEO />
      <SectionInvista />
    </main>
  );
}
