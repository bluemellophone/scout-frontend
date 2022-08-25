import React from 'react';
import { useParams } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

import WildMeLogo from '../../assets/wild-me-gradient-logo.png';
import nothing from '../../assets/nothing.jpeg';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Text from '../../components/Text';
import ButtonLink from '../../components/ButtonLink';

export default function AddingImages() {
  const { id: missionGuid } = useParams();
  useDocumentTitle('Adding images...');

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
        justifyContent: 'center',
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
        <Text variant="h4" component="h4">
          Adding images...
        </Text>
        <div style={{ width: '100%', padding: '0 36px' }}>
          <LinearProgress
            color="secondary"
            style={{ width: '100%', margin: '16px 0' }}
          />
        </div>
        <Text style={{ maxWidth: 400 }}>
          This can take a while. You can jump to the project page, but
          images might not be available yet.
        </Text>
        <ButtonLink
          href={`/projects/${missionGuid}`}
          display="primary"
          style={{ marginTop: 16 }}
        >
          GO TO PROJECT
        </ButtonLink>
      </Paper>
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          display: 'flex',
          alignItems: 'center',
        }}
      >
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
