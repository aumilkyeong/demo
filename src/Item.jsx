import React from 'react';

export default function Item({ task: { id, title }, onClick }) {
  return (
    <li>
      {id}
      -
      {title}
      <button type="button" onClick={() => onClick(id)}>
        Done
      </button>
    </li>
  );
}
