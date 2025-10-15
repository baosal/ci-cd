function add(a, b) {
  return a + b;
}

// Unit test for the add function
describe('add', () => {
  test('should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should return 0 when both numbers are 0', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('should handle negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });
});