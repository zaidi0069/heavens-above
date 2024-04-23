const satellite = require('./satellite');

describe('Satellite Module', () => {
  test('getTable function is exported', () => {
    expect(satellite.getTable).toBeDefined();
    expect(typeof satellite.getTable).toBe('function');
  });
});
