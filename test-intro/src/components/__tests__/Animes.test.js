import { screen, render } from '@testing-library/react';
import Animes from '../Animes';
import axios from 'axios';

jest.mock('axios');

describe('Animes Component', () => {
  it('should render 3 animes', async () => {
    axios.get.mockResolvedValue({
      data: {
        data: [
          {
            mal_id: 1,
            title: 'title 1',
            description: 'description 1',
          },
          {
            mal_id: 2,
            title: 'title 2',
            description: 'description 2',
          },
          {
            mal_id: 3,
            title: 'title 3',
            description: 'description 3',
          },
        ],
      },
    });

    render(<Animes />);

    const divElements = await screen.findAllByTestId(/anime-\d/);
    expect(divElements.length).toEqual(3);
  });
});
