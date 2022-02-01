import React, {useEffect, useState} from 'react';

const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [loginDirty, setLoginDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    const [loginError, setLoginError] = useState('Login is empty');
    const [passwordError, setPasswordError] = useState('Password is empty');

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (loginError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true);
        }
    }, [loginError, passwordError])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'login' :
                setLoginDirty(true);
                break;
            case 'password' :
                setPasswordDirty(true);
                break;
            default: break;
        }
    }

    const loginHandler = (e) => {
        setLogin(e.target.value);
        if (e.target.value.length < 4 || e.target.value.length > 30) {
            setLoginError('Login length should be more 4 and less 30')
        } else {
            setLoginError('');
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 4 || e.target.value.length > 30) {
            setPasswordError('Password length should be more 4 and less 30')
            if (!e.target.value) {
                setPasswordError('Password is empty');
            }
        } else {
            setPasswordError('');
        }
    }

    return (
        <div className="login">
            <form action="/certificates">
                <div className="login__header">
                    <div>
                        <h4>Login</h4>
                    </div>
                </div>
                <div className="login__credentials">
                    <div className="login__content">
                        <div className="login__input">
                            <input
                                onChange={event => loginHandler(event)}
                                value={login}
                                onBlur={event => blurHandler(event)}
                                name='login'
                                type="text"
                                placeholder="Username"
                            />
                        </div>
                        <div className="login__input">
                            <input
                                onChange={event => passwordHandler(event)}
                                value={password}
                                onBlur={event => blurHandler(event)}
                                name='password'
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        {(loginDirty && loginError) && <div style={{color: "red"}}>{loginError}</div>}
                        {(passwordDirty && passwordError) && <div style={{color: "red"}}>{passwordError}</div>}
                    </div>
                </div>
                <div className="login__button">
                    <button disabled={!formValid} type="submit">
                        Login
                    </button>
                </div>
            </form>

        </div>
    );
};

export default Login;