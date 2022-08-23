import React, { useState, useMemo } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { get } from 'lodash-es';

import { getHighestRoleLabelId } from '../utils/roleUtils';
import { formatDate } from '../utils/formatters';
import EntityHeaderNew from './EntityHeaderNew';
import BigAvatar from './profilePhotos/BigAvatar';
import MainColumn from './MainColumn';
import SadScreen from './SadScreen';
import EditUserMetadata from './EditUserMetadata';
import Text from './Text';

export default function UserProfile({
  children,
  userData,
  userId,
  userDataLoading,
  refreshUserData,
  someoneElse,
}) {
  const intl = useIntl();
  const [editingProfile, setEditingProfile] = useState(false);
  const metadataSchemas = [];

  const metadata = useMemo(
    () => {
      if (!userData || !metadataSchemas) return [];
      return metadataSchemas
        .filter(
          schema => schema.getValue(schema, userData) || !someoneElse,
        )
        .map(schema => ({
          ...schema,
          value: schema.getValue(schema, userData),
        }));
    },
    [userData, metadataSchemas],
  );

  const imageSrc = get(userData, ['profile_fileupload', 'src']);
  const imageGuid = get(userData, ['profile_fileupload', 'guid']);
  let name = get(
    userData,
    'full_name',
    intl.formatMessage({ id: 'UNNAMED_USER' }),
  );
  if (name === '') name = intl.formatMessage({ id: 'UNNAMED_USER' });
  const dateCreated = formatDate(get(userData, 'created'), true);

  const highestRoleLabelId = getHighestRoleLabelId(userData);

  if (!userData)
    return <SadScreen variant="notFound" subtitle="User not found" />;

  return (
    <MainColumn fullWidth>
      <EditUserMetadata
        open={editingProfile}
        userId={userId}
        metadata={metadata}
        onClose={() => setEditingProfile(false)}
      />
      <EntityHeaderNew
        name={name}
        editable
        onSettingsClick={
          () => setEditingProfile(true) // ???
        }
        renderAvatar={
          <BigAvatar
            editable
            userId={userId}
            imageGuid={imageGuid}
            imageSrc={imageSrc}
            name={name}
            chipLabel={<FormattedMessage id={highestRoleLabelId} />}
            refreshUserData={refreshUserData}
            userDataLoading={userDataLoading}
          />
        }
        renderOptions={undefined}
      >
        <Text
          variant="body2"
          domId="selenium-user-since"
          id="USER_SINCE"
          values={{ date: dateCreated }}
        />
      </EntityHeaderNew>
      {children}
    </MainColumn>
  );
}
