const { hello } = require('./hello');

describe('hello', () => {
  it('should return "Hello, World!" when no name is provided', () => {
    expect(hello()).toBe('Hello, World!');
  });

  it('should return a personalized greeting when a name is provided', () => {
    expect(hello('Alice')).toBe('Hello, Alice!');
  });

  it('should handle empty string as name', () => {
    expect(hello('')).toBe('Hello, World!');
  });
});
