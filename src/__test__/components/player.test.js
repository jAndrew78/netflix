import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Player } from '../../components';
import { Item } from '../../components/jumbotron/styles/jumbotron';

describe('<Player />', () => {
    it('renders the <Player /> with a bunny video', () => {
        const { getByText, queryByTestId } = render(
            <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
            </Player>
        )
    });
});
