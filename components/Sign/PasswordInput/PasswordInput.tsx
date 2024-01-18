import React from 'react';

import Input from '@/components/Sign/Input/Input';

import { validation } from '@/lib/formTypes';
import { regExp } from '@/lib/constants.js';

export default function PasswordInput() {
  const passwordValidation: validation = {
    required: '비밀번호를 입력해주세요.',
    pattern: {
      value: regExp.password,
      message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    },
  };
  return (
    <Input
      label='비밀번호'
      id='password'
      type='password'
      placeholder='영문, 숫자를 조합해 8자 이상 입력해 주세요.'
      validation={passwordValidation}
    />
  );
}
