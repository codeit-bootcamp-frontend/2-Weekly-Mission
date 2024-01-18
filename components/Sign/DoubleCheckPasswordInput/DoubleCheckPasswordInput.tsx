import React from 'react';
import { useFormContext } from 'react-hook-form';

import Input from '@/components/Sign/Input/Input';

import { FormValues, validation } from '@/lib/formTypes';
import { regExp } from '@/lib/constants.js';

export default function DoubleCheckPasswordInput() {
  const { getValues } = useFormContext<FormValues>();

  const doubleCheckPasswordValidation: validation = {
    required: '비밀번호를 입력해주세요.',
    pattern: {
      value: regExp.password,
      message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    },
    validate: {
      check: (val) => {
        if (getValues('password') !== val) {
          return '비밀번호가 일치하지 않아요.';
        }
      },
    },
  };

  return (
    <Input
      label='비밀번호 확인'
      id='doubleCheckPassword'
      type='password'
      placeholder='비밀번호와 일치하는 값을 입력해 주세요.'
      validation={doubleCheckPasswordValidation}
    />
  );
}
