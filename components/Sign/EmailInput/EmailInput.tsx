import React from 'react';

import Input from '@/components/Sign/Input/Input';

import { validation } from '@/lib/formTypes';
import { regExp } from '@/lib/constants.js';

export default function EmailInput() {
  const emailValidation: validation = {
    required: '이메일을 입력해주세요.',
    pattern: {
      value: regExp.email,
      message: '올바른 이메일 주소가 아닙니다.',
    },
  };
  return (
    <Input label='이메일' id='email' type='email' placeholder='이메일을 입력해주세요.' validation={emailValidation} />
  );
}
