import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('renders app correctly', () => {
  it('renders without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });
});
