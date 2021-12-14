import React from 'react';
import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";
import styled from '@mui/system/styled';
import { Page } from "../../../types/pages";

const StyledLink = styled(Link)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const NavLink = ({ page: { name, path } }: { page: Page }): JSX.Element => (
  <StyledLink key={name} href={path} id={`header__${name}-link`} className={'header__link'} >
    <Typography color="textPrimary">{name}</Typography>
  </StyledLink>
);

export default NavLink;