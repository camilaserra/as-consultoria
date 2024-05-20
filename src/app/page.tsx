import SwiperHero from "@/components/Swipers/SwiperHero";
import { Metadata } from "next";
import { client } from "@/services/prismicClient";
import SectionQuemSomos from "@/components/Sections/SectionQuemSomos";
import SectionNossaEstrutura from "@/components/Sections/SectionNossaEstrutura";
import SectionValores from "@/components/Sections/SectionValores";
import SectionPorqueContratar from "@/components/Sections/SectionPorqueContratar";
import SectionCEO from "@/components/Sections/SectionCEO";
import SectionInvista from "@/components/Sections/SectionInvista";
export const fetchCache = 'force-no-store'


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
  const banners = await client.getSingle('banners')
  const about = await client.getSingle('quem_somos')
  const contact = await client.getSingle('contatos_e_redes_sociais')
  const info = await client.getSingle('nossa_estrutura')
  const values = await client.getSingle('missao_visao_valores')
  const why = await client.getSingle('porque_contratar')
  const ceo = await client.getSingle('sobre_a_ceo')
  const invista = await client.getSingle('invista_na_excelencia')


  return (
    <main> 
      <SwiperHero banners={banners} />
      <SectionQuemSomos about={about} contact={contact} />
      <SectionNossaEstrutura info={info} contact={contact} />
      <SectionValores values={values} contact={contact} />
      <SectionPorqueContratar why={why} />
      <SectionCEO ceo={ceo} />
      <SectionInvista invista={invista} contact={contact} />
    </main>
  );
}
