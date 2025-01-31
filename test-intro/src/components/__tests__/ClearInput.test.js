import { render, screen, fireEvent } from '@testing-library/react';

import ClearInput from '../ClearInput';

describe('ClearInput Component', () => {
  it('should clear the input', () => {
    render(<ClearInput />);

    const btn = screen.getByText(/clear/i);
    const inp = screen.getByPlaceholderText(/type your name/);

    fireEvent.change(inp, { target: { value: 'Ehsan' } });
    fireEvent.click(btn);

    expect(inp.value).toBe('');
  });
});
