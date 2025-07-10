import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

test('starts at 0 and updates on button clicks', () => {
    render(<Counter />);

    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('Count: 0');

    const incrementButton = screen.getByText('+');
    const decrementButton = screen.getByText('-');
    const resetButton = screen.getByText('reset');

    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent('Count: 1');

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent('Count: 0');

    fireEvent.click(resetButton);
    expect(countElement).toHaveTextContent('Count: 0');

    fireEvent.click(decrementButton); // does not go below zero
    expect(countElement).toHaveTextContent('Count: 0');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    expect(countElement).toHaveTextContent('Count: 0');
});
