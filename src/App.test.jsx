/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText } = render(
    <App />,
  );

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/아무 것도 하지 않기#1/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS: 실제 브라우저에서 사용자 테스트 사용 가능
  // 앱 테스트는 기본적인 것 위주 - 앱을 실행하자마자 깨지는가? 데이터 플로우가 잘못되어 있는가?
  // 더 상세한건 CodeceptJS 이용하여 진행
});
