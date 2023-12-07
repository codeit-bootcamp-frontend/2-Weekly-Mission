import { styled } from "styled-components";

// 중복되는것 나중에 추가할것 .   font-family: Pretendard;

// 프로필 너비잡이
export const Container = styled.div`
  display: flex;
  padding: 60px 320px 90px 320px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: var(--linkbrary-bg, #f0f6ff);
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  padding: 16px 20px;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: var(--linkbrary-white, #fff);
`;

export const Button = styled.button`
  width: 80px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  color: var(--grey-light, #f5f5f5);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const InputCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Input = styled.input`
  border: none;
  color: var(--linkbrary-gray-60, #9fa6b2);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
