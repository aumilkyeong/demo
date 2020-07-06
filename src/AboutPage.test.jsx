import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

test('AboutPage', () => {
  render(<AboutPage />); // 렌더링만 확인
});
