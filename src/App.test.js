import { render, screen } from '@testing-library/react';
import Header from './Header/Header';

test('renders the header', () => {
  render(<Header greeting='Alchemy Animal Farm'/>);
  const linkElement = screen.getByText('Alchemy Animal Farm');
  expect(linkElement).toBeInTheDocument();
});
