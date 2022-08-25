import React, { useState } from 'react';

import Text from './Text';
import Button from './ButtonNew';
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
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {showBackButton && (
            <ButtonLink
              display="inline"
              icon="back"
              href={backButtonHref}
            >
              {backButtonText}
            </ButtonLink>
          )}
          <Text variant="h4">{title}</Text>
          {subtitle && <Text variant="subtitle2">{subtitle}</Text>}
        </div>
        <div>
          {MenuComponent && (
            <Button
              size="small"
              display="inline"
              icon="expand"
              onClick={e => setAnchorEl(e.currentTarget)}
            >
              Menu
            </Button>
          )}
          {MenuComponent && (
            <MenuComponent
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              {...menuComponentProps}
            />
          )}
        </div>
      </div>
    </div>
  );
}
