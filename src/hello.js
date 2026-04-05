/**
 * Returns a hello world greeting.
 * @param {string} [name] - Optional name to greet.
 * @returns {string} The greeting message.
 */
function hello(name) {
  if (name) {
    return `Hello, ${name}!`;
  }
  return 'Hello, World!';
}

module.exports = { hello };
