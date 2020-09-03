const assert = require('assert');
const { isMainThread } = require('worker_threads');
const { hasUncaughtExceptionCaptureCallback } = require('process');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('sum', () => {
  it('should sum 2 numbers', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
    expect(sum(4, '5')).toThrow(Error);
    expect(sum(4, '5')).toThrow('parameters must be numbers');
  })
})
