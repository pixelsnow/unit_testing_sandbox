import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('truth is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });

  test('false is falsy', () => {
    expect(false).toBe(false);
  });
});

const sum = require('./sum');
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
})

const sub = require('./sub');
test('substracts 3 - 2 to equal 1', () =>{
    expect(sub(3,2)).toBe(1)
})

const div = require('./div');
test('divides 6 / 3 to equal 2', () => {
  expect(div(6,3)).toBe(2)
})