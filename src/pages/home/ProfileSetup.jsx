import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { FormattedMessage } from 'react-intl';
=======
import { useIntl, FormattedMessage } from 'react-intl';
>>>>>>> 0ff463b7f9903682e076b9fc390c5a32b139b152
import { get } from 'lodash-es';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import usePatchUser from '../../models/users/usePatchUser';
import CustomAlert from '../../components/Alert';
import Text from '../../components/Text';
import Button from '../../components/Button';
<<<<<<< HEAD
import BaoWaving from '../../components/svg/BaoWaving';
=======
>>>>>>> 0ff463b7f9903682e076b9fc390c5a32b139b152
import SimpleFormPage from '../../components/SimpleFormPage';

const buttonId = 'saveProfile';

<<<<<<< HEAD
export default function ProfileSetup({ userData }) {
  const [noNameError, setNoNameError] = useState(false);
  const [name, setName] = useState('');

=======
export default function ProfileSetup({ userData, refreshUserData }) {
  const [noNameError, setNoNameError] = useState(false);
  const [name, setName] = useState('');

  const intl = useIntl();

>>>>>>> 0ff463b7f9903682e076b9fc390c5a32b139b152
  const {
    replaceUserProperties,
    loading: replaceLoading,
    error: replaceError,
  } = usePatchUser(get(userData, 'guid'));

<<<<<<< HEAD
  useDocumentTitle('SET_UP_PROFILE');
=======
  useDocumentTitle(intl.formatMessage({ id: 'SET_UP_PROFILE' }));
>>>>>>> 0ff463b7f9903682e076b9fc390c5a32b139b152

  function onKeyUp(e) {
    if (e.key === 'Enter') {
      document.querySelector(`#${buttonId}`).click();
      e.preventDefault();
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  async function saveProfile() {
    if (name) {
      const properties = [
        {
          path: '/full_name',
          value: name,
        },
      ];
<<<<<<< HEAD
      await replaceUserProperties(properties);
=======
      const successful = await replaceUserProperties(properties);
      if (successful) refreshUserData();
>>>>>>> 0ff463b7f9903682e076b9fc390c5a32b139b152
    } else {
      setNoNameError(true);
    }
  }
  return (
    <SimpleFormPage
      titleId="SET_UP_PROFILE"
      instructionsId="SET_UP_PROFILE_INSTRUCTIONS"
<<<<<<< HEAD
      BaoComponent={BaoWaving}
=======
>>>>>>> 0ff463b7f9903682e076b9fc390c5a32b139b152
    >
      <form>
        <Grid
          container
          spacing={2}
          direction="column"
          style={{ padding: '16px 0', width: 280 }}
        >
          <Grid item>
            <FormControl
              required
              style={{ width: '100%', marginBottom: 4 }}
            >
              <TextField
                variant="outlined"
                id="name"
                error={noNameError}
                onChange={e => {
                  setName(e.target.value);
                  if (noNameError) setNoNameError(false);
                }}
                label={<FormattedMessage id="FULL_NAME_REQUIRED" />}
                helperText={
                  noNameError ? (
                    <FormattedMessage id="FULL_NAME_IS_REQUIRED" />
                  ) : (
                    undefined
                  )
                }
              />
              <Text
                style={{ margin: '8px 4px 0 4px' }}
                variant="caption"
                id="FULL_NAME_DESCRIPTION"
              />
            </FormControl>
          </Grid>
          {replaceError && (
            <CustomAlert
              severity="error"
              description={replaceError}
            />
          )}
          <Grid item style={{ position: 'relative' }}>
            <Button
              domId={buttonId}
              loading={replaceLoading}
              onClick={saveProfile}
              display="primary"
              id="SAVE_PROFILE"
            />
          </Grid>
        </Grid>
      </form>
    </SimpleFormPage>
  );
}
