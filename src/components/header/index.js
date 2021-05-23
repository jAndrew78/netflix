import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { 
    Background, 
    Container, 
    Group, 
    Feature, 
    Logo, 
    ButtonLink, 
    Picture, 
    Profile,
    Dropdown,
    DropdownBreak,
    Break, 
    Text, 
    FeatureCallOut, 
    Link, 
    Search,
    SearchIcon,
    CloseIcon,
    SearchInput,
} from './styles/header';


export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)} active={searchActive}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
            />
            <CloseIcon onClick={() => setSearchActive(searchActive => !searchActive)} active={searchActive}>
                <img src="/images/icons/close-slim.png" alt="Close" />
            </CloseIcon>
        </Search>
    ) 
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.DropdownBreak = function HeaderDropdownBreak({ children, ...restProps }) {
    return <DropdownBreak {...restProps}>{children}</DropdownBreak>
}

Header.Break = function HeaderBreak({ children, ...restProps }) {
    return <Break {...restProps}>{children}</Break>
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

