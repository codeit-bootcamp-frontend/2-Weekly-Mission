import LandingHeader from "./Header";
import { Article } from "./styled";
import LandingSection from "./Section";
import { sectionMapping } from "@/lib/mapping/landing";
function HomeLayout() {
  return (
    <>
      <LandingHeader />
      <Article>
        {sectionMapping.map((section, index) => (
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
      </Article>
    </>
  );
}

export default HomeLayout;
