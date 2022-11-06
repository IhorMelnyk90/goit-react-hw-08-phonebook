import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/authOperations';
import {
  LoginTitle,
  LoginTextFieldFloating,
  LoginTextFieldInput,
  LoginTextFieldLabel,
  LoginTextFieldBtn,
} from './LoginPage.styled';

function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(operations.logIn(form));
    setForm({ email: '', password: '' });
  };

  const { email, password } = form;

  return (
    <div>
      <LoginTitle>Login</LoginTitle>
      <form onSubmit={handleSubmit}>
        <LoginTextFieldFloating>
          <LoginTextFieldInput
            id="email"
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Example user@mail.com"
            required
            value={email}
            onChange={handleChange}
          />
          <LoginTextFieldLabel htmlFor="email">Email</LoginTextFieldLabel>
        </LoginTextFieldFloating>
        <LoginTextFieldFloating>
          <LoginTextFieldInput
            id="password"
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
            autoComplete="off"
          />
          <LoginTextFieldLabel htmlFor="password">Password</LoginTextFieldLabel>
        </LoginTextFieldFloating>
        <LoginTextFieldBtn type="submit">Login</LoginTextFieldBtn>
      </form>
    </div>
  );
}

export default LoginPage;
