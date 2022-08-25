import React from 'react';

import Text from '../../../components/Text';
import Button from '../../../components/ButtonNew';
import ButtonLink from '../../../components/ButtonLink';

export default function ListTitle({
  title,
  buttonVariant = 'link',
  buttonText,
  ...rest
}) {
  const ButtonComponent =
    buttonVariant === 'link' ? ButtonLink : Button;
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
      <ButtonComponent
        {...rest}
        display="primary"
        icon="add"
        size="small"
        style={{
          padding: '2px 6px',
        }}
      >
        {buttonText}
      </ButtonComponent>
    </div>
  );
}
