import { render, screen } from '@/test';
import Home from '@/pages/index';
import { mockMorty } from '../mocks/mockMorty';

describe('Home page', () => {
    it.skip('Should render the content at the page', () => {
        render(<Home morty={mockMorty} />);
        expect(screen.getByTestId('content')).toBeInTheDocument();
    });
});
