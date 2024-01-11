import React, { useState } from 'react';
import '../../CSS/select.css'

export default function KebobMenu() {
  const selectList = ['삭제하기', '폴더에 추가'];
  const [Selected, setSelected] = useState('');

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
      <div onChange={handleSelect} value={Selected} className='kebob-menu'>
        {selectList.map((item) => (
          <button value={item} key={item} className='option-style'>
            {item}
          </button>
        ))}
      </div>
  );
}
