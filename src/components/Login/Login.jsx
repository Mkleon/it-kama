import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormControls/FormControls';

const LoginForm = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='login' component={Input} type='text' 
                    placeholder={'Login'}
                    validate={[required]} />
            </div>
            <div>
                <Field name='password' component={Input} type='text'
                    placeholder={'Password'}
                    validate={[required]} />
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