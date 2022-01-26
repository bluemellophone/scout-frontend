import React from 'react';
import AddIcon from '@material-ui/icons/Add';

import Text from '../../../components/Text';
import ButtonLink from '../../../components/ButtonLink';

export default function ListTitle({ title, buttonText, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px 0 8px 12px',
      }}
    >
      <Text variant="h6">{title}</Text>
      <ButtonLink
        {...rest}
        display="secondary"
        style={{
          textTransform: 'none',
          padding: '2px 6px',
          borderRadius: 3,
        }}
        startIcon={<AddIcon />}
        size="small"
      >
        {buttonText}
      </ButtonLink>
    </div>
  );
}
