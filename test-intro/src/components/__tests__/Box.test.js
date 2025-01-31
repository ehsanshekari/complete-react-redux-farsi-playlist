import { render, screen } from '@testing-library/react';

import Box from '../Box';

describe('Box component', () => {
  describe('Simple Test', () => {
    it('should render the correct props', () => {
        render(<Box text="react!"></Box>);

        const el = screen.queryByText(/react!/);

        expect(el).not.toBeNull();
    })
  });
});
