const assert = require('assert');
const { add } = require('../index');

describe('Fonction add', () => {
  it('devrait retourner 4 pour add(1, 3)', () => {
    assert.strictEqual(add(1, 7), 4);
  });

  it('devrait retourner 0 pour add(-2, 2)', () => {
    assert.strictEqual(add(-2, 2), 0);
  });
});
