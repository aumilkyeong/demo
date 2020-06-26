import React from 'react';

export default function Item({ task: { id, title }, onClick }) {
  return (
    <li>
      {title}
      <button type="button" onClick={() => onClick(id)}>
        완료
      </button>
    </li>
  );
}
