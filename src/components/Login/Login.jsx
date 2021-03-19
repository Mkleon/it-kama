import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormControls/FormControls';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';

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
            { props.error && <div>{props.error}</div>}
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

    if (props.isAuth) {
        return <Redirect to='profile' />;
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>;
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, { login })(Login);