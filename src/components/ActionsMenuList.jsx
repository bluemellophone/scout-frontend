import React from 'react';
import MenuList from '@material-ui/core/MenuList';

export default function ActionsMenuList({ style, ...rest }) {
  return <MenuList style={{ minWidth: 300, ...style }} {...rest} />;
}
