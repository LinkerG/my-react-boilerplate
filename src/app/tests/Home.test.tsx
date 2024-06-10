// src/app/tests/Home.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../../pages/Home/Home';

describe('Home', () => {
  it('renders without crashing', () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });
});
