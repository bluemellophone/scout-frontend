import React from 'react';
import { get } from 'lodash-es';
import Paper from '@material-ui/core/Paper';

import WildMeLogo from '../assets/wild-me-gradient-logo.png';
import nothing from '../assets/nothing.jpeg';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Text from './Text';
import ButtonLink from './ButtonLink';

const variantMap = {
  genericError: {
    documentTitle: 'An error occurred',
    subtitle: 'An error occurred',
    description: 'An unknown error occurred. If the problem persists, you can report this error on the Community Forums.',
  },
  serverUnavailable: {
    documentTitle: 'Server Unavailable',
    subtitle: 'Server Unavailable',
    description:
      'The server could not be reached. Unfortunately, normal site functionality is currently unavailable. Check back at a later date or try refreshing the page.',
  },
  notFound: {
    documentTitle: 'Page not found',
    title: '404',
    subtitle: 'Page not found',
    description: 'The page you are looking for may have been removed or may be temporarily unavailable.',
  },
};

export default function SadScreen(props) {
  const { variant } = props;

  const screenMetadata = variantMap[variant];

  function getProperty(property) {
    const propertyFromProps = get(props, property);
    return propertyFromProps || get(screenMetadata, property);
  }

  useDocumentTitle(getProperty('documentTitle'));

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${nothing})`,
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper
        style={{
          margin: '0 20px 80px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: '#ffffffc2',
          padding: 20,
        }}
      >
        <Text variant="h2" component="h2">
          {getProperty('title')}
        </Text>
        <Text variant="h4">
          {getProperty('subtitle')}
        </Text>
        <Text style={{ maxWidth: 400, marginTop: 16 }}>
          {getProperty('description')}
        </Text>
        <ButtonLink href="/" display="primary" style={{ marginTop: 16 }}>Return home</ButtonLink>
      </Paper>
      <div style={{ position: 'absolute', bottom: 20, left: 20, display: 'flex', alignItems: 'center' }}>
        <img
          src={WildMeLogo}
          style={{ width: 48, marginRight: 12 }}
          alt="Wild Me logo"
        />
        <Text variant="h5">Wild Me Scout</Text>
      </div>
    </div>
  );
}
