import React from 'react';
import { FormattedMessage } from 'react-intl';
import MuiAlert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Text from './Text';

const Core = function({
  descriptionId = '',
  description,
  descriptionValues,
  alertChildren,
  children,
  ...rest
}) {
  return (
    <MuiAlert {...rest}>
      {children}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {descriptionId ? (
          <FormattedMessage
            id={descriptionId}
            values={descriptionValues}
          />
        ) : (
          description
        )}
        {alertChildren}
      </div>
    </MuiAlert>
  );
};

export default function CustomAlert({
  titleId = '',
  title,
  titleValues,
  children: alertChildren,
  ...rest
}) {
  const isTitle = titleId || title;
  return (
    <Core {...rest} alertChildren={alertChildren}>
      {isTitle ? (
        <AlertTitle>
          {titleId ? (
            <Text id={titleId} values={titleValues} />
          ) : (
            <Text>{title}</Text>
          )}
        </AlertTitle>
      ) : null}
    </Core>
  );
}
