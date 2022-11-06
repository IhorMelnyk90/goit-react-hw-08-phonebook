import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { Button, MenuItem } from '@mui/material';
import defaultAvatar from './defaultAvatar.png';
import { Avatar, Name } from './UserMenu.styled';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <>
      <MenuItem>
        <Avatar src={avatar} alt="avatar" width="36" />
        <Name>{name}</Name>
      </MenuItem>
      <Button
        variant="contained"
        size="small"
        onClick={() => dispatch(authOperations.logOut())}
        type="button"
      >
        Logout
      </Button>
    </>
  );
}

export default UserMenu;
