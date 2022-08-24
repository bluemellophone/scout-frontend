import React from 'react';

import ViewIcon from '@material-ui/icons/Visibility';

import Button from '../../Button';
import ButtonLink from '../../ButtonLink';
import ButtonMenu from '../../ButtonMenu';

const buttonStyles = {
  borderRadius: 3,
  margin: '4px 0',
  padding: '0 8px',
};
const viewButtonProps = {
  size: 'small',
  display: 'panel',
  style: { ...buttonStyles, marginRight: 4 },
  startIcon: <ViewIcon />,
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
          View
        </Button>
      )}
      {viewHref && (
        <ButtonLink href={viewHref} {...viewButtonProps}>
          View
        </ButtonLink>
      )}
      <ButtonMenu
        size="small"
        display="panel"
        buttonId="actions"
        actions={clickyActions}
        style={buttonStyles}
      >
        Actions
      </ButtonMenu>
    </div>
  );
}
