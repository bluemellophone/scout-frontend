import React from 'react';
import { FormattedMessage } from 'react-intl';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import CustomAlert from './Alert';

export default function PasswordVerificationAlert({
  setPassword,
  description,
  descriptionId,
  style = {},
  children,
}) {
  return (
    <CustomAlert
      severity="info"
      titleId="PASSWORD_VERIFICATION_REQUIRED"
      description={description}
      descriptionId={descriptionId}
      style={style}
    >
      <FormControl
        required
        style={{
          width: 320,
          marginTop: 8,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <TextField
          autoComplete="password"
          variant="outlined"
          size="small"
          id="password"
          type="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
          label={<FormattedMessage id="PASSWORD" />}
          style={{ marginRight: 8 }}
        />
        {children}
      </FormControl>
    </CustomAlert>
  );
}
