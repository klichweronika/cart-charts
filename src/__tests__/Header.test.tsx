import { render } from '@testing-library/react';
import Header from '../components/Header/Header';

test('renders header component without errors', () => {
  render(<Header />);
});

