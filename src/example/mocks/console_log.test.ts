// eslint-disable-next-line
import * as React from 'react';

describe('Console.log mock', () => {
  /* eslint-disable no-console */
  let consoleOutput: never[] = [];
  const mockConsoleLog = (...output: never) => consoleOutput.push(output);

  beforeEach(() => {
    consoleOutput = [];
    console.log = mockConsoleLog;
  });

  it('should match output', () => {
    console.log('test message', 123);
    expect(consoleOutput).toEqual([['test message', 123]]);
  });
  /* eslint-enable no-console */
});

describe('Console spyOn', () => {
  it('should intercept warnings', () => {
    /* eslint-disable no-console */
    const warning = jest.spyOn(console, 'warn').mockImplementation();
    console.warn('one');
    console.warn('two');
    expect(warning).toHaveBeenCalledTimes(2);
    expect(warning).toHaveBeenLastCalledWith('two');
    expect(warning.mock.calls).toEqual([['one'], ['two']]);
    warning.mockRestore();

    console.warn('three');
    expect(warning).toHaveBeenCalledTimes(0);
    /* eslint-enable no-console */
  });
});
