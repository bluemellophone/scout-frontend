import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import WildMeLogo from '../assets/wild-me-gradient-logo.png';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useOnEnter from '../hooks/useOnEnter';
import Button from './ButtonNew';
import Text from './Text';

export default function SimpleFormPage({
  title,
  instructions,
  buttonId = 'submit-form',
  buttonText,
  onSubmit,
  buttonProps = {},
  renderBelowButton,
  disableBack = false,
  children,
}) {
  const history = useHistory();
  const theme = useTheme();
  useDocumentTitle(title);

  useOnEnter(() => {
    document.querySelector(`#${buttonId}`).click();
  });

  return (
    <div
      style={{
        paddingTop: '10vh',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: theme.palette.grey['100'],
      }}
    >
      {!disableBack && (
        <Button
          display="inline"
          icon="back"
          onClick={history.goBack}
          style={{ position: 'absolute', left: 16, top: 12 }}
        >
          Back
        </Button>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={WildMeLogo}
          style={{ width: 120 }}
          alt="Wild Me logo"
        />
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 8,
            marginBottom: 12,
            fontSize: '1.2rem',
          }}
        >
          Wild Me Scout
        </Text>
      </div>
      <Paper
        style={{
          width: 360,
          marginTop: 24,
          maxWidth: '90%',
          position: 'relative',
          padding: '12px 16px 20px 16px',
          height: 'min-content',
        }}
      >
        <Text variant="h5" style={{ maxWidth: 460, marginLeft: 2 }}>
          {title}
        </Text>
        <Text
          variant="body2"
          style={{ maxWidth: 460, margin: '8px 0 8px 4px' }}
        >
          {instructions}
        </Text>
        {children}
        <Button
          domId={buttonId}
          onClick={onSubmit}
          display="primary"
          fullWidth
          {...buttonProps}
        >
          {buttonText}
        </Button>
        {renderBelowButton}
      </Paper>
    </div>
  );
}
