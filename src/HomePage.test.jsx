import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

test('HomePage', () => {
  render(<HomePage />); // 렌더링만 확인
});
