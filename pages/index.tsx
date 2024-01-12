import Head from "next/head";
import LandingSection from "@/components/LandingLayout/Section";
import LandingLayout from "@/components/LandingLayout";
import { sectionData } from "@/lib/data/landing";

function HomePage() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LandingLayout>
        {sectionData.map((section, index) => (
          <LandingSection
            key={index}
            odd={section.odd}
            title={section.title}
            description={section.description}
            gradient={section.gradient}
            src={section.src}
            alt={section.alt}
          />
        ))}
      </LandingLayout>
    </>
  );
}

export default HomePage;
