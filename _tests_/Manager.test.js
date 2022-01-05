// const { test } = require('picomatch');
const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
  const manager = new Manager('Dave', '321');

  expect(manager.name).toBe('Dave');
  expect(manager.officeNumber).toBe('UT at Austin');
});

    // tests the getName() function from EMPLOYEE class
test("gets employee's Name", () => {
    // Test
})

    // tests the getId() function from EMPLOYEE class
test("gets employee's Id", () => {
    // Test
})

    // tests the getEmail() function from EMPLOYEE class
test("gets employee's Email", () => {
    // Test
})

    // tests the getRole() function from EMPLOYEE class
test("gets employee's Role", () => {
    // Test
})

    // tests the getRole() function from MANAGER class
test("gets Manager's Role", () => {
    // Test
    // Overridden to return 'Manager'
})
