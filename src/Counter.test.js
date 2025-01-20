import {fireEvent, render, screen} from '@testing-library/react';
import Counter from './Counter';

test('renders increment button', () => {
    render (<Counter />);
    const buttonElement = screen.getByText(/Incrementar/i)
    expect (buttonElement).toBeInTheDocument();
});


test('Check initial value is 0', () => {
    render (<Counter />);
    const inicial = screen.getByText(/Contador: 0/i)
    expect (inicial).toBeInTheDocument();
});

test('Check "Incrementar" button works', () => {
    render (<Counter />);
    fireEvent.click(screen.getByText(/Incrementar/i))
    const contador2 = screen.getByText(/Contador: 1/i)
    expect (contador2).toBeInTheDocument();
});

test('Check Contador: 5 after 5 clicks', () => {
    render (<Counter />);
    fireEvent.click(screen.getByText(/Incrementar/i))
    fireEvent.click(screen.getByText(/Incrementar/i))
    fireEvent.click(screen.getByText(/Incrementar/i))
    fireEvent.click(screen.getByText(/Incrementar/i))
    fireEvent.click(screen.getByText(/Incrementar/i))
    const contador5 = screen.getByText(/Contador: 5/i)
    expect (contador5).toBeInTheDocument();
});