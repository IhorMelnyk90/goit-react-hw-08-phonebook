import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: black;  
  
  &.active {
    color: yellow;
    font-size: large;
  }
`;