import { render, screen } from '@testing-library/react';
import Header from './Header/Header';

test('renders the header', () => {
  render(<Header text='Alchemy Animal Farm'/>);
  const linkElement = screen.getByText('Alchemy Animal Farm');
  expect(linkElement).toBeInTheDocument();
});
