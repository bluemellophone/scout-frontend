import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { get } from 'lodash-es';

export default function(message, configuration = {}) {
  const intl = useIntl();
  const appendSiteNameConfiguration = get(
    configuration,
    'appendSiteName',
    true,
  );
  const translateMessage = get(
    configuration,
    'translateMessage',
    false,
  );
  const refreshKey = get(configuration, 'refreshKey', null);
  const messageValues = get(configuration, 'messageValues', {});

  const siteName = 'MWS';
  const appendSiteName = siteName && appendSiteNameConfiguration;

  useEffect(
    () => {
      const translatedMessage = translateMessage
        ? intl.formatMessage({ id: message }, messageValues)
        : message;
      if (appendSiteName && siteName) {
        document.title = `${translatedMessage} • ${siteName}`;
      } else {
        document.title = translatedMessage;
      }
    },
    [message, refreshKey, siteName, appendSiteName],
  );
}
