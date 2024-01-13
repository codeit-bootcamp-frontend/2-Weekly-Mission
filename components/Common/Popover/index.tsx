import { ReactNode, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import * as S from "./styled";

interface PopoverContentProps {
  title: string;
  onClick: () => void;
}
interface PopoverProps {
  children: ReactNode;
  content: PopoverContentProps[];
}

function Popover({ children, content }: PopoverProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setVisible(false);
    }
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <S.Wrapper ref={ref}>
      <button onClick={toggleVisible}>{children}</button>
      {visible && (
        <S.Contents>
          {content.map(({ title, onClick }) => (
            <S.Item key={title} onClick={onClick}>
              {title}
            </S.Item>
          ))}
        </S.Contents>
      )}
    </S.Wrapper>
  );
}

export default Popover;
