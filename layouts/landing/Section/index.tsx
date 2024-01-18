import React from "react";
import Image from "next/image";
import * as S from "./styled";

interface TitleType {
  prev: string;
  gradient: string;
  suff: string;
}

interface SectionType {
  odd?: boolean;
}

interface SectionProps extends SectionType {
  title: TitleType;
  description: string;
  gradient: string;
  src: string;
  alt: string;
}

function LandingSection({ odd, title, description, gradient, src, alt }: SectionProps) {
  return (
    <S.StyledSection $odd={odd}>
      <S.Title>
        {title.prev && <span>{title.prev}</span>}
        <S.TitleGradient $gradient={gradient}>{title.gradient}</S.TitleGradient>
        {title.suff}
      </S.Title>
      <S.Description>{description}</S.Description>
      <S.ImageContainer>
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </S.ImageContainer>
    </S.StyledSection>
  );
}

export default LandingSection;
