import React from 'react';

import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import Logo from '../logo.png';


export function SelectProfileContainer({ user, setProfile }) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={Logo} alt="Netflix" />
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>Who's Watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={} />
                </Profiles.List>
            </Profiles>
        </>
    )
}
