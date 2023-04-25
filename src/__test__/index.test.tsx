import { render, screen } from '@/test';
import Home from '@/pages/index';

describe('Home page', () => {
    it('Should render the content at the page', () => {
        render(<Home />);
        expect(screen.getByTestId('content')).toBeInTheDocument();
    });
});
