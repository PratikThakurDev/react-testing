import '@testing-library/jest-dom'; // ✅ REQUIRED for `.toBeInTheDocument()`
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting with name', () => {
    render(<Greeting name="Pratik" />);
    const headingElement = screen.getByText('Hello, Pratik!');
    expect(headingElement).toBeInTheDocument(); // ✅ this will now work
});
