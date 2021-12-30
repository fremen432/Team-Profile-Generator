// const { test } = require('picomatch');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('Dave', 'https://github.com/dave123');

  expect(intern.name).toBe('Dave');
  expect(intern.school).toBe('UT at Austin');
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

    // tests the getRole() function from INTERN class
test("gets Intern's Role", () => {
    // Test
    // Overridden to return 'Intern'
})

    // tests the getSchool() function from INTERN class
test("gets Intern's School", () => {
    // Test
})
