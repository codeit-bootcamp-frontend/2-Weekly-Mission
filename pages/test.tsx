import PasswordInput from '@/src/commons/ui-password-input/PasswordInput';
import { ChangeEvent, FocusEvent, useState } from 'react';

export default function Test() {
  /* Password Input 컴포넌트 테스트용 값 */
  const [inputValue, setInputValue] = useState<string>(''); // inputValue
  const [error, setError] = useState({
    hasError: false,
    errorMessage: '비밀번호는 3자리 이상이여야 합니다',
  });
  const placeholder = '비밀번호를 입력해주세요';

  const validateInput = (value: string) => {
    if (value.length < 3) {
      setError({ ...error, hasError: true });
    } else {
      setError({ ...error, hasError: false });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    validateInput(inputValue);
  };
  /* Password Input 컴포넌트 테스트용 값 */

  return (
    <div style={{ height: '100vh', width: '100%', padding: '3rem' }}>
      <PasswordInput
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        hasError={error.hasError}
        errorMessage={error.errorMessage}
      />
    </div>
  );
}
