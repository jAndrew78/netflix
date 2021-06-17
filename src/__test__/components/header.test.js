import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Header } from '../../components';
import { MemoryRouter } from 'react-router-dom';

// jest.mock('react-router-dom');

describe('<Header />', () => {
    it('renders the basic <Header /> with a background', () => {
        const { container, getByText, getByTestId } = render(
            <Header>
                <Header.Frame>
                    <Header.Logo src="/logo.svg" alt="Netflix" to="/" />
                    <Header.TextLink active="true" to="/" >Hello I am a link!</Header.TextLink>
                </Header.Frame>
            </Header>,
            { wrapper: MemoryRouter }
        );

        expect(getByText('Hello I am a link!')).toBeTruthy();
        expect(getByTestId('header-bg')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the basic <Header /> without a background', () => {
        const { container, getByText, queryByTestId } = render(
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo src="/logo.svg" alt="Netflix" to="/" />
                    <Header.ButtonLink to="/" >Sign In</Header.ButtonLink>
                    <Header.TextLink active="false" to="/" >Hello I am a link!</Header.TextLink>
                </Header.Frame>
            </Header>,
            { wrapper: MemoryRouter }
        );

        expect(getByText('Hello I am a link!')).toBeTruthy();
        expect(queryByTestId('header-bg')).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the full <Header /> with a background', () => {
        const { container, getByText, getByTestId } = render(
            <Header src="joker2" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo src="/images/logo.svg" alt="Netflix" to="/" />

                        <Header.TextLink active={false} onClick={() => {}} to="/">
                            TV Shows
                        </Header.TextLink>

                        <Header.TextLink active onClick={() => {}} to="/">
                            Movies
                        </Header.TextLink>
                    </Header.Group>

                    <Header.Group>

                        <Header.Search
                            searchTerm="Joker"
                            setSearchTerm={() => {}}
                        />

                        <Header.Profile>
                            <Header.Picture src='/images/andrew.png' />

                            <Header.DropdownBreak />

                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src='/images/andrew.png' />
                                    <Header.TextLink to="/">Andrew</Header.TextLink>
                                </Header.Group>

                                <Header.Group>
                                    <Header.TextLink to="/">
                                        Manage Profiles
                                    </Header.TextLink>
                                </Header.Group>

                                <Header.Break />

                                <Header.Group>
                                    <Header.TextLink to="/">
                                        Account
                                    </Header.TextLink>
                                </Header.Group>

                                <Header.Group>
                                    <Header.TextLink to="/">
                                        Help Center
                                    </Header.TextLink>
                                </Header.Group>
                                
                                <Header.Group>
                                    <Header.TextLink onClick={() => {}} to="/">
                                        Sign Out of Netflix
                                    </Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>

                        </Header.Profile>

                    </Header.Group>
                </Header.Frame>

                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                        Troubled comedian Aurthur Fleck...
                    </Header.Text>
                    <Header.PlayButton><span>&#9654; </span>Play</Header.PlayButton>
                </Header.Feature>
            </Header>,
            { wrapper: MemoryRouter }
        );

        expect(getByTestId('search-input')).toBeTruthy();
        expect(getByTestId('search-input').value).toBe('Joker');
        fireEvent.change(getByTestId('search-input'), {
            target: { value: 'Simpsons' },
        })
        fireEvent.click(getByTestId('search-click'));
        fireEvent.click(getByTestId('search-close'));

        expect(getByText('TV Shows')).toBeTruthy();
        expect(getByText('Movies')).toBeTruthy();
        expect(getByText('Andrew')).toBeTruthy();
        expect(getByText('Manage Profiles')).toBeTruthy();
        expect(getByText('Account')).toBeTruthy();
        expect(getByText('Help Center')).toBeTruthy();
        expect(getByText('Watch Joker Now')).toBeTruthy();
        expect(getByText('Sign Out of Netflix')).toBeTruthy();
        expect(getByText('Troubled comedian Aurthur Fleck...')).toBeTruthy();
        expect(getByText('Play')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});