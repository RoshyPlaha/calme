const { startit, alternateStartIt } = require('./googleindex');

test('Generate authentication URL', async () => {
  const data = await alternateStartIt();
  expect(data).toMatch(/accounts.google.com/);
});