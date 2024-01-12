import styled from "styled-components";

export const Cta = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.7rem;
  width: 100%;
  cursor: pointer;
  background-image: linear-gradient(135deg, ${(props) => props.theme.primary} 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.4rem;
  font-weight: 600;

  @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
    height: 5.4rem;
    border-radius: 0.8rem;
    font-size: 1.8rem;
  }
`;

export const CtaShort = styled(Cta)`
  width: 8rem;

  @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
    width: 12.8rem;
  }
`;

export const CtaLong = styled(Cta)`
  width: 20rem;

  @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
    width: 35rem;
  }
`;
