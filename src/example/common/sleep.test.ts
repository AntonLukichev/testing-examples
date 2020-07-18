// eslint-disable-next-line
import * as React from 'react';

const mockEcommerce = {
  ecommerce: {
    currencyCode: 'RUB',
    impressions: [{
      name: 'test',
      id: 1,
      price: 1000,
    }],
  },
};

const asyncSet = () => {
  setTimeout(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(mockEcommerce);
  }, 500);
};

const sleep = (ms: number) => new Promise<never>((resolve) => setTimeout(resolve, ms));

describe('setTimeout and sleepTest example', () => {
  it('should return the result after 1 second', async () => {
    expect(window.dataLayer).toEqual(undefined);

    asyncSet();
    await sleep(1000);
    expect(window.dataLayer).toEqual([
      mockEcommerce
    ]);
  });
});
