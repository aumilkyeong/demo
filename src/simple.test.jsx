function add(x, y) {
  return x + y;
}

test('add', () => {
  expect(add(1, 3)).toBe(4);
});

// Signature: name(add), parameters(x, y), return(result)

// TDD Cycle: RED - GREEN - REFACTORING
