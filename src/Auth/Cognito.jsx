import { Auth } from 'aws-amplify';

let formState = 'signUp';
let formInputState = { username: '', password: '', email:'', verificationCode: ''};

function onChange(e) {
    formInputState = { ...formInputState, [e.target.name]: e.target.value}
}

export async function signUp() {
    try { 
        await Auth.signUp({
            username: formInputState.username,
            password: formInputState.password,
            attributes: {
                email: formInputState.email
            }
        });

        formState = 'confirmSignUp';
    } catch (err) { console.log({err}); }
}

export async function confirmSignUp() {
    try {
        await Auth.confirmSignUp(formInputState.username, formInputState.verificationCode);

        formState = "signIn";
    } catch (err) { console.log({err}); }
}

export async function signIn() {
    try {
        await Auth.signIn(formInputState.username, formInputState.password);

        formState = 'signedIn';
    } catch (err) { console.log({err}); }
}

