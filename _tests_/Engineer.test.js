// const { test } = require('picomatch');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
  const engineer = new Engineer('Dave', 'https://github.com/dave123');

  expect(engineer.name).toBe('Dave');
  expect(engineer.github).toBe('https://github.com/dave123');
});

    // tests the getName() function from EMPLOYEE class
test("gets employees Name", () => {
    // Test
})

    // tests the getId() function from EMPLOYEE class
test("gets employees Id", () => {
    // Test
})

    // tests the getEmail() function from EMPLOYEE class
test("gets employees Email", () => {
    // Test
})

    // tests the getRole() function from EMPLOYEE class
test("gets employees Role", () => {
    // Test
})

    // tests the getRole() function from ENGINEER class
test("gets engineers Role", () => {
    // Test
    // Overridden to return 'Engineer'
})

    // tests the getGithub() function from ENGINEER class
test("gets engineers Github", () => {
    // Test
})





test("gets Engineer's health value", () => {
  const Engineer = new Engineer('Dave', 'https://github.com/dave123');

  expect(Engineer.getHealth()).toEqual(expect.stringContaining(Engineer.health.toString()));
});

test('gets a description of the Engineer', () => {
  const Engineer = new Engineer('Dave', 'https://github.com/dave123');

  expect(Engineer.getDescription()).toEqual(expect.stringContaining('Dave'));
  expect(Engineer.getDescription()).toEqual(expect.stringContaining('https://github.com/dave123'));
});

test('checks if Engineer is alive or not', () => {
  const Engineer = new Engineer('Dave', 'https://github.com/dave123');

  expect(Engineer.isAlive()).toBeTruthy();

  Engineer.health = 0;

  expect(Engineer.isAlive()).toBeFalsy();
});

test("gets Engineer's attack value", () => {
  const Engineer = new Engineer('Dave', 'https://github.com/dave123');
  Engineer.strength = 10;

  expect(Engineer.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(Engineer.getAttackValue()).toBeLessThanOrEqual(15);
});

test("subtracts from Engineer's health", () => {
  const Engineer = new Engineer('Dave', 'https://github.com/dave123');
  const oldHealth = Engineer.health;

  Engineer.reduceHealth(5);

  expect(Engineer.health).toBe(oldHealth - 5);

  Engineer.reduceHealth(99999);

  expect(Engineer.health).toBe(0);
});
