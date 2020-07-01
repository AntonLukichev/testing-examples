// eslint-disable-next-line
import * as React from 'react';

describe('Console.log mock', () => {
  let consoleOutput: never[] = [];
  const mockConsoleLog = (...output: never) => consoleOutput.push(output);

  beforeEach(() => {
    consoleOutput = [];
    // eslint-disable-next-line no-console
    console.log = mockConsoleLog;
  });

  it('should match output', () => {
    // eslint-disable-next-line no-console
    console.log('test message', 123);
    expect(consoleOutput).toEqual([['test message', 123]]);
  });
});
