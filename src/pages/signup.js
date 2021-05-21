import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';

import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';


export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignUp = (event) => {
        event.preventDefault();

        //firebase
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                })
                .then(() => {
                    history.push(ROUTES.BROWSE);
                })
            )
            .catch(error => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input 
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}    // destructuring target allowss us to not have to use e.target.etc
                        />
                        <Form.Input 
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input 
                            type="password"
                            autoComplete="off"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">Sign Up</Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already a User? <Form.Link to="/signin">Sign In Now</Form.Link>
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
