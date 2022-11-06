import React from 'react';
import { MenuItem } from '@mui/material';
import { AuthLink } from './AuthNav.styled';

function AuthNav() {
  return (
    <>
      <MenuItem>
        <AuthLink to="/register">Register</AuthLink>
      </MenuItem>

      <MenuItem>
        <AuthLink to="/login">Log In</AuthLink>
      </MenuItem>
    </>
  );
}

export default AuthNav;
