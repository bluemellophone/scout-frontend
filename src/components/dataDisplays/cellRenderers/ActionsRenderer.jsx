import React from 'react';

import Button from '../../ButtonNew';
import ButtonLink from '../../ButtonLink';
import ButtonMenu from '../../ButtonMenu';

const buttonStyles = {
  margin: '4px 0',
  padding: '0 12px',
};

const viewButtonProps = {
  display: 'neutral',
  style: { ...buttonStyles, marginRight: 4 },
  icon: 'view',
};

export default function ActionsRenderer({
  value,
  datum,
  onView,
  viewHref,
  actions,
}) {
  const clickyActions = actions.map(action => ({
    ...action,
    onClick: () => action?.onClick(value, datum),
  }));

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {onView && (
        <Button onClick={onView} {...viewButtonProps}>
          VIEW
        </Button>
      )}
      {viewHref && (
        <ButtonLink href={viewHref} {...viewButtonProps}>
          VIEW
        </ButtonLink>
      )}
      <ButtonMenu
        size="small"
        display="neutral"
        buttonId="actions"
        actions={clickyActions}
        style={buttonStyles}
      >
        ACTIONS
      </ButtonMenu>
    </div>
  );
}
