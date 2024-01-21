import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { BASE_URL } from '@/constant';
import { useForm } from 'react-hook-form';
import UserButton from '@/src/components/userButton/UserButton';
import useToggle from '@/src/hook/useToggle';
interface Inputvalue {
  email: string;
  password: string;
  passwordCheck?: string;
}

type Error = (name: 'email' | 'password', messages: {}) => void;

async function onSubmit(USER_INFO: Inputvalue) {
  try {
    const response = await fetch(`${BASE_URL}/sign-up`, {
      method: 'POST',
      body: JSON.stringify(USER_INFO),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { data } = await response.json();
    localStorage.setItem('accessToken', data.accessToken);
    if (localStorage.getItem('accessToken')) window.location.href = '/folder';

    if (!response.ok) throw new Error('이미 가입된 회원입니다.');
  } catch {
    return;
  }
}

async function checkEmail(
  USER_INFO: Inputvalue,
  setError: Error,
  trigger: (name: 'email') => void
) {
  trigger('email');

  try {
    const response = await fetch(`${BASE_URL}/sign-up`, {
      method: 'POST',
      body: JSON.stringify({ email: USER_INFO.email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { data } = await response.json();
    localStorage.setItem('accessToken', data.accessToken);
    if (localStorage.getItem('accessToken')) window.location.href = '/folder';

    if (!response.ok) throw new Error('중복된 이메일입니다.');
  } catch {
    setError('email', { message: '이미 사용중인 이메일입니다' });
  }
}

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    setError,
    trigger,
    watch,
    formState: { errors },
  } = useForm<Inputvalue>({ mode: 'onBlur' });

  const [togglePassword, setTogglePassword] = useToggle(false);

  const USER_INFO = {
    email: watch('email'),
    password: watch('password'),
  };

  return (
    <form onSubmit={handleSubmit(() => onSubmit(USER_INFO))}>
      <InputContainer>
        <InputBox>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            className={errors.email ? 'active' : ''}
            placeholder="이메일을 입력해주세요"
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: '올바른 이메일 주소가 아닙니다',
              },
            })}
            name="email"
            onBlur={() => checkEmail(USER_INFO, setError, trigger)}
          />
          {errors.email && <Messages>{errors.email?.message}</Messages>}
        </InputBox>

        <InputBox>
          <Label htmlFor="password">비밀번호</Label>
          <PassWord>
            <Input
              type={togglePassword ? 'text' : 'password'}
              id="password"
              className={
                errors.password && errors.password?.message ? 'active' : ''
              }
              placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
              {...register('password', {
                required: '비밀번호를 입력해주세요',
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
                  message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요',
                },
              })}
              name="password"
            />
            <EyeImg
              src={
                togglePassword
                  ? '/image/ico-eye-on.svg'
                  : '/image/ico-eye-off.svg'
              }
              alt={togglePassword ? '비밀번호 표시' : '비밀번호 숨기기'}
              onClick={setTogglePassword as MouseEventHandler}
            />
          </PassWord>
          {errors.password && <Messages>{errors.password?.message}</Messages>}
        </InputBox>
        <InputBox>
          <Label htmlFor="passwordCheck">비밀번호 확인</Label>
          <PassWord>
            <Input
              type={togglePassword ? 'text' : 'password'}
              id="passwordCheck"
              className={errors.passwordCheck ? 'active' : ''}
              placeholder="비밀번호와 일치하는 값을 입력해 주세요"
              {...register('passwordCheck', {
                validate: {
                  check: (val) => {
                    if (USER_INFO.password !== val) {
                      return '비밀번호가 일치하지 않습니다.';
                    }
                  },
                },
              })}
              name="passwordCheck"
            />
            <EyeImg
              src={
                togglePassword
                  ? '/image/ico-eye-on.svg'
                  : '/image/ico-eye-off.svg'
              }
              alt={togglePassword ? '비밀번호 표시' : '비밀번호 숨기기'}
              onClick={setTogglePassword as MouseEventHandler}
            />
          </PassWord>
          {errors.passwordCheck && (
            <Messages>{errors.passwordCheck?.message}</Messages>
          )}
        </InputBox>
      </InputContainer>
      <UserButton />
    </form>
  );
}

const InputContainer = styled.div`
  margin: 3rem 0 0;
`;

const InputBox = styled.div`
  margin: 2.4rem 0 0;
`;

const Label = styled.label`
  display: block;
  margin: 0 0 1.2rem 0;
  font-size: 1.4rem;
  line-height: 1.6rem;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  padding: 1.8rem 1.5rem;
  font-size: 1.6rem;
  color: var(--gray100);
  border-radius: 0.8rem;
  border: 1px solid var(--gray20);
  background-color: var(--white);

  &:focus {
    border: 1px solid var(--primary);
  }

  &.active {
    border: 1px solid var(--red);
  }
`;

const Messages = styled.p`
  margin: 0.6rem 0 0;
  color: var(--red);
  font-size: 1.4rem;
  line-height: 1.6rem;
`;

const PassWord = styled.div`
  position: relative;
`;

const EyeImg = styled.img`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
  cursor: pointer;
`;
