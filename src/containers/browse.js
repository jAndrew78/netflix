import React, { useContext, useState, useEffect } from 'react';

import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Header, Loading, Card } from '../components';
import * as ROUTES from '../constants/routes';
import Logo from '../logo.png';


export function BrowseContainer({ slides }) {
    const [category, setCategory] = useState('series')
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [slideRows, setSlideRows] = useState([]);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        console.log('profile', profile)
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [profile, profile.displayName])

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category])

    return profile.displayName ? (
        <>
            {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={Logo} alt="Netflix" />

                        <Header.TextLink
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}
                        >
                            Series
                        </Header.TextLink>
                        
                        <Header.TextLink
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}
                        >
                            Films
                        </Header.TextLink>
                    </Header.Group>

                    <Header.Group>

                        <Header.Search
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />

                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />

                            <Header.DropdownBreak />

                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>

                                <Header.Group>
                                    <Header.TextLink>
                                        Manage Profiles
                                    </Header.TextLink>
                                </Header.Group>

                                <Header.Break />

                                <Header.Group>
                                    <Header.TextLink>
                                        Account
                                    </Header.TextLink>
                                </Header.Group>

                                <Header.Group>
                                    <Header.TextLink>
                                        Help Center
                                    </Header.TextLink>
                                </Header.Group>
                                
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>
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
                        Mentally troubled comedian Aurthur Fleck, disregarded by society, embarks on a downward spiral which eventually brings him face to face with his alter ego: the Joker.
                    </Header.Text>
                    <Header.PlayButton><span>&#9654; </span>Play</Header.PlayButton>
                </Header.Feature>
            </Header>

            <Card.Group>

            </Card.Group>
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}
