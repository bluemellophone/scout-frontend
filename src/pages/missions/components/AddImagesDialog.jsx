import React, { useEffect, useRef, useState } from 'react';
import { get } from 'lodash-es';
import { v4 as uuid } from 'uuid';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';

import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Button from '../../../components/Button';
import StandardDialog from '../../../components/StandardDialog';
import UppyDashboard from '../../../components/UppyDashboard';
import usePostMissionCollection from '../../../models/missionCollection/usePostMissionCollection';

import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

export default function AddImagesDialog({
  open,
  onClose,
  missionGuid,
}) {
  const {
    isLoading,
    postMissionCollection,
  } = usePostMissionCollection();

  const [files, setFiles] = useState([]);
  const [uppy, setUppy] = useState(null);
  const [uploadInProgress, setUploadInProgress] = useState(false);
  const [assetSubmissionId, setAssetSubmissionId] = useState(null);

  /* Resolves closure / useEffect issue */
  // https://www.youtube.com/watch?v=eTDnfS2_WE4&feature=youtu.be
  const fileRef = useRef([]);
  fileRef.current = files;

  useEffect(
    () => {
      if (!open) {
        if (uppy) uppy.reset();
        if (uppy) uppy.close();
      } else {
        const newAssetSubmissionId = uuid();

        const uppyInstance = Uppy({
          meta: { type: 'MWS mission image upload' },
          restrictions: {
            allowedFileTypes: ['.jpg', '.jpeg', '.png'],
          },
          autoProceed: true,
        });

        uppyInstance.use(Tus, {
          endpoint: `${__houston_url__}/api/v1/tus`,
          headers: {
            'x-tus-transaction-id': newAssetSubmissionId,
          },
        });

        uppyInstance.on('upload', () => setUploadInProgress(true));

        uppyInstance.on('complete', uppyState => {
          const uploadObjects = get(uppyState, 'successful', []);
          const assetReferences = uploadObjects.map(o => ({
            path: o.name,
            transactionId: newAssetSubmissionId,
          }));

          setUploadInProgress(false);
          setFiles([...fileRef.current, ...assetReferences]);
        });

        uppyInstance.on('file-removed', (file, reason) => {
          if (reason === 'removed-by-user') {
            const newFiles = fileRef.current.filter(
              f => f.path !== file.name,
            );
            setFiles(newFiles);
          }
        });

        setUppy(uppyInstance);
        setAssetSubmissionId(newAssetSubmissionId);
      }
      return () => {
        if (uppy) uppy.close();
      };
    },
    [open],
  );

  function onCloseDialog() {
    setFiles([]);
    onClose();
  }

  const closeDialogDisabled = isLoading || uploadInProgress;
  const addButtonDisabled = files.length === 0 || closeDialogDisabled;

  return (
    <StandardDialog
      open={open}
      onClose={onCloseDialog}
      closeDialogDisabled={closeDialogDisabled}
      title="Add images"
    >
      <DialogContent>
        <UppyDashboard uppyInstance={uppy} />
      </DialogContent>
      <DialogActions>
        <Button
          display="basic"
          disabled={closeDialogDisabled}
          onClick={onCloseDialog}
          id="CANCEL"
        />

        <Button
          display="primary"
          disabled={addButtonDisabled}
          onClick={async () => {
            const result = await postMissionCollection(
              missionGuid,
              assetSubmissionId,
            );
            if (result?.status === 200) onCloseDialog();
          }}
        >
          Add images
        </Button>
      </DialogActions>
    </StandardDialog>
  );
}
