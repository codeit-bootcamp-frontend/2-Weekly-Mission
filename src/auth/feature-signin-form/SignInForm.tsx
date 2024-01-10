import { FocusEvent, FormEvent, useState } from 'react';
import { SigninForm as UiSigninForm } from '../ui-signin-form/SigninForm';

export type FormValue = {
  email: string;
  password: string;
  passwordRepeat?: string;
};

export default function SignInForm() {
  const [formValue, setFormValue] = useState<FormValue>({
    email: '',
    password: '',
  });
  const handleClick = () => {
    console.log(formValue);
  };
  const handleChange = (name: string, value: string) => {
    setFormValue((prevValue) => ({ ...prevValue, [name]: value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <UiSigninForm
      isSignUp={false}
      onClick={handleClick}
      formValue={formValue}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onBlur={handleBlur}
    />
  );
}
