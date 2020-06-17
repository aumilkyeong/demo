import React from 'react';

export default function Input({ value, onChange, onClick }) {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} placeholder="할 일을 입력해 주세요" />
      <button type="button" onClick={onClick}>
        추가
      </button>
    </div>
  );
}
