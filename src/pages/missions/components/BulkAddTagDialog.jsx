import React, { useState } from 'react';
import { get } from 'lodash-es';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import { getKeywordColor } from '../../../utils/colorUtils';
import useGetKeywords from '../../../models/keywords/useGetKeywords';
import useAddKeywordToAssets from '../../../models/keywords/useAddKeywordToAssets';
import StandardDialog from '../../../components/StandardDialog';
import Button from '../../../components/Button';
import Alert from '../../../components/Alert';

export default function BulkAddTagDialog({
  open,
  onClose,
  selectedImages,
})
{
  const { data: keywordOptions } = useGetKeywords();
  const { addKeywordToAssets, isLoading, error } = useAddKeywordToAssets();

  const [newTagSelectValue, setNewTagSelectValue] = useState(null);
  const [newTagInputValue, setNewTagInputValue] = useState('');

  function handleClose()
  {
    setNewTagSelectValue(null);
    setNewTagInputValue('');
    onClose();
  }

  const safeKeywordOptions = keywordOptions || [];

  return (
    <StandardDialog
      open={open}
      onClose={handleClose}
      title="Add tag"
      PaperProps={{ style: { width: 400 } }}
    >
      <DialogContent>
        <Autocomplete
          id="tag value"
          freeSolo
          blurOnSelect
          clearOnEscape
          handleHomeEndKeys
          selectOnFocus
          value={newTagSelectValue}
          onChange={(_, newValue) =>
          {
            setNewTagSelectValue(newValue);
          }}
          inputValue={newTagInputValue}
          onInputChange={(_, newValue) =>
          {
            setNewTagInputValue(newValue);
          }}
          disabled={isLoading}
          options={safeKeywordOptions}
          getOptionLabel={option => get(option, 'value', '')}
          renderOption={option => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 8,
                  borderRadius: 100,
                  backgroundColor: getKeywordColor(option.guid),
                }}
              />
              <span>{option.value}</span>
            </div>
          )}
          renderInput={params => (
            <TextField
              {...params}
              autoFocus
              variant="outlined"
              style={{ width: 300, marginBottom: 16 }}
            />
          )}
        />
        {error && (
          <Alert
            style={{ marginTop: 16, marginBottom: 8 }}
            severity="error"
            title="Failed to add tag"
          >
            {error}
          </Alert>
        )}
      </DialogContent>
      <DialogActions style={{ padding: '0px 24px 24px 24px' }}>
        <Button display="basic" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          display="primary"
          loading={isLoading}
          disabled={isLoading || newTagInputValue === ''}
          onClick={async () =>
          {
            const selectValue = get(newTagSelectValue, 'value');
            const selectKeywordId = get(newTagSelectValue, 'guid');
            const matchingKeywordId =
              newTagInputValue === selectValue
                ? selectKeywordId
                : null;

            const result = await addKeywordToAssets(
              selectedImages,
              matchingKeywordId,
              newTagInputValue,
            );
            if (result?.status === 200) handleClose();
          }}
        >
          Add tag
        </Button>
      </DialogActions>
    </StandardDialog>
  );
}
