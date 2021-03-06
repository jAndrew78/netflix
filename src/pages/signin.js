import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';

import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';


export default function SignIn() {
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // check form input elements validity
    const isInvalid = password === '' || emailAddress === '';

    // email & password
    const handleSignIn = event => {
        event.preventDefault();

        // firebase
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
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

                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign Up Now</Form.Link>
                    </Form.Text>
                    
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </Form.TextSmall>
                </Form>

            </HeaderContainer>

            <FooterContainer />
        </>
    )
}
