import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should test', () => {
    render(<App></App>);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });
});
