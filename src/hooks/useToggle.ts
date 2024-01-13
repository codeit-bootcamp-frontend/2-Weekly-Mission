import { Dispatch, SetStateAction, useState } from 'react';

export default function useToggle(initialValue = false) {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggle = () => setValue((prevValue) => !prevValue);
  return [value, toggle] as [boolean, () => void];
}
