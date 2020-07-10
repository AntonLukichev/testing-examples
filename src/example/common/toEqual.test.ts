// eslint-disable-next-line
import * as React from 'react';

describe('toEqual example', () => {
  it('should equal function', async () => {
    // eslint-disable-next-line no-console
    const log = (message: string) => console.log(message);
    expect(log).toEqual(expect.any(Function));
  });
});
