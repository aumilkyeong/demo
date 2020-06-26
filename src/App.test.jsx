import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  // TODO: useSelector 조작 - 테스트를 위한 state 조작 가능
  // 가짜로 상태를 넣어준다

  const tasks = [
    { id: 1, title: '아무 것도 하지 않기#1' },
    { id: 2, title: '아무 것도 하지 않기#2' },
  ];

  useSelector.mockImplementation((selector) => selector({ tasks }));

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
