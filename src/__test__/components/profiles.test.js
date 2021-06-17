import React from 'react';
import { render } from '@testing-library/react';
import { Profiles } from '../../components';

describe('<Profiles />', () => {
    it('renders the <Profiles /> with populated data', () => {
        const { container, getByText, getByTestId } = render(
            <Profiles>
                <Profiles.Title>Who's Watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => {}}>
                        <Profiles.Picture src='/images/andrew.png' data-testid="profile-picture" />
                        <Profiles.Name>Andrew</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>         
        );

        expect(getByText("Who's Watching?")).toBeTruthy();
        expect(getByTestId('profile-picture')).toBeTruthy();
        expect(getByText("Andrew")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the <Profiles /> with populated data but misc profile img', () => {
        const { container, getByText, getByTestId } = render(
            <Profiles>
                <Profiles.Title>Who's Watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => {}}>
                        <Profiles.Picture src='/images/andrew.png' data-testid="profile-picture-misc" />
                        <Profiles.Name>Andrew</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>         
        );

        expect(getByText("Who's Watching?")).toBeTruthy();
        expect(getByTestId('profile-picture-misc')).toBeTruthy();
        expect(getByText("Andrew")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});