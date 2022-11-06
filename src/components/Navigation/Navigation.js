import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { MenuItem } from '@mui/material';
import { NavigationLink } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <MenuItem>
        <NavigationLink to="/">Home</NavigationLink>
      </MenuItem>

      {isLoggedIn && (
        <MenuItem sx={{ flexGrow: 1 }}>
          {' '}
          <NavigationLink to="/contacts">Contacts</NavigationLink>
        </MenuItem>
      )}
    </>
  );
}

export default Navigation;
