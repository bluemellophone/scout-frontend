import React, { useState } from 'react';

import { useTheme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DropDownIcon from '@material-ui/icons/ArrowDropDown';

import Text from './Text';
import ButtonLink from './ButtonLink';

export default function BodyHeader({
  title,
  subtitle,
  showBackButton = false,
  backButtonText = 'Back',
  backButtonHref,
  MenuComponent,
  menuComponentProps = {},
}) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {showBackButton && (
          <ButtonLink display="back" href={backButtonHref}>
            {backButtonText}
          </ButtonLink>
        )}
        <Text variant="h4">{title}</Text>
        {subtitle && <Text variant="subtitle2">{subtitle}</Text>}
      </div>
      {MenuComponent && (
        <Tooltip title="More actions">
          <IconButton
            style={{
              marginTop: 8,
              border: `1px solid ${theme.palette.grey.A100}`,
            }}
            onClick={e => setAnchorEl(e.currentTarget)}
          >
            <DropDownIcon />
          </IconButton>
        </Tooltip>
      )}
      {MenuComponent && (
        <MenuComponent
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          {...menuComponentProps}
        />
      )}
    </div>
  );
}
