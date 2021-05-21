import React, {useState} from 'react';

import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';


export default function Signin() {
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    // check form input elements validity
    const isInvalid = password === '' || emailAddress === '';

    // email & password
    const handleSignIn = event => {
        event.preventDefault();

        // firebase
    }


    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input 
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}    // destructuring target allowss us to not have to use e.target.etc
                        />
                        <Form.Input 
                            type="password"
                            autoComplete="off"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
                    </Form.Base>
                </Form>
            </HeaderContainer>

            <FooterContainer />
        </>
    )
}
