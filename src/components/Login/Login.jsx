import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormControls/FormControls';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';

const LoginForm = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='email' component={Input} type='text' 
                    placeholder={'Email'}
                    validate={[required]} />
            </div>
            <div>
                <Field name='password' component={Input}
                    type='password'
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
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>;
};

export default connect(null, { login })(Login);