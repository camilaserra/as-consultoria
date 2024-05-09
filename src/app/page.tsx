import SwiperHero from "@/components/Swipers/SwiperHero";
import SectionFaq from "@/components/Sections/SectionFaq";
import { Metadata } from "next";
import { client } from "@/services/prismicClient";
import SectionQuemSomos from "@/components/Sections/SectionQuemSomos";


export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      images: [
        {
          url: "https://boilerplate-prismic-next14.vercel.app/seo.png",
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
      <SectionFaq />
    </main>
  );
}
