import { notFound } from "next/navigation";
import { heroData } from "@/data/servicesData";
import Hero from "@/components/services/HeroComponent/Hero";

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const serviceHeroData = heroData[slug];

  if (!serviceHeroData) {
    notFound();
  }

  return (
    <>
      <Hero data={serviceHeroData} />
      {/* Add other components here later */}
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(heroData).map((slug) => ({
    slug: slug,
  }));
}
