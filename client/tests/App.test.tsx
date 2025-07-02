import { render } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import App from '../src/App';

describe('renders app correctly', () => {
  beforeAll(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: 'api works!' }),
      })
    ) as unknown as typeof global.fetch;
  });
  it('renders without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });
});
