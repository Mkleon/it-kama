import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='login' component='input' type='text' placeholder={'Login'} />
            </div>
            <div>
                <Field name='password' component='input' type='text' placeholder={'Password'} />
            </div>
            <div>
               <Field name='rememberMe' component='input' type={'checkbox'} /> remember me
            </div>
            <div>
                <button type='submit'>Log in</button>
            </div>
        </form>
    ) ;
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>;
};

export default Login;