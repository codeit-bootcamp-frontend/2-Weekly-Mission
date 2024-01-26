import { useState } from "react";
import { createSubmit } from "../api/testApi";

export const SignInForm = () => {
  const INITIAL_VALUES = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createSubmit(values);
    setValues(INITIAL_VALUES);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>이메일</label>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <label>비밀번호</label>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">제출</button>
    </form>
  );
};
