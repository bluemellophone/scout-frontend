import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';

import useDocumentTitle from '../hooks/useDocumentTitle';
import Button from './Button';
import Text from './Text';

export default function SimpleFormPage({
  title,
  instructions,
  buttonId = 'submit form',
  buttonText,
  onSubmit,
  buttonProps = {},
  renderBelowButton = Function.prototype,
  children,
}) {
  useDocumentTitle(title);
  const theme = useTheme();

  function onKeyUp(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.querySelector(`#${buttonId}`).click();
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  return (
    <div
      style={{
        paddingTop: '20vh',
        minHeight: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        background: theme.palette.grey['100'],
      }}
    >
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
