import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/authOperations';
import {
  RegisterTitle,
  RegisterTextFieldFloating,
  RegisterTextFieldInput,
  RegisterTextFieldLabel,
  RegisterTextFieldBtn,
} from './RegisterPage.styled';

function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(operations.register(form));
    setForm({ name: '', email: '', password: '' });
  };

  const { name, email, password } = form;

  return (
    <>
      <RegisterTitle>Register</RegisterTitle>
      <form action="submit" onSubmit={handleSubmit}>
        <RegisterTextFieldFloating>
          <RegisterTextFieldInput
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <RegisterTextFieldLabel htmlFor="name">
            Name
          </RegisterTextFieldLabel>
        </RegisterTextFieldFloating>

        <RegisterTextFieldFloating>
          <RegisterTextFieldInput
            id="email"
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Example user@mail.com"
            required
            value={email}
            onChange={handleChange}
          />
          <RegisterTextFieldLabel htmlFor="email">
            Email
          </RegisterTextFieldLabel>
        </RegisterTextFieldFloating>
        <RegisterTextFieldFloating>
          <RegisterTextFieldInput
            id="password"
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
            autoComplete="off"
          />
          <RegisterTextFieldLabel htmlFor="password">
            Password
          </RegisterTextFieldLabel>
        </RegisterTextFieldFloating>

        <RegisterTextFieldBtn type="submit">
          Register
        </RegisterTextFieldBtn>
      </form>
    </>
  );
}

export default RegisterPage;
