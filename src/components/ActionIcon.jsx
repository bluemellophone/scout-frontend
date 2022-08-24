import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import PasswordIcon from '@material-ui/icons/Lock';
import EditIcon from '@material-ui/icons/Edit';
import ViewIcon from '@material-ui/icons/Launch';
import DeleteIcon from '@material-ui/icons/Delete';
import DownloadIcon from '@material-ui/icons/GetApp';
import CopyIcon from '@material-ui/icons/FileCopy';

import Link from './Link';

const variantMap = {
  password: {
    label: 'Reset password',
    component: PasswordIcon,
  },
  edit: {
    label: 'Edit',
    component: EditIcon,
  },
  view: {
    label: 'View',
    component: ViewIcon,
  },
  delete: {
    label: 'Delete',
    component: DeleteIcon,
  },
  download: {
    label: 'Download',
    component: DownloadIcon,
  },
  copy: {
    label: 'Copy',
    component: CopyIcon,
  },
};

const Core = function({ variant, labelId, ...rest }) {
  const config = variantMap[variant];
  const label = labelId || config?.label;

  return (
    <Tooltip title={label}>
      <IconButton style={{ padding: 4 }} aria-label={label} {...rest}>
        <config.component />
      </IconButton>
    </Tooltip>
  );
};

export default function ActionIcon({ href, linkProps, ...rest }) {
  if (href) {
    return (
      <Link href={href} {...linkProps}>
        <Core {...rest} />
      </Link>
    );
  }

  return <Core {...rest} />;
}
