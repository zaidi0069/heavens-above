const iridium = require('./src/iridium');

describe('Iridium Module', () => {
  test('getTable function is exported', () => {
    expect(iridium.getTable).toBeDefined();
    expect(typeof iridium.getTable).toBe('function');
  });
});
