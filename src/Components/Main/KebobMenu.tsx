import React, { useState } from 'react';
import '../../CSS/select.css';

export default function KebobMenu() {
  const selectList: [string, string] = ['삭제하기', '폴더에 추가'];
  const [Selected, setSelected] = useState<string>('');

  const handleSelect = () => {
    setSelected(Selected);
  };

  return (
    <div className="kebob-menu">
      {selectList.map((item) => (
        <button
          onChange={handleSelect}
          value={item}
          key={item}
          className="option-style"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
