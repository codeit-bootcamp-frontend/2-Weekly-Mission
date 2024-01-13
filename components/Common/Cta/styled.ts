import styled, { css } from "styled-components";

export const Cta = styled.button<{ $type?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.7rem;
  width: 100%;
  cursor: pointer;
  background-image: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.4rem;
  font-weight: 600;

  @media (min-width: ${({ theme }) => theme.deviceSizes.mobile}) {
    height: 5.4rem;
    border-radius: 0.8rem;
    font-size: 1.8rem;
  }

  ${({ $type }) =>
    $type === "short" &&
    css`
      width: 8rem;
      @media (min-width: ${({ theme }) => theme.deviceSizes.mobile}) {
        width: 12.8rem;
      }
    `}

  ${({ $type }) =>
    $type === "long" &&
    css`
      width: 20rem;
      @media (min-width: ${({ theme }) => theme.deviceSizes.mobile}) {
        width: 35rem;
      }
    `}
`;
