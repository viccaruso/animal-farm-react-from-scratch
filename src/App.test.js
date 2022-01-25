import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Alchemy Animal Farm/i);
  expect(linkElement).toBeInTheDocument();
});
